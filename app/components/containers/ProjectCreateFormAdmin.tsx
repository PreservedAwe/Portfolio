'use client'; 

import {useState} from "react";
import {motion, AnimatePresence, useAnimate} from "framer-motion";
import * as Text from "@/components/text/Text";
import { useRouter } from "next/navigation";

export default function ProjectFormAdmin() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [github_link, setGithub_link] = useState("");
    const [response, setResponse] = useState('');
    const [scope, animate] = useAnimate();
    const router = useRouter();

    const createProject = async (e: React.FormEvent) => {
        
        e.preventDefault();

        if(!window.confirm("Are you sure you want to make a new project?")) {
            return;
        }

        animate(scope.current, { opacity: 1});

        const origin = window.location.origin;
    
        const res = await fetch((origin + "/api/create"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, description, github_link,}),
        });

        animate(scope.current, { opacity: 0});
    
        if(res.ok) {
            setResponse('pass');
            setTimeout(() => {setResponse(''); router.push("/admin")}, 1500);
        }  
        else {
            setResponse('fail');
            setTimeout(() => {setResponse('')}, 1500);
        }
    
    }          

    return (
        <motion.form initial={{ opacity: 0 , rotate: 100}} animate={{ opacity: 1, rotate: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} onSubmit={createProject} className="flex flex-col items-center">
            <label htmlFor="name"> <Text.MText text="Name:"/> </label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="text-black" type="text" id="name" name="name" required/>
            <label htmlFor="github_link"> <Text.MText text="Github Link:"/> </label>
            <textarea value={github_link} onChange={(e) => setGithub_link(e.target.value)} className="text-black" rows={2} cols={22} id="github_link" name="github_link" required/>
            <label htmlFor="description"> <Text.MText text="Description:"/> </label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="text-black" rows={5} cols={22} id="description" name="description" required/>
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="submit" className="bg-white border-black border-2 text-black my-3 rounded-md shadow-md p-2">Create New Project</motion.button>
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={() => {router.push("/admin");}} className="bg-yellow-500 border-black border-2 text-black my-3 rounded-md shadow-md p-2">Go Back</motion.button>
            <AnimatePresence>        
                {(response == 'pass') && (<Text.GreenAlertText text="Request Successful" />)}
                {(response == 'fail') && (<Text.RedAlertText text="Request Failure" />)}
                <motion.img ref={scope} initial={{ opacity: 0}} animate={{ rotate: 360}} transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }} className="size-16" src="/loading2.svg" alt="loading..." />
            </AnimatePresence>
        </motion.form> 
    );
}