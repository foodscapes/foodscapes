/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { stepAtom } from 'store/home';

import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useRecoilValue } from 'recoil';

import { GLTFResult } from '../types';

export function SocioEconomic() {
  const { nodes } = useGLTF('/models/city-3.glb') as GLTFResult;
  const step = useRecoilValue(stepAtom);

  return (
    <mesh
      geometry={nodes.Socioeconomic.geometry}
      position={[-0.3905, 0.2713, -0.8573]}
      rotation={[0, -0.9438, 0]}
      scale={[0.0162, 0.0118, 0.0403]}
      castShadow
    >
      {/* <meshStandardMaterial attach="material" color="#E8CC6B" /> */}
      <motion.meshStandardMaterial
        animate={`step${step}`}
        variants={{
          initial: { color: '#FFF' },
          step0: { color: '#FFF' },
          step1: { color: '#FFF' },
          step2: { color: '#FFF' },
          step3: { color: '#E8CC6B' },
          step4: { color: '#E8CC6B' },
        }}
      />
    </mesh>
  );
}

useGLTF.preload('/models/city-3.glb');

export default SocioEconomic;
