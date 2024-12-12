'use client'; 
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import {useFrame} from "@react-three/fiber";
import React, { useRef, memo } from 'react';
import {useGLTF} from '@react-three/drei';
import {motion} from "framer-motion-3d";

export default memo(function Model(props) {
  const { nodes, materials } = useGLTF('/emerald_chaos.glb')

  const modelRef = useRef(null);

  useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.z += 0.01;

      }
  })

  return (
    <group {...props} dispose={null}>
      <motion.group initial={{ z: -300 }} animate={{ z: 0 }} transition={{ ease: "easeIn", duration: 1.5 }} ref={modelRef} position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Gem_1.geometry} material={materials.green} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gem_2.geometry}
          material={materials['light blue']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Gem_3.geometry} material={materials.blue} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gem_4.geometry}
          material={materials.purple}
        />
        <mesh castShadow receiveShadow geometry={nodes.Gem_5.geometry} material={materials.red} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gem_6.geometry}
          material={materials.yellow}
        />
        <mesh castShadow receiveShadow geometry={nodes.Gem_7.geometry} material={materials.white} />
      </motion.group>
    </group>
  )
})

useGLTF.preload('/emerald_chaos.glb')