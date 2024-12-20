'use client'; 

import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import {Emeralds, InstancesE} from "./models/EmeraldsModel";
import {Vader, InstancesV} from "./models/VaderTieModel";
import {XWing, InstancesX} from "./models/XWingModel";
import FrameRateLimiter from "./FrameRateLimiter";
import {memo} from 'react';


export default memo(function Scene() {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <Canvas frameloop="never" camera={{ position: [0, 0, 7], fov: 75, near: 0.1, far: 5000 }} >
                <FrameRateLimiter fps={90}>
                    <Environment preset="dawn"/>
                    <InstancesE><Emeralds/></InstancesE>
                    <InstancesV><Vader/></InstancesV>
                    <InstancesX><XWing/></InstancesX>
                </FrameRateLimiter>
            </Canvas>
        </div>
    );
})