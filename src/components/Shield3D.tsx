// Bouclier 3D stylisé avec effet de scan
'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { useTheme } from '@/lib/theme-context';

export function Shield() {
  const meshRef = useRef<Group>(null);
  const { theme } = useTheme();
  const [scanPosition, setScanPosition] = useState(0);

  useFrame((state) => {
    // Animation de la ligne de scan
    setScanPosition((prev) => (prev + 0.01) % 1);
  });

  const accentColor = theme === 'terminal' ? '#00ff9d' : '#ff6b6b';
  const baseColor = theme === 'terminal' ? '#0d1b2a' : '#242442';

  return (
    <group ref={meshRef}>
      {/* Bouclier principal - forme hexagonale stylisée */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.3, 6]} />
        <meshStandardMaterial
          color={baseColor}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Bordure du bouclier */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.6, 1.6, 0.32, 6]} />
        <meshStandardMaterial
          color={accentColor}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Ligne de scan animée */}
      <mesh position={[0, -1.5 + scanPosition * 3, 0.2]}>
        <boxGeometry args={[3, 0.05, 0.05]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Icône de cadenas au centre */}
      <mesh position={[0, 0, 0.2]}>
        <boxGeometry args={[0.8, 0.6, 0.1]} />
        <meshStandardMaterial
          color={accentColor}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Anse du cadenas */}
      <mesh position={[0, 0.5, 0.2]}>
        <torusGeometry args={[0.25, 0.08, 8, 16, Math.PI]} />
        <meshStandardMaterial
          color={accentColor}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Points lumineux décoratifs */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 1.8;
        const y = Math.sin(angle) * 1.8;
        return (
          <mesh key={i} position={[x, y, 0]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color={accentColor}
              emissive={accentColor}
              emissiveIntensity={1}
            />
          </mesh>
        );
      })}
    </group>
  );
}