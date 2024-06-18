'use client';

import {motion} from "framer-motion";

interface TextProps {
    text: string;
  }

export function LText({text}: TextProps) {
    return (
        <motion.h1 whileHover={{ scale: 1.2 }} className="font-bold text-5xl" >{text}</motion.h1>
    );
}

export function MText({text}: TextProps) {
    return (
        <motion.h1 whileHover={{ scale: 1.2 }} className="font-bold text-xl" >{text}</motion.h1>
    );
}

export function SText({text}: TextProps) {
    return (
        <motion.h1 whileHover={{ scale: 1.2 }} className="font-bold text-5xl" >{text}</motion.h1>
    );
}