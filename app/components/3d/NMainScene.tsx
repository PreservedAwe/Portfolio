'use client'; 

import {Canvas, useThree} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import {SpaceStars} from "./models/SpaceStarsModel";
import {SuperSonic} from "./models/SuperSonicModel";
import {Planets, Instances} from "./models/PlanetsModel";
import FrameRateLimiter from "./FrameRateLimiter";
import {useEffect, useState} from 'react';
import {BackgroundVideo} from "./SceneBackgroundVideo";

export default function Scene() {

    const BASE_FOV = 75;
    const BASE_POS = { x: 0, y: 0, z: 5.4 };
    const BASE_NEAR = 0.1;
    const BASE_FAR = 5000;

    const [cameraPos, setCameraPos] = useState({...BASE_POS});

    useEffect(() => {
        const updateCamera = () => {
            const aspect = window.innerWidth / window.innerHeight;

            // Zoom factor (how much to pull back)
            const factor = Math.min(1.03, aspect < 1 ? 1 / aspect : 1); 

            // Pull Z back
            const z = BASE_POS.z * factor;

            // Adjust Y slightly to center tall screens
            const y = BASE_POS.y * factor; 

            // Adjust X if you ever want to support horizontal offsets
            const x = BASE_POS.x * factor; 

            setCameraPos({x, y, z});
        };

        updateCamera();
        window.addEventListener('resize', updateCamera);
        return () => window.removeEventListener('resize', updateCamera);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-hero-galaxy -z-10">
            <BackgroundVideo />
            <Canvas frameloop="never" camera={{position: [cameraPos.x, cameraPos.y, cameraPos.z], fov: BASE_FOV, near: BASE_NEAR, far: BASE_FAR,}} >
                <FrameRateLimiter fps={90}>
                    <Environment preset="city"/>
                    <group position={[0,0,0]}>
                        <SuperSonic/>
                        <Instances><Planets/></Instances>
                        {/*  <SpaceStars /> */}
                    </group>
                </FrameRateLimiter>
            </Canvas>
        </div>
    );
}