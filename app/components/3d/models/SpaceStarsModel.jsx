import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function SpaceStars(props) {
    const wrapperRef = useRef()
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('/need_some_space.glb')

    useEffect(() => {
        if (modelRef.current) {
            // Calculate the center of the geometry
            const box = new THREE.Box3().setFromObject(modelRef.current)
            const center = box.getCenter(new THREE.Vector3())
            
            // Move the model so its center is at the origin
            modelRef.current.position.sub(center)
            
            // Position the wrapper at the original center
            if (wrapperRef.current) {
                wrapperRef.current.position.add(center)
            }
        }
    }, [])

    useFrame(() => {
        if (wrapperRef.current) {
            wrapperRef.current.rotation.y += 0.00095// Adjust speed as needed
        }
    })

    return (
        <group ref={wrapperRef} position={[-1.3, -1.5, 3.2]} {...props} dispose={null}>
            <group ref={modelRef}>
                <points
                    geometry={nodes.Object_2.geometry}
                    material={materials['Scene_-_Root']}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.013}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/need_some_space.glb')