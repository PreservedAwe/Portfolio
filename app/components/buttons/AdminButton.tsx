'use client';

import {motion, AnimatePresence, useAnimate} from "framer-motion";
import { useRouter } from "next/navigation";
import {useState} from "react";
import * as Text from "@/components/text/Text";

export default function AdminButton() {
    const router = useRouter();
    const [scope, animate] = useAnimate();
    const [response, setResponse] = useState('');

    const logoutAdmin = async () => {
        if(!window.confirm("Are you sure you want to logout?")) {
            return;
        }
        
        animate(scope.current, { opacity: 1});

        const origin = window.location.origin;
    
        const res = await fetch((origin + "/api/logout"));

        animate(scope.current, { opacity: 0});
    
        if(res.ok) {
            setResponse('pass');
            document.cookie = 'client_id=; Path=/; Expires=Thu Jan 01 1970 00:00:00 GMT;';
            router.refresh();
            setTimeout(() => {setResponse(''); router.push("/");}, 1500);
        }     
    };

    return (
        <div className="flex flex-wrap justify-center size-full gap-3 gap-x-8">
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={() => {router.push("/admin/new");}} className="bg-green-500 border-black border-2 text-black my-3 rounded-md shadow-md p-2 size-28">Create New Project</motion.button> 
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={() => {router.push("/");}} className="bg-white border-black border-2 text-black my-3 rounded-md shadow-md p-2 size-28">Go Home</motion.button> 
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={logoutAdmin} className="bg-red-500 border-black border-2 text-black my-3 rounded-md shadow-md p-2 size-28">Logout and Go Home</motion.button> 
            <div className="flex flex-col justify-center items-center size-full gap-1">
                <AnimatePresence>        
                    {(response == 'pass') && (<Text.GreenAlertText text="Sign Out Successful" />)}
                    {(response == 'fail') && (<Text.RedAlertText text="Sign Out Failure" />)}
                    <motion.img ref={scope} initial={{ opacity: 0}} animate={{ rotate: 360}} transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }} className="size-16" src="/loading2.svg" alt="loading..." />
                </AnimatePresence>
            </div>
        </div>

    );
}
