/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { Suspense } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Model from './model';

export function LayerChart() {
  return (
    <Canvas
      camera={{
        position: [4, 4, 4],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
      gl={{
        physicallyCorrectLights: true,
      }}
      shadows
    >
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2.5} minDistance={2} maxDistance={20} />

      <ambientLight intensity={2.5} />
      <directionalLight
        color="white"
        position={[-1, 5, -1]}
        intensity={10}
        castShadow
        shadow-radius={8}
        shadow-mapSize={1024}
      />

      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default LayerChart;
