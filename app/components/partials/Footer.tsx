"use client"; 

import * as Text from "../text/Text";
import TechModal from "../containers/TechModal";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from 'react';
import Link from 'next/link';

export default function Footer() {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); 
    setIsVisible(!isVisible); 
  };

  return (
    <motion.footer initial={{ y: 150 }} animate={{ y: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} className="col-span-12 row-span-2 flex justify-around items-center m-4 gap-3">
      <div className="">
        <Link href="/admin/login"><Text.SText text="@2024"/></Link>
      </div>
      <div className="">
        <a onClick={handleClick} href="credits">
          <Text.SText text="Click Me For Credits and Tech Stack Used:"/> 
          <AnimatePresence>
            {isVisible && (<TechModal />)}
          </AnimatePresence>
        </a>
      </div>
      <div className="flex justify-center bg-white rounded-lg border-black border-2 p-2 gap-2">
        <a href="https://www.youtube.com/watch?v=DJaZUFK8Kv4">
          <motion.img whileHover={{scale: 1.3, rotate: 360}} whileTap={{ scale: 0.9 }} className="size-11" src="/youtube.svg" alt="youtube"/>
        </a>
        <a href="https://github.com/PreservedAwe">
          <motion.img whileHover={{scale: 1.3, rotate: 360}} whileTap={{ scale: 0.9 }} className="size-11" src="/github.svg" alt="github"/>
        </a>      
        <a href="https://www.linkedin.com/in/nasean-lawson">
          <motion.img whileHover={{scale: 1.3, rotate: 360}} whileTap={{ scale: 0.9 }} className="size-11" src="/linkedin.svg" alt="linkedin"/>
        </a>          
      </div>            
    </motion.footer>
  );
}
