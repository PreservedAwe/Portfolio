'use client'; 

import * as Text from "@/components/text/Text";
import {useState} from "react";
import {motion, AnimatePresence, useAnimate} from "framer-motion";
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    const [code, setCode] = useState('');
    const [scope, animate] = useAnimate();
    const [response, setResponse] = useState('');
    const router = useRouter();

    const submitMessage = async (e: React.FormEvent) => {
        
        e.preventDefault();

        animate(scope.current, { opacity: 1});

        const origin = window.location.origin;
    
        const res = await fetch((origin + "/api/sign-in"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({code}),
        });

        animate(scope.current, { opacity: 0});
    
        if(res.ok) {
            setResponse('pass');
            setTimeout(() => {
                setResponse(''); 
                router.push("/admin");
            }, 2500);
        }  
        else {
            setResponse('fail');
            setTimeout(() => {setResponse('')}, 2500);
        }
    
    }       

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.3 }} className="bg-black bg-opacity-25 backdrop-blur-sm fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20">
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="bg-black size-10/12 rounded-md flex justify-start p-10 overflow-y-auto overflow-x-hidden border-white border-4 gap-2">
                <motion.form initial={{ opacity: 0 , rotate: 100}} animate={{ opacity: 1, rotate: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} onSubmit={submitMessage} className="size-full flex flex-col items-center">
                    <label htmlFor="name"> <Text.MText text="Code:"/> </label>
                    <input value={code} onChange={(e) => setCode(e.target.value)} className="text-black" type="text" id="code" name="code" required/>
                    <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="submit" className="bg-white border-black border-2 text-black my-5 rounded-md shadow-md p-2">Login</motion.button>
                    <motion.button onClick={() => {router.push("/");}} whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" className="bg-white border-black border-2 text-black my-5 rounded-md shadow-md p-2">Go Back</motion.button>
                    <AnimatePresence>        
                        {(response == 'pass') && (<Text.GreenAlertText text="Code Accepted, You Will Be Redirected Soon" />)}
                        {(response == 'fail') && (<Text.RedAlertText text="Code Denied" />)}
                        <motion.img ref={scope} initial={{ opacity: 0}} animate={{ rotate: 360}} transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }} className="size-16" src="/loading2.svg" alt="loading..." />
                    </AnimatePresence>   
                </motion.form>
            </motion.div>
        </motion.div>
    );
}