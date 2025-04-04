'use client'; 
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: StarWars-Universe (https://sketchfab.com/SWU)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/vaders-tie-873d6c1d5f484ef9aa0537fe749dc0c3
Title: Vader's TIE
*/

import React, { useRef, useMemo, useContext, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';
import {motion} from "framer-motion-3d";

const context = createContext()
export function InstancesV({ children, ...props }) {
    const { nodes } = useGLTF('/vaders_tie.glb')
    const instances = useMemo(
        () => ({
        Material: nodes.Material1,
        Material1: nodes.Material10,
        Material2: nodes.Material9,
        Material3: nodes.Material5,
        Material4: nodes.Material4,
        Material5: nodes.Material14,
        Material6: nodes.Material6,
        Material7: nodes.Material3,
        Material8: nodes.Material11,
        Material9: nodes.Material12,
        Material10: nodes.Material2,
        Material11: nodes.Material13,
        Material12: nodes.Material8,
        Material13: nodes.Material7,
        Material14: nodes.Material1_1,
        }),
        [nodes]
    )
    return (
        <Merged meshes={instances} {...props}>
        {(instances) => (<context.Provider value={instances}>{children}</context.Provider>)}
        </Merged>
    )
}

export function Vader(props) {
    const instances = useContext(context)
    return (
        <motion.group initial={{y: 5, x: 11}} animate={{y: -8, x: -12}} transition={{ ease: "easeIn", duration: 9, repeat: Infinity }} {...props} dispose={null} position={[0, 0, 0]} scale={[0.0012, 0.0012, 0.0012 ]} rotation={[1.2, -0.9, 0.6]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.002, 0.065, -449.464]}>
                <instances.Material />
                <instances.Material1 />
                <instances.Material2 />
                <instances.Material3 />
                <instances.Material4 />
                <instances.Material5 />
                <instances.Material6 />
                <instances.Material7 />
                <instances.Material8 />
                <instances.Material9 />
                <instances.Material10 />
                <instances.Material11 />
                <instances.Material12 />
                <instances.Material13 />
                <instances.Material14
                position={[-0.002, -0.065, 449.464]}
                rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
            </group>
        </group>
        </motion.group>
    )
}

useGLTF.preload('/vaders_tie.glb')