'use client'; 

import {motion} from "framer-motion";
import * as Text from "../text/Text";

export default function Modal() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.3 }} className="bg-black bg-opacity-25 backdrop-blur-sm fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20">
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="bg-black size-10/12 rounded-md flex flex-col justify-start items-center p-10 overflow-y-auto overflow-x-hidden border-white border-4 gap-2">
                <hr className="border-white border-2 w-full"/>
                <Text.MText text="Model Credits:"/>
                <Text.SText text="'Emerald Chaos' (https://skfb.ly/DZEJ) by torchwurm is licensed under Creative Commons Attribution (http://creativecommons.org /licenses/by/4.0/)"/>
                <hr className="border-white border-2 w-full"/>
                <Text.SText text="'Vader's TIE' (https://skfb.ly/6oZyL) by StarWars-Universe is licensed under CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org /licenses/by-nc-sa/4.0/)"/>
                <hr className="border-white border-2 w-full"/>
                <Text.SText text="'X-Wing' (https://skfb.ly/6oZB9) by StarWars-Universe is licensed under CC Attribution-NonCommercial-ShareAlike (http://creativecommons.org /licenses/by-nc-sa/4.0/)."/>
                <hr className="border-white border-2 w-full"/>
                <hr className="border-black border-2 w-full"/>
                <hr className="border-white border-2 w-full"/>
                <Text.MText text="Tech Stack:"/>
                <div className="flex flex-wrap gap-5 overflow-y-auto overflow-x-hidden justify-center items-center bg-white rounded-lg p-10 size-10/12 border-4 border-blue-500">
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20 shrink-0" src="/tailwindcss.svg" alt="tailwindcss" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20 shrink-0" src="/sqlite.svg" alt="sqlite" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20 shrink-0" src="/prisma.svg" alt="prisma" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20 shrink-0" src="/nextjs.svg" alt="nextjs" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20 shrink-0" src="/framer.svg" alt="framer" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20 shrink-0" src="/typescript.svg" alt="typescript" />
                    <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="size-20 shrink-0" src="/threejs.svg" alt="threejs" />
                </div>
            </motion.div>
        </motion.div>
    );
}