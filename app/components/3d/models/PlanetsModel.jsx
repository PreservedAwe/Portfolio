/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: dante6686 (https://sketchfab.com/dante6686)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-planets-91814453535b4016be5a1c213ead23f9
Title: Sci Fi Planets
*/

import React, { useRef, useMemo, useContext, createContext, useEffect } from 'react'
import { useGLTF, Merged } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const context = createContext()
export function Instances({ children, ...props }) {
    const { nodes } = useGLTF('/sci_fi_planets.glb')
    const instances = useMemo(
        () => ({
        Sphere: nodes.Sphere_0,
        Sphere1: nodes.Sphere001_0,
        Sphere2: nodes.Sphere002_0,
        Sphere3: nodes.Sphere003_0,
        Sphere4: nodes.Sphere004_0,
        Sphere5: nodes.Sphere005_0,
        Sphere6: nodes.Sphere006_0,
        Sphere7: nodes.Sphere007_0,
        Sphere8: nodes.Sphere008_0,
        }),
        [nodes]
    )
    return (
        <Merged meshes={instances} {...props}>
        {(instances) => <context.Provider value={instances}>{children}</context.Provider>}
        </Merged>
)
}

export function Planets(props) {
    const wrapperRef = useRef()
    const modelRef = useRef()
    const instances = useContext(context)
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
            wrapperRef.current.rotation.y -= 0.0011// Adjust speed as needed
        }
    })
    return (
        <group ref={wrapperRef} {...props} dispose={null}>
        <group ref={modelRef} scale={[0.90, 0.90, 0.90]} rotation={[-Math.PI / 2, 0, 0]}>
            <instances.Sphere position={[-4.625, -0.162, 0]} scale={1.55} />
            <instances.Sphere1 position={[-1.36, -1.149, 0]} scale={1.366} />
            <instances.Sphere2 position={[-2.279, -3.01, 0]} rotation={[0, 0, 0.124]} scale={1.692} />
            <instances.Sphere3 position={[-2.512, 1.636, 0]} scale={2.58} />
            <instances.Sphere4 position={[-0.783, 3.047, 0]} scale={1.478} />
            <instances.Sphere5 position={[1.595, 0.799, 0]} rotation={[0, 0, -2.157]} scale={1.694} />
            <instances.Sphere6 position={[3.186, -1.823, 0]} scale={2.055} />
            <instances.Sphere7 position={[1.418, -3.921, 0]} rotation={[0, 0, -0.527]} scale={0.489} />
            <instances.Sphere8 position={[3.806, 1.111, 0.517]} scale={2.367} />
        </group>
        </group>
    )
}

useGLTF.preload('/sci_fi_planets.glb')