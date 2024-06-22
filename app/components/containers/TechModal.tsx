'use client'; 

import {motion} from "framer-motion";

export default function Modal() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 0.3 }} className="bg-black bg-opacity-25 backdrop-blur-sm fixed top-0 left-0 w-screen h-screen z-10 flex justify-center items-center">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="bg-black size-5/12 rounded-md z-10">

            </motion.div>
        </motion.div>
    );
}