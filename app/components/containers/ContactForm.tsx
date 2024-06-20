'use client'; 

import {motion} from "framer-motion";


const submitMessage = async (formData: FormData) => {

    const rawData = {
        fname: formData.get("fname"),
        email: formData.get("email"),
        message: formData.get("message")
    }
} 

export default function ContactForm() {
    return (
        <motion.form initial={{ opacity: 0 , rotate: 100}} animate={{ opacity: 1, rotate: 0 }} transition={{ ease: "easeIn", duration: 1.0 }} action={submitMessage} className="flex flex-col items-center">
          <label htmlFor="name">Name:</label>
          <input className="text-black" type="text" id="fname" name="fname"/>
          <label htmlFor="email">Email:</label>
          <input className="text-black" type="email" id="email" name="email"/>
          <label htmlFor="message">Message:</label>
          <input className="text-black" type="text" id="message" name="message"/>
          <motion.button whileHover={{scale: 1.2, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="submit" className="bg-white text-black my-3 rounded-md shadow-md p-2">Send Message!</motion.button> 
        </motion.form> 
    );
}