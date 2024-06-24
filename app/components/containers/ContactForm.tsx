'use client'; 

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import * as Text from "../text/Text";

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(false);

    const submitMessage = async (e: React.FormEvent) => {
        
        e.preventDefault();

    
        const origin = window.location.origin;
    
        const res = await fetch((origin + "/api"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,message}),
        });
    
        if(res.ok) {
            setResponse(true);
            setTimeout(() => {setResponse(false)}, 1500);
        }  
    
    }     
    
    return (
        <motion.form initial={{ opacity: 0 , rotate: 100}} animate={{ opacity: 1, rotate: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} onSubmit={submitMessage} className="flex flex-col items-center">
            <label htmlFor="name">Name:</label>
            <input onChange={(e) => setName(e.target.value)} className="text-black" type="text" id="fname" name="fname"/>
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} className="text-black" type="email" id="email" name="email"/>
            <label htmlFor="message">Message:</label>
            <input onChange={(e) => setMessage(e.target.value)} className="text-black" type="text" id="message" name="message"/>
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="submit" className="bg-white text-black my-3 rounded-md shadow-md p-2">Send Message!</motion.button> 
            <AnimatePresence>
                {response && (<Text.AlertText text="Message Sent" />)}
            </AnimatePresence>
        </motion.form> 
    );
}