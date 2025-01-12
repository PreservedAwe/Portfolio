"use client";

import {motion, AnimatePresence} from "framer-motion";
import React, {useState, useEffect} from 'react';
import * as Text from "@/components/text/Text";

export default function Loader({children}: Readonly<{children: React.ReactNode;}>) {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowLoader(false), 3500);
        return () => {clearTimeout(timer)};
    }, [])

    return (
        <AnimatePresence >
            { showLoader && (<motion.div key="loader" initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={{ duration: 0.35, ease: "easeOut"}} className="h-screen w-screen flex flex-col justify-center items-center bg-main-theme z-50 absolute">
                
                <Text.LoadingText text="Loading..."/>
                {
                /* Switch Out motion.img and img based on Framer Motion's Animations. 
                    Animations = motion.img, No Animations = img
                    <img src="/loading.svg" alt="loading" className="size-96" />
                    <motion.img initial={{y: -1000, rotate: 90}} animate={{ y: 1000 }} transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }} src="/loading.svg" alt="loading" className="size-96" />
                    <motion.img initial={{x: -1000}} animate={{ x: 1000 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} src="/loading.svg" alt="loading" className="size-96" />
                */
                }
            </motion.div>)}
            {!showLoader && React.Children.map(children, (child, index) => { 
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { key: child.key || index });
                }
                return null;}
                )}
        </AnimatePresence>
    )
}
