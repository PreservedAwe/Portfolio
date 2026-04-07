"use client";

import {motion, AnimatePresence} from "framer-motion";
import React, {useState, useEffect} from 'react';
import * as Text from "@/components/text/Text";
import { useProgress } from "@react-three/drei";

const LoaderContext = React.createContext({ showLoader: true, setShowLoader: (value: boolean) => {}, markVideoAsReady: () => {} });

// Create a provider component
export function LoaderProvider({children}: Readonly<{children: React.ReactNode;}>) {
    const [showLoader, setShowLoader] = useState(true);
    
    //Signals for both minimum loading time and assest loading time

    //  Signal 1: asset loading
    const { active } = useProgress();
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    useEffect(() => {
        if (!active) {setAssetsLoaded(true)};
    }, [active]);

    //  Signal 2: minimum time
    const minDisplayTimeMs = 3000;
    const [hasMinTimePassed, setHasMinTimePassed] = useState(false);

    //  Signal 3: video background loading
    const [hasBackgroundVideoLoaded, setHasBackgroundVideoLoaded] = useState(false);
    //      Call this when your background video is ready
    const markVideoAsReady = () => {
        console.log('executing mark vid');
        setHasBackgroundVideoLoaded(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => setHasMinTimePassed(true), minDisplayTimeMs);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log({ assetsLoaded, hasMinTimePassed, hasBackgroundVideoLoaded });
        if (assetsLoaded && hasMinTimePassed && hasBackgroundVideoLoaded) {
        setShowLoader(false);
        }
    }, [assetsLoaded, hasMinTimePassed, hasBackgroundVideoLoaded]);

    return (
        <LoaderContext.Provider value={{ showLoader, setShowLoader, markVideoAsReady }}>
        {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    return React.useContext(LoaderContext);
}

const MemoizedChildren  = React.memo(({ children }: { children: React.ReactNode }) => <>{children}</>);
MemoizedChildren.displayName = 'MemoizedChildren';

export default function Loader({children}: Readonly<{children: React.ReactNode;}>) {
    const { showLoader } = useLoader();
    return (
        <AnimatePresence >
            { showLoader && (<motion.div key="loader" initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={{ duration: 0.35, ease: "easeOut"}} className="h-screen w-screen flex flex-col justify-center items-center bg-main-theme z-50 absolute">
                <motion.img animate={{ y: [-6, 6] }} transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse", ease: "linear" }} src="/supersonicload.png" alt="loading" className="size-64 m-3" />
                <Text.LoadingText text="Loading..."/>
                {
                /* Switch Out motion.img and img based on Framer Motion's Animations. 
                    Animations = motion.img, No Animations = img
                    
                    <motion.img initial={{y: -1000, rotate: 90}} animate={{ y: 1000 }} transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }} src="/loading.svg" alt="loading" className="size-96" />
                    <motion.img initial={{x: -1000}} animate={{ x: 1000 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} src="/loading.svg" alt="loading" className="size-96" />
                */
                }
            </motion.div>)}
            {!showLoader && <MemoizedChildren>{children}</MemoizedChildren>}
        </AnimatePresence>
    )
}
