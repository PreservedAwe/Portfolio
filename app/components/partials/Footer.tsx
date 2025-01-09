"use client"; 

import * as Text from "@/components/text/Text";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {memo} from 'react';
import { usePathname } from 'next/navigation';

const TechModal = dynamic(() => import("@/components/containers/TechModal"));

export default memo(function Footer() {

  const pathname = usePathname();
  const isAdminPage = pathname.includes('/admin');
  if (isAdminPage) {
    return null;
  }

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
      <div className="flex justify-center bg-white rounded-lg border-black border-2 p-1 gap-1">
        <a href="https://www.youtube.com/channel/UCvhHoV52e1Y1UuS411Jmc9w" className="size-fit ">
          <motion.img whileHover={{scale: 1.3, rotate: 360}} whileTap={{ scale: 0.9 }} className="size-14 " src="/youtube.svg" alt="youtube"/>
        </a>
        <a href="https://github.com/PreservedAwe" className="size-fit ">
          <motion.img whileHover={{scale: 1.3, rotate: 360}} whileTap={{ scale: 0.9 }} className="size-14 " src="/github.svg" alt="github"/>
        </a>      
        <a href="https://www.linkedin.com/in/nasean-lawson" className="size-fit ">
          <motion.img whileHover={{scale: 1.3, rotate: 360}} whileTap={{ scale: 0.9 }} className="size-14 " src="/linkedin.svg" alt="linkedin"/>
        </a>          
      </div>            
    </motion.footer>
  );
})
