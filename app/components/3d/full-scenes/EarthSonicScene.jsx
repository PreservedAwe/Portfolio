'use client';

import { Canvas, useThree} from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useLoader } from "@/components/partials/Loader";

function FullEarthSuperSonicScene() {
    const group = useRef();
    const { scene, cameras, animations } = useGLTF('/models/earth-supersonic.glb');
    const { actions } = useAnimations(animations, group);
    const { set, size } = useThree();
    const { markSceneAsReady } = useLoader();

    const firstFrameDone = useRef(false);

    useFrame(() => {
        if (firstFrameDone.current) return;

        firstFrameDone.current = true;
        markSceneAsReady();
    });

    useEffect(() => {
        scene.traverse((obj) => {
        if (obj.isLight) {
            obj.visible = false;
        }
        });
    }, [scene]);

    useEffect(() => {
        if (cameras?.length) {
        const cam = cameras[0];
        set({ camera: cam });

        cam.aspect = size.width / size.height;
        cam.updateProjectionMatrix();
        }
    }, [cameras, set, size]);

    useEffect(() => {
        if (!actions) return;

        Object.values(actions).forEach((action) => {
        if (!action) return;

        action.reset();

        // Loop forever
        action.setLoop(THREE.LoopRepeat, Infinity);

        // Optional: smooth looping
        action.clampWhenFinished = false;

        // Optional: speed
        action.timeScale = 0.3;

        action.play();
        });
    }, [actions]);

    return <primitive ref={group} object={scene} />;
    }

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-hero-galaxy -z-10">
            <Canvas shadows frameloop="always" gl={{antialias: true}}>
                <directionalLight position={[5, 2, 5]} intensity={3}/>
                <FullEarthSuperSonicScene />            
            </Canvas>
        </div>    
    );
}