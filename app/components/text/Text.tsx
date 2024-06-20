'use client';

import {motion} from "framer-motion";

interface TextProps {
    text: string;
  }

export function LText({text}: TextProps) {
    return (
        <motion.h1 whileHover={{ scale: 0.8 , transition: { duration: 0.5 }}} className="text-white font-bold text-5xl text-center" >{text}</motion.h1>
    );
}

export function MText({text}: TextProps) {
    return (
        <motion.h1 whileHover={{ scale: 0.97 }} className="text-white font-bold text-xl text-center" >{text}</motion.h1>
    );
}

export function SText({text}: TextProps) {
    return (
        <motion.h1 whileHover={{ scale: 0.9 }} className="text-white font-bold text-l" >{text}</motion.h1>
    );
}