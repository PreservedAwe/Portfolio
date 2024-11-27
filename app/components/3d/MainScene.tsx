'use client'; 

import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import Emeralds from "./models/EmeraldsModel";
import Vader from "./models/VaderTieModel";
import XWing from "./models/XWingModel";
import FrameRateLimiter from "./FrameRateLimiter";


export default function Scene() {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <Canvas>
                <FrameRateLimiter fps={30}>
                    <Environment preset="studio"/>
                    <Emeralds/>
                    <Vader/>
                    <XWing/>
                </FrameRateLimiter>
            </Canvas>
        </div>
    );
}