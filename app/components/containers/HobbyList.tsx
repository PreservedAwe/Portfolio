'use client';

import {motion} from "framer-motion";
import * as Text from "@/components/text/Text";

interface HobbyArgs {
  heading: string,
  pic_url: string,
  pic_alt: string,
  description: string,
}


function Hobby({heading, pic_url, pic_alt, description}: HobbyArgs) {
  return(
    <motion.div animate={{ rotate: [-3, 3] }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: "linear" }} className="shrink-0 flex flex-col bg-black rounded-lg border-2 border-white size-80 m-3 gap-2 p-3 overflow-x-hidden overflow-y-auto">
      <div className="flex justify-center">
        <Text.MText text={heading}/>
      </div>      
      <div className="flex justify-center">
        <img src={pic_url} alt={pic_alt} className="size-40 w-full border-white border-2"/>
      </div>      
      <div className="flex justify-center">
        <h1 className="text-center text-white">{description}</h1>
      </div>      
    </motion.div>
  );
}

export default function HobbyList() {

  //Hobbies
  const hobbies: Array<HobbyArgs> = [
    {
      heading: "Gaming",
      pic_url: "/hobbies/gaming.png",
      pic_alt: "gaming pic",
      description: "I play games from various franchises such as Call Of Duty, Battlefield, Star Wars Battlefront, Dead By Daylight, etc",
    },
    {
      heading: "Guitar Playing",
      pic_url: "/hobbies/guitar-playing.png",
      pic_alt: "guitar playing pic",
      description: "I play the electric and acoustic guitar. The genres I mainly play revolve around metal and it's sub-genres",
    },     
    {
      heading: "Music Production",
      pic_url: "/hobbies/music-prod.png",
      pic_alt: "music producing pic",
      description: "I produce, mix and master metal and trap music. I've also done orchestral, and classical music.",
    },   
    {
      heading: "Video Production",
      pic_url: "/hobbies/video-editing.png",
      pic_alt: "video editing pic",
      description: "I create videos from my own captured media or by using other's media. For things such as AMVs, gameplay and music covers",
    },   
    {
      heading: "Photography",
      pic_url: "/hobbies/photography.png",
      pic_alt: "photography pic",
      description: "I take pictures and edit them for a new twist or to make them shine in unique ways",
    },   
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="flex justify-start gap-3 overflow-x-auto overflow-y-auto">
      {
        hobbies.map((hob) => (
          <Hobby key={("hobby:" + hob.heading)} heading={hob.heading} pic_url={hob.pic_url} pic_alt={hob.pic_alt} description={hob.description} />
        ))
      }
    </motion.div>
  );
}