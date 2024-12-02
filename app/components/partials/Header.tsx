"use client";

import Navbar from "@/components/containers/Navbar";
import {motion} from "framer-motion";
import {memo} from 'react';

export default memo(function Header() {
  return (
    <motion.header initial={{ y: -150 }} animate={{ y: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} className="col-span-12 row-span-2 m-4">
        <Navbar/>
    </motion.header>
  )
})
