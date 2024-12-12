'use client'; 

import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import Emeralds from "./models/EmeraldsModel";
import FrameRateLimiter from "./FrameRateLimiter";
import {memo} from 'react';


export default memo(function Scene() {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <Canvas frameloop="never">
                <FrameRateLimiter fps={90}>
                    <Environment preset="night"/>
                    <Emeralds/>
                </FrameRateLimiter>
            </Canvas>
        </div>
    );
})