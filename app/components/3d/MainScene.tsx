'use client'; 

import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import {Emeralds} from "./EmeraldsModel";

export default function Scene() {



    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <Canvas>
                <Environment preset="studio"/>
                <Emeralds/>
            </Canvas>
        </div>
    );
}