"use client";

import {motion} from "framer-motion";

export default function Loader() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={{ duration: 0.3 }} className="h-screen w-screen flex justify-center items-center">
            <motion.img  initial={{opacity: 0}} animate={{ rotate: 360, opacity: 1 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} src="/loading.svg" alt="loading" className="size-40" />
        </motion.div>
    )
}
