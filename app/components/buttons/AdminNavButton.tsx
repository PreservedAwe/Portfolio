'use client';

import {motion} from "framer-motion";
import { useRouter } from "next/navigation";

export default function NavButton({text, url}: {text: string; url: string}) {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center w-full">
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={() => {router.push(url);}} className="bg-white border-black border-2 text-black my-3 rounded-md shadow-md p-2 size-28">{text}</motion.button> 
        </div>
    );
}