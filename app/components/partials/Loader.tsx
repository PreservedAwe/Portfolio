"use client";

import {motion, AnimatePresence} from "framer-motion";
import {useState, useEffect} from 'react';
import * as Text from "@/components/text/Text";

export default function Loader() {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowLoader(false), 3000);
        return () => {clearTimeout(timer)};
    })

    return (
        <AnimatePresence >
            { showLoader && (<motion.div initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={{ duration: 0.15, ease: "easeOut"}} className="h-screen w-screen flex flex-col justify-center items-center bg-main-theme z-50 fixed">
                <motion.img initial={{y: -1000, rotate: 90}} animate={{ y: 1000 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} src="/loading.svg" alt="loading" className="size-96" />
                <Text.LoadingText text="Loading..."/>
                {
                /* Switch Out motion.img and img based on Framer Motion's Animations. 
                    Animations = motion.img, No Animations = img
                    <img src="/loading.svg" alt="loading" className="size-96" />

                    <motion.img initial={{x: -1000}} animate={{ x: 1000 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} src="/loading.svg" alt="loading" className="size-96" />
                */
                }
            </motion.div>)}
        </AnimatePresence>
    )
}
