'use client'; 

import {Canvas, useThree} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import {SpaceStars} from "./models/SpaceStarsModel";
import {SuperSonic} from "./models/SuperSonicModel";
import {Planets, Instances} from "./models/PlanetsModel";
import FrameRateLimiter from "./FrameRateLimiter";
import {useEffect, useState} from 'react';


export default function Scene() {
    const [aspect, setAspect] = useState(1);

    useEffect(() => {
        setAspect(window.innerWidth / window.innerHeight);
        const handleResize = () => setAspect(window.innerWidth / window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <Canvas frameloop="never" camera={{ position: [0, 0, 5.4], fov: 75, near: 0.1, far: 5000, aspect: aspect }} >
                <FrameRateLimiter fps={90}>
                    <Environment preset="city"/>
                    <SuperSonic/>
                    <Instances><Planets/></Instances>
                    <SpaceStars/>
                </FrameRateLimiter>
            </Canvas>
        </div>
    );
}