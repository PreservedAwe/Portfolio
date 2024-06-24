'use client';

import {motion, AnimatePresence} from "framer-motion";

interface TextProps {
    text: string;
  }

export function LText({text}: TextProps) {
    return (
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} whileHover={{ scale: 0.8 , transition: { duration: 0.5 }}} className="text-white font-bold text-5xl text-center" >{text}</motion.h1>
    );
}

export function MText({text}: TextProps) {
    return (
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} whileHover={{ scale: 0.97 }} className="text-white font-bold text-xl text-center" >{text}</motion.h1>
    );
}

export function SText({text}: TextProps) {
    return (
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} whileHover={{ scale: 0.9 }} className="text-white font-bold text-l text-center" >{text}</motion.h1>
    );
}

export function GreenAlertText({text}: TextProps) {
    return (
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -10 }} transition={{ ease: "easeInOut", duration: 0.3 }} className="text-green-500 font-bold text-l text-center" >{text}</motion.h1>
    );
}

export function RedAlertText({text}: TextProps) {
    return (
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -10 }} transition={{ ease: "easeInOut", duration: 0.3 }} className="text-red-500 font-bold text-l text-center" >{text}</motion.h1>
    );
}