'use client'; 

import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import Emeralds from "./models/EmeraldsModel";
import Vader from "./models/VaderTieModel";


export default function Scene() {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <Canvas>
                <Environment preset="studio"/>
                <Emeralds/>
                <Vader/>
            </Canvas>
        </div>
    );
}