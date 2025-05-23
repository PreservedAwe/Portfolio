'use client'; 
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import {motion} from "framer-motion-3d";
import {useFrame} from "@react-three/fiber";
import React, { useRef, useMemo, useContext, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';

const context = createContext()
export function InstancesE({ children, ...props }) {
  const { nodes } = useGLTF('/emerald_chaos.glb')
  const instances = useMemo(
    () => ({
      Gem: nodes.Gem_1,
      Gem1: nodes.Gem_2,
      Gem2: nodes.Gem_3,
      Gem3: nodes.Gem_4,
      Gem4: nodes.Gem_5,
      Gem5: nodes.Gem_6,
      Gem6: nodes.Gem_7,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (<context.Provider value={instances}>{children}</context.Provider>)}
    </Merged>
  )
}

export function Emeralds(props) {

  const modelRef = useRef(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.z += 0.01;
    }
})

  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <motion.group initial={{ z: -300 }} animate={{ z: 0 }} transition={{ ease: "easeIn", duration: 1.5 }} ref={modelRef} position={[0, 0, 0]} scale={[0.9, 0.9, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <instances.Gem />
        <instances.Gem1 />
        <instances.Gem2 />
        <instances.Gem3 />
        <instances.Gem4 />
        <instances.Gem5 />
        <instances.Gem6 />
      </motion.group>
    </group>
  )
}

useGLTF.preload('/emerald_chaos.glb')