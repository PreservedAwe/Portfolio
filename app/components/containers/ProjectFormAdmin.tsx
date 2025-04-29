'use client'; 

import {useState} from "react";
import {motion, AnimatePresence, useAnimate} from "framer-motion";
import * as Text from "@/components/text/Text";
import { useRouter } from "next/navigation";

interface Project {
    id: string,
    name: string,
    description: string,
    github_link: string,
    banner_url: string,
}

export default function ProjectFormAdmin({project}: {project: Project}) {

    const [id, setId] = useState(project.id);
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [github_link, setGithub_link] = useState(project.github_link);
    const [banner_url, setBanner_url] = useState(project.banner_url);
    const [response, setResponse] = useState('');
    const [scope, animate] = useAnimate();
    const router = useRouter();

    const updateProject = async (e: React.FormEvent) => {
        
        e.preventDefault();

        if(!window.confirm("Are you sure you want to update project?")) {
            return;
        }

        animate(scope.current, { opacity: 1});

        const origin = window.location.origin;
    
        const res = await fetch((origin + "/api/project/update"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, name, description, github_link, banner_url}),
        });

        animate(scope.current, { opacity: 0});
    
        if(res.ok) {
            setResponse('pass');
            setTimeout(() => {setResponse('')}, 1500);
        }  
        else {
            setResponse('fail');
            setTimeout(() => {setResponse('')}, 1500);
        }
    
    }     
    
    const deleteProject = async () => {

        if(!window.confirm("Are you sure you want to delete project?")) {
            return;
        }

        animate(scope.current, { opacity: 1});

        const origin = window.location.origin;
    
        const res = await fetch((origin + "/api/project/delete"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id}),
        });

        animate(scope.current, { opacity: 0});
    
        if(res.ok) {
            setResponse('pass');
            setTimeout(() => {setResponse(''); router.push("/admin/proj-catalogue")}, 1500);
        }  
        else {
            setResponse('fail');
            setTimeout(() => {setResponse('')}, 1500);
        }
    
    }     

    return (
        <motion.form initial={{ opacity: 0 , rotate: 100}} animate={{ opacity: 1, rotate: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} onSubmit={updateProject} className="flex flex-col items-center">
            <label htmlFor="name"> <Text.MText text="Name:"/> </label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="text-black" type="text" id="name" name="name" required/>
            <label htmlFor="github_link"> <Text.MText text="Github Link:"/> </label>
            <textarea value={github_link} onChange={(e) => setGithub_link(e.target.value)} className="text-black" rows={2} cols={22} id="github_link" name="github_link" required/>
            <label htmlFor="description"> <Text.MText text="Description:"/> </label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="text-black" rows={5} cols={22} id="description" name="description" required/>
            <label htmlFor="banner_url"> <Text.MText text="Banner Url:"/> </label>
            <textarea value={banner_url} onChange={(e) => setBanner_url(e.target.value)} className="text-black" rows={2} cols={22} id="banner_url" name="banner_url" required/>                       
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="submit" className="bg-green-500 border-black border-2 text-black my-3 rounded-md shadow-md p-2">Update Project</motion.button>
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={deleteProject} className="bg-red-500 border-black border-2 text-black my-3 rounded-md shadow-md p-2">Delete Project</motion.button> 
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={() => {router.push("/admin/proj-catalogue");}} className="bg-yellow-500 border-black border-2 text-black my-3 rounded-md shadow-md p-2">Go Back</motion.button> 
            <AnimatePresence>        
                {(response == 'pass') && (<Text.GreenAlertText text="Request Successful" />)}
                {(response == 'fail') && (<Text.RedAlertText text="Request Failure" />)}
                <motion.img ref={scope} initial={{ opacity: 0}} animate={{ rotate: 360}} transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }} className="size-16" src="/loading2.svg" alt="loading..." />
            </AnimatePresence>
        </motion.form> 
    );
}