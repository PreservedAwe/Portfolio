"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function AudioButton() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5; 
        }
    }, []);
    
    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/supersonic.mp3" type="audio/mpeg" />
            </audio>
            <img className="size-14  border-2 bg-white rounded-full border-white" src={isPlaying ? "/mute.svg" : "/unmute.svg"}  alt="music" onClick={toggleAudio}/>
        </div>

    );
}