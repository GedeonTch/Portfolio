// Fond global animé : réseau de particules type plexus / threat-map
//
// Choix d'implémentation : three.js + @react-three/fiber (déjà installés dans le projet)
// plutôt que @tsparticles/react :
//   - aucune nouvelle dépendance (~200 KB de bundle évités)
//   - contrôle total : couleur lue depuis --accent du thème actif, densité réduite sur mobile,
//     pause via Page Visibility API, rendu statique si prefers-reduced-motion
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/lib/theme-context';

const MOBILE_BREAKPOINT = 768;
const NODE_COUNT_DESKTOP = 80;
const NODE_COUNT_MOBILE = 36;
const CAMERA_FOV = 60;
const CAMERA_Z = 10;
const Z_SPREAD = 1.5;          // profondeur légère des nœuds
const POINT_ALPHA = 0.55;      // discrétion du fond
const LINK_ALPHA = 0.32;
const MIN_LINKS = 3;           // chaque nœud est relié à au moins 3 voisins (aucun orphelin)
const FORCED_LINK_ALPHA = 0.14; // liens "de secours" plus discrets que les liens de proximité

interface PlexusSceneProps {
  accentColor: string;
  isMobile: boolean;
  reducedMotion: boolean;
}

function PlexusScene({ accentColor, isMobile, reducedMotion }: PlexusSceneProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const accentRef = useRef(new THREE.Color(accentColor));
  const mouseRef = useRef({ x: 0, y: 0 });
  const staticFrameDone = useRef(false);
  const { camera, size, invalidate } = useThree();

  const nodeCount = isMobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;

  // Bornes visibles du plan z=0 depuis le frustum caméra
  const bounds = useMemo(() => {
    const height = 2 * Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2)) * CAMERA_Z;
    const width = height * (size.width / Math.max(size.height, 1));
    return { x: width / 2, y: height / 2 };
  }, [size.width, size.height]);

  // Distance de connexion adaptée à la densité de nœuds
  const linkThreshold = useMemo(() => {
    const area = (2 * bounds.x) * (2 * bounds.y);
    return THREE.MathUtils.clamp(Math.sqrt(area / nodeCount) * 1.15, 1.3, 2.6);
  }, [bounds, nodeCount]);

  // Nœuds : position + vitesse de dérive lente, avec rebond aux bords (pas de téléportation)
  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.1 + Math.random() * 0.25;
      return {
        pos: new THREE.Vector3(
          (Math.random() * 2 - 1) * bounds.x,
          (Math.random() * 2 - 1) * bounds.y,
          (Math.random() * 2 - 1) * Z_SPREAD
        ),
        vel: new THREE.Vector3(Math.cos(angle) * speed, Math.sin(angle) * speed, 0),
      };
    });
  }, [nodeCount, bounds]);

  // Capacité : paires possibles + liens forcés de voisinage
  const maxSegments = (nodeCount * (nodeCount - 1)) / 2 + nodeCount * MIN_LINKS;

  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nodeCount * 3), 3));
    return geometry;
  }, [nodeCount]);

  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxSegments * 6), 3));
    // Couleur par vertex + blending additif : noir = invisible, gère l'opacité par segment
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(maxSegments * 6), 3));
    geometry.setDrawRange(0, 0);
    return geometry;
  }, [maxSegments]);

  // Compteurs de liens par nœud + paires déjà connectées (réinitialisés à chaque frame)
  const linkCounts = useMemo(() => new Uint16Array(nodeCount), [nodeCount]);
  const connectedPairs = useMemo(() => new Set<number>(), []);
  const scratchDistances = useMemo(() => new Float32Array(nodeCount), [nodeCount]);

  // Libération mémoire GPU
  useEffect(() => {
    return () => {
      pointsGeometry.dispose();
      linesGeometry.dispose();
    };
  }, [pointsGeometry, linesGeometry]);

  // Parallaxe souris (normalisée -1..1)
  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  // En mouvement réduit : une frame statique à chaque changement de couleur/taille
  useEffect(() => {
    staticFrameDone.current = false;
    invalidate();
  }, [accentColor, reducedMotion, bounds, invalidate]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current) return;
    if (reducedMotion && staticFrameDone.current) return;

    const step = Math.min(delta, 0.05);
    accentRef.current.set(accentColor);

    const positions = pointsGeometry.attributes.position as THREE.BufferAttribute;
    const linkPositions = linesGeometry.attributes.position as THREE.BufferAttribute;
    const linkColors = linesGeometry.attributes.color as THREE.BufferAttribute;

    // Dérive + rebond aux bords
    for (let i = 0; i < nodeCount; i++) {
      const node = nodes[i];
      if (!reducedMotion) {
        node.pos.addScaledVector(node.vel, step);
        if (node.pos.x > bounds.x || node.pos.x < -bounds.x) node.vel.x *= -1;
        if (node.pos.y > bounds.y || node.pos.y < -bounds.y) node.vel.y *= -1;
        node.pos.x = THREE.MathUtils.clamp(node.pos.x, -bounds.x, bounds.x);
        node.pos.y = THREE.MathUtils.clamp(node.pos.y, -bounds.y, bounds.y);
      }
      positions.setXYZ(i, node.pos.x, node.pos.y, node.pos.z);
    }
    positions.needsUpdate = true;

    // Connexions entre nœuds proches, intensité selon la distance
    const thresholdSq = linkThreshold * linkThreshold;
    const accent = accentRef.current;
    let segment = 0;
    linkCounts.fill(0);
    connectedPairs.clear();

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodes[i].pos.x - nodes[j].pos.x;
        const dy = nodes[i].pos.y - nodes[j].pos.y;
        const dz = nodes[i].pos.z - nodes[j].pos.z;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < thresholdSq) {
          const intensity = (1 - Math.sqrt(distSq) / linkThreshold) * LINK_ALPHA;
          const base = segment * 2;

          linkPositions.setXYZ(base, nodes[i].pos.x, nodes[i].pos.y, nodes[i].pos.z);
          linkPositions.setXYZ(base + 1, nodes[j].pos.x, nodes[j].pos.y, nodes[j].pos.z);
          linkColors.setXYZ(base, accent.r * intensity, accent.g * intensity, accent.b * intensity);
          linkColors.setXYZ(base + 1, accent.r * intensity, accent.g * intensity, accent.b * intensity);
          connectedPairs.add(i * 1024 + j);
          linkCounts[i]++;
          linkCounts[j]++;
          segment++;
        }
      }
    }

    // Garantie "tous reliés" : chaque nœud orphelin est connecté à ses plus
    // proches voisins (liens plus ténus pour préserver la lecture des distances)
    for (let i = 0; i < nodeCount; i++) {
      if (linkCounts[i] >= MIN_LINKS) continue;

      for (let j = 0; j < nodeCount; j++) {
        scratchDistances[j] = j === i ? Infinity : nodes[i].pos.distanceToSquared(nodes[j].pos);
      }

      let missing = MIN_LINKS - linkCounts[i];
      while (missing > 0) {
        // Plus proche voisin non encore connecté
        let nearest = -1;
        let nearestSq = Infinity;
        for (let j = 0; j < nodeCount; j++) {
          if (scratchDistances[j] < nearestSq) {
            const a = Math.min(i, j);
            const b = Math.max(i, j);
            if (!connectedPairs.has(a * 1024 + b)) {
              nearest = j;
              nearestSq = scratchDistances[j];
            }
          }
        }
        if (nearest === -1) break; // nœud déjà relié à tous les autres

        const a = Math.min(i, nearest);
        const b = Math.max(i, nearest);
        connectedPairs.add(a * 1024 + b);

        const base = segment * 2;
        linkPositions.setXYZ(base, nodes[i].pos.x, nodes[i].pos.y, nodes[i].pos.z);
        linkPositions.setXYZ(base + 1, nodes[nearest].pos.x, nodes[nearest].pos.y, nodes[nearest].pos.z);
        linkColors.setXYZ(base, accent.r * FORCED_LINK_ALPHA, accent.g * FORCED_LINK_ALPHA, accent.b * FORCED_LINK_ALPHA);
        linkColors.setXYZ(base + 1, accent.r * FORCED_LINK_ALPHA, accent.g * FORCED_LINK_ALPHA, accent.b * FORCED_LINK_ALPHA);
        segment++;

        scratchDistances[nearest] = Infinity; // ne pas re-sélectionner ce voisin pour i
        linkCounts[i]++;
        linkCounts[nearest]++;
        missing--;
      }
    }

    linesGeometry.setDrawRange(0, segment * 2);
    linkPositions.needsUpdate = true;
    linkColors.needsUpdate = true;

    // Parallaxe caméra discrète
    if (!reducedMotion) {
      camera.position.x += (mouseRef.current.x * 1.1 - camera.position.x) * 0.04;
      camera.position.y += (mouseRef.current.y * 0.7 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
    }

    staticFrameDone.current = true;
  });

  return (
    <>
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          color={accentColor}
          size={0.11}
          sizeAttenuation
          transparent
          opacity={POINT_ALPHA}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </>
  );
}

export default function NetworkBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accentColor, setAccentColor] = useState('#22d3ee');
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  // Hydratation + media queries + visibilité de l'onglet (pause de l'animation)
  useEffect(() => {
    setMounted(true);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const onMotionChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    motionQuery.addEventListener('change', onMotionChange);

    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    setIsMobile(mobileQuery.matches);
    const onMobileChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mobileQuery.addEventListener('change', onMobileChange);

    const onVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      motionQuery.removeEventListener('change', onMotionChange);
      mobileQuery.removeEventListener('change', onMobileChange);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  // Couleur lue depuis la variable CSS du thème actif
  useEffect(() => {
    const value = getComputedStyle(document.body).getPropertyValue('--accent').trim();
    if (value) setAccentColor(value);
  }, [theme]);

  if (!mounted) return null;

  const frameloop = reducedMotion ? 'demand' : pageVisible ? 'always' : 'never';

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        frameloop={frameloop}
      >
        <PlexusScene
          accentColor={accentColor}
          isMobile={isMobile}
          reducedMotion={reducedMotion}
        />
      </Canvas>
    </div>
  );
}
