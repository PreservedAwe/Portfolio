"use client"; 

import * as Text from "../text/Text";
import TechModal from "../containers/TechModal";
import {motion} from "framer-motion";
import {useState} from 'react';



export default function Footer() {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); 
    setIsVisible(!isVisible); 
  };

  return (
    <motion.footer initial={{ y: 150 }} animate={{ y: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} className="col-span-12 row-span-2 flex justify-around items-center">
      <div className="">
        <Text.SText text="@2024"/> 
      </div>
      <div className="">
        <a onClick={handleClick} href="#">
          <Text.SText text="Click Me For Credits and Tech Stack Used:"/> 
          {isVisible && (<TechModal />)}
        </a>
      </div>
      <div className="">
        <a href="https://www.youtube.com/watch?v=DJaZUFK8Kv4">
          <img className="size-11" src="/youtube.svg" alt="youtube"/>
        </a>
        <a href="https://www.youtube.com/watch?v=DJaZUFK8Kv4">
          <img className="size-11" src="/github.svg" alt="github"/>
        </a>      
      </div>            
    </motion.footer>
  );
}
