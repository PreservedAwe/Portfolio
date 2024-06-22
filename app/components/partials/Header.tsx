"use client";

import Navbar from "../containers/Navbar";
import {motion} from "framer-motion";

export default function Header() {
  return (
    <motion.header initial={{ y: -150 }} animate={{ y: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} className="col-span-12 row-span-2">
        <Navbar/>
    </motion.header>
  )
}
