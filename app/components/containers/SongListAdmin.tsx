'use client';

import {motion} from "framer-motion";
import {useState} from "react";
import * as Text from "@/components/text/Text";

interface Song {
    id: string,
    title: string,
    genre: string,
    description: string,
    cover_url: string,
    audio_url: string,
}

export default function ProjectListAdmin({songs}: {songs: Array<Song>}) {


    const [isAudioLoaded, setIsAudioLoaded] = useState<{ [key: string]: boolean }>({});

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="flex flex-wrap justify-center gap-3">
        {
            songs.map((song) => (
            <motion.div animate={{ x: [-5, 5] }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: "linear" }} key={song.id} className="flex flex-col gap-2 bg-black text-white rounded shadow-md border-white border-2 p-5 hover:bg-white hover:border-black hover:text-black transition ease-in-out size-60 overflow-x-hidden overflow-y-auto ">
                <div className="flex justify-center flex-col">
                    <h1 className="font-bold text-center">Title</h1>
                    <Text.MText text={song?.title}/>
                    <img src={`${process.env.NEXT_PUBLIC_MINIO_PUBLIC_ENDPOINT}/${process.env.NEXT_PUBLIC_MINIO_BUCKET}/${song?.cover_url}`} alt="" className="size-full border-2 border-white justify-center items-center" />
                </div>               
                <div className="flex justify-center flex-col">
                    <h1 className="font-bold text-center">Genre</h1>
                    <h1 className="border-2 border-green-500 rounded-lg p-1 m-1 hover:scale-90 transition ease-in-out text-center" >{song?.genre}</h1>
                </div>
                <div className="flex justify-center flex-col">
                    <h1 className="font-bold text-center">Description</h1>
                    <h1 className="text-center">{song?.description}</h1>
                </div>
                <div className="flex justify-center flex-col">
                    <h1 className="font-bold text-center">Audio</h1>
                    {isAudioLoaded[song.id] && (
                        <audio loop controls className="w-full">
                            <source src={`${process.env.NEXT_PUBLIC_MINIO_PUBLIC_ENDPOINT}/${process.env.NEXT_PUBLIC_MINIO_BUCKET}/${song?.audio_url}`} type="audio/mpeg" />
                        </audio>
                    )}
                    {!isAudioLoaded[song.id] && (
                        <a onClick={() => {setIsAudioLoaded(prevState => ({ ...prevState, [song.id]: true }))}} className="font-bold border-2 border-blue-500 rounded-lg p-1 m-1 hover:scale-90 transition ease-in-out text-center">Load Song</a>
                    )}
                </div>
                <div className="flex justify-center flex-col">
                    <a className="border-2 border-red-500 rounded-lg p-1 m-1 hover:scale-90 transition ease-in-out text-center" href={("/admin/song-catalogue/" + song.id)}>Edit!</a>
                </div>                
            </motion.div>
            ))
        }
        </motion.div>
    );
}