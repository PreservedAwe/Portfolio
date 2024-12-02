'use client'; 

import { useRouter } from 'next/navigation'
import {motion, AnimatePresence} from "framer-motion";
import { useState, useEffect } from 'react';

const links = [
    { href: '/resume.pdf', text: 'RESUME' },
    { href: '/about', text: 'ABOUT' },
    { href: '/contact', text: 'CONTACT' },
    { href: '/hobbies', text: 'HOBBIES' },
    { href: '/projects', text: 'PROJECTS' },
    { href: '/', text: 'HOME' },
];

export default function Navbar() {

    const router = useRouter();

    const [width, setWidth] = useState(0);
    const [status, setStatus] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); 
        setStatus(!status); 
    };

    const handleNavbarLinks = (link: {href: string, text: string}, index: number): JSX.Element => {
        if(link.text == "RESUME"){
            return(
                <motion.a whileHover={{scale: 1.2, rotate: -360, transition: { duration: 1.3 }}} whileTap={{ scale: 1.0 }} onClick={(e) => {e.preventDefault(); router.push(link.href);}} key={index} href={link.href} className="bg-blue-700 text-white rounded-md border-white border px-2 py-1 hover:bg-white hover:text-blue-700 hover:border-black ">
                    <div className='flex relative gap-1 justify-start items-center max-w-full max-h-full'>
                        <img className="size-5 absolute w-full h-full" src="/resumeBg.svg" alt="M emerald"/>
                        <span className='z-10 font-bold'>{link.text}</span>
                    </div>  
                </motion.a>
            )
        }
        else{
            return(
                <motion.a whileHover={{scale: 1.2, rotate: 360, transition: { duration: 1 }}} whileTap={{ scale: 0.8 }} onClick={(e) => {e.preventDefault(); router.push(link.href);}} key={index} href={link.href} className="bg-black text-white rounded-md border-white border px-2 py-1 hover:bg-white hover:text-black hover:border-black ">
                    <div className='flex relative gap-1 justify-start items-center max-w-full max-h-full'>
                        <img className="size-5 absolute w-full h-full" src="/emeralds.svg" alt="emeralds"/>
                        <span className='z-10 font-bold'>{link.text}</span>
                    </div>  
                </motion.a>
            )
        }
    }

    useEffect(() => {    
        setWidth(window.innerWidth);
        
        const changeReturn = () => {
            setWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeReturn);

        return () => {window.removeEventListener('resize', changeReturn)};
    }, [])

    return (
        <>
            {
                width >= 480 && (
                <nav className='size-full flex justify-around items-center gap-2'>
                    {links.map((link, index) => {
                        return handleNavbarLinks(link, index);
                        })
                    }
                </nav>      
                )
            }
            {
                width < 480 && (
                    <div className='flex justify-end items-center size-full'>
                        <a onClick={handleClick} href="menus" className='relative'><motion.img animate={{ y: [-6, 6] }} transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse", ease: "linear" }} className='size-28' src="/menu.svg" alt="menu"/></a>
                        <AnimatePresence>
                            {
                                status == true && (
                                <motion.div onClick={() => {setStatus(!status);}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.3 }} className="bg-black/20 backdrop-blur-md fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20">
                                <nav className='size-full flex flex-col justify-around items-center gap-2'>
                                    {links.map((link, index) => {
                                        return handleNavbarLinks(link, index);
                                        })
                                    }
                                </nav>   
                                </motion.div>
                                )
                            }
                        </AnimatePresence>                        
                    </div>
                )
            }            
        </>

    );
}