'use client'; 

import { useRouter } from 'next/navigation'
import {motion} from "framer-motion";

const links = [
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' },
    { href: '/hobbies', text: 'Hobbies' },
    { href: '/projects', text: 'Projects' },
    { href: '/', text: 'Home' },
];

export default function Navbar() {

    const router = useRouter();

    return (
        <nav className='size-full flex justify-around items-center gap-2'>
            {links.map((link, index) => (
                <motion.a whileHover={{scale: 1.2, rotate: 360, transition: { duration: 1 }}} whileTap={{ scale: 0.8 }} onClick={(e) => {e.preventDefault(); router.push(link.href);}} key={index} href={link.href} className="bg-black text-white rounded-md border-white border px-2 py-1 hover:bg-white hover:text-black hover:border-black ">
                    {link.text}
                </motion.a>
            ))}
        </nav>
    );
}