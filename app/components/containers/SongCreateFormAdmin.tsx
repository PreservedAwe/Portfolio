'use client'; 

import {useState} from "react";
import {motion, AnimatePresence, useAnimate} from "framer-motion";
import * as Text from "@/components/text/Text";
import { useRouter } from "next/navigation";

export default function ProjectFormAdmin() {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [cover_url_file, setCover_url_file] = useState<File | null>(null);
    const [audio_url_file, setAudio_url_file] = useState<File | null>(null);
    const [response, setResponse] = useState('');
    const [scope, animate] = useAnimate();
    const router = useRouter();

    const createSong = async (e: React.FormEvent) => {
        
        e.preventDefault();

        if(!window.confirm("Are you sure you want to make a new song?")) {
            return;
        }

        animate(scope.current, { opacity: 1});

        const origin = window.location.origin;
    
        const formData = new FormData();

        formData.append('title', title);
        formData.append('genre', genre);
        formData.append('description', description);
        if (cover_url_file) {
            formData.append('cover_url_file', cover_url_file);
        }
        if (audio_url_file) {
            formData.append('audio_url_file', audio_url_file);
        }

        const res = await fetch((origin + "/api/song/create"), {
            method: "POST",
            body: formData,
        });

        animate(scope.current, { opacity: 0});
    
        if(res.ok) {
            setResponse('pass');
            setTimeout(() => {setResponse(''); router.push("/admin/song-catalogue")}, 1500);
        }  
        else {
            setResponse('fail');
            setTimeout(() => {setResponse('')}, 1500);
        }
    
    }          

    return (
        <motion.form initial={{ opacity: 0 , rotate: 100}} animate={{ opacity: 1, rotate: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} onSubmit={createSong} className="flex flex-col items-center">
            <label htmlFor="title"> <Text.MText text="Title:"/> </label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="text-black" type="text" id="title" name="title" required/>
            <label htmlFor="genre"> <Text.MText text="Genre:"/> </label>
            <input value={genre} onChange={(e) => setGenre(e.target.value)} className="text-black" type="text" id="name" name="name" required/>
            <label htmlFor="description"> <Text.MText text="Description:"/> </label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="text-black" rows={5} cols={22} id="description" name="description" required/>
            <label htmlFor="cover_url_file"> <Text.MText text="Cover File:"/> </label>
            <input onChange={(e) => {if(e.target.files && e.target.files?.length > 0) {setCover_url_file(e.target.files[0])}}} className="text-white" type="file" id="cover_url_file" name="cover_url_file" accept="image/*" required/>   
            <label htmlFor="audio_url_file"> <Text.MText text="Audio File:"/> </label>
            <input onChange={(e) => {if(e.target.files && e.target.files?.length > 0) {setAudio_url_file(e.target.files[0])}}} className="text-white" type="file" id="audio_url_file" name="audio_url_file" accept="audio/*" required/>             
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="submit" className="bg-white border-black border-2 text-black my-3 rounded-md shadow-md p-2">Create New Song</motion.button>
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={() => {router.push("/admin/song-catalogue");}} className="bg-yellow-500 border-black border-2 text-black my-3 rounded-md shadow-md p-2">Go Back</motion.button>
            <AnimatePresence>        
                {(response == 'pass') && (<Text.GreenAlertText text="Request Successful" />)}
                {(response == 'fail') && (<Text.RedAlertText text="Request Failure" />)}
                <motion.img ref={scope} initial={{ opacity: 0}} animate={{ rotate: 360}} transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }} className="size-16" src="/loading2.svg" alt="loading..." />
            </AnimatePresence>
        </motion.form> 
    );
}