'use client';

import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { Color, Vector3, CatmullRomCurve3 } from 'three';

function NodesAndLines({ count = 12, accent = '#3ddc84', accent2 = '#3dd6dc' }: { count?: number; accent?: string; accent2?: string }) {
  const group = useRef<any>();
  const [positions] = useState(() => {
    const pts: Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const r = 1.0 + Math.random() * 3.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI - Math.PI / 2;
      pts.push(new Vector3(r * Math.cos(theta) * Math.cos(phi) * 6, r * Math.sin(phi) * 4, r * Math.sin(theta) * Math.cos(phi) * 6));
    }
    return pts;
  });

  // create simple lines
  const lines = useMemo(() => {
    const pairs: [number, number][] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (Math.random() < 0.18) pairs.push([i, j]);
      }
    }
    return pairs;
  }, [positions]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += 0.02 * delta; // slow rotate
  });

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={p.toArray()}>
          <icosahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color={accent} metalness={0.3} roughness={0.8} transparent opacity={0.9} />
        </mesh>
      ))}

      {/* Consolidated lineSegments for performance */}
      {lines.length > 0 && (() => {
        const positionsArray = new Float32Array(lines.length * 2 * 3);
        let o = 0;
        for (let i = 0; i < lines.length; i++) {
          const [a, b] = lines[i];
          const p1 = positions[a];
          const p2 = positions[b];
          positionsArray[o++] = p1.x; positionsArray[o++] = p1.y; positionsArray[o++] = p1.z;
          positionsArray[o++] = p2.x; positionsArray[o++] = p2.y; positionsArray[o++] = p2.z;
        }
        return (
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" array={positionsArray} count={positionsArray.length / 3} itemSize={3} />
            </bufferGeometry>
            <lineBasicMaterial color={accent2} linewidth={1} transparent opacity={0.35} />
          </lineSegments>
        );
      })()}

    </group>
  );
}

export default function NetworkScene({ theme }: { theme: 'terminal' | 'soc' }) {
  // pick accent colors from theme
  const accent = theme === 'terminal' ? '#3ddc84' : '#ff8a3d';
  const accent2 = theme === 'terminal' ? '#3dd6dc' : '#3d8eff';

  // fallback for non-webgl handled by Canvas automatically
  return (
    <Canvas
      className="absolute inset-0 z-0"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 18], fov: 45 }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight intensity={0.4} position={[10, 10, 5]} />
      <NodesAndLines count={12} accent={accent} accent2={accent2} />
    </Canvas>
  );
}
