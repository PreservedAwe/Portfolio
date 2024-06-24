'use client'; 

import {motion} from "framer-motion";
import * as Text from "../text/Text";

export default function Modal() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 0.3 }} className="bg-black bg-opacity-25 backdrop-blur-sm fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="bg-black size-6/12 rounded-md flex flex-col justify-center items-center p-4 overflow-y-auto overflow-x-hidden">
                <Text.MText text="Model Credits:"/>
                <Text.SText text="(Emerald Chaos (https://skfb.ly/DZEJ) by torchwurm is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)."/>
                <Text.MText text="Tech Stack:"/>
                <div className="flex flex-wrap gap-2 overflow-y-auto overflow-x-hidden justify-center items-center bg-white rounded-lg mx-8 my-2 p-4 size-7/12">
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20" src="/tailwindcss.svg" alt="tailwindcss" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20" src="/mongo.svg" alt="mongodb" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20" src="/prisma.svg" alt="prisma" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20" src="/nextjs.svg" alt="nextjs" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20" src="/framer.svg" alt="framer" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20" src="/typescript.svg" alt="typescript" />
                </div>
            </motion.div>
        </motion.div>
    );
}