// Scène 3D avec bouclier stylisé et effet de scan
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Shield } from './Shield3D';
import { Suspense } from 'react';

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]} // Optimisation pour les écrans retina
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Shield />
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}