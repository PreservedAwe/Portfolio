"use client";

import {motion, AnimatePresence} from "framer-motion";

export default function Loader() {
    return (
        <AnimatePresence>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={{ duration: 0.2 }} className="h-screen w-screen flex justify-center items-center">
                <motion.img animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} src="/loading.svg" alt="loading" className="size-40" />
            </motion.div>
        </AnimatePresence>
    )
}
