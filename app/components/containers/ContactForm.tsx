'use client'; 

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import * as Text from "../text/Text";

export default function ContactForm() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const submitMessage = async (e: React.FormEvent) => {
        
        e.preventDefault();

        const origin = window.location.origin;
    
        const res = await fetch((origin + "/api/email"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, message}),
        });
    
        if(res.ok) {
            setResponse('pass');
            setTimeout(() => {
                setResponse(''); 
                setName('');
                setMessage('');
            }, 1500);
        }  
        else {
            setResponse('fail');
            setTimeout(() => {setResponse('')}, 1500);
        }
    
    }     
    
    return (
        <motion.form initial={{ opacity: 0 , rotate: 100}} animate={{ opacity: 1, rotate: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} onSubmit={submitMessage} className="flex flex-col items-center">
            <label htmlFor="name"> <Text.SText text="Name:"/> </label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="text-black" type="text" id="fname" name="fname" required/>
            <label htmlFor="message"> <Text.SText text="Message:"/> </label>
            <input value={message} onChange={(e) => setMessage(e.target.value)} className="text-black" type="text" id="message" name="message" required/>
            <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="submit" className="bg-white border-black border-2 text-black my-3 rounded-md shadow-md p-2">Send Message!</motion.button> 
            <AnimatePresence>
                {(response == 'pass') && (<Text.GreenAlertText text="Message Sent" />)}
                {(response == 'fail') && (<Text.RedAlertText text="Message Not Sent" />)}
            </AnimatePresence>
        </motion.form> 
    );
}