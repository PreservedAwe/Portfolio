'use client'; 

import { useLoader } from "@/components/partials/Loader";
import { useEffect, useRef } from 'react';

export function BackgroundVideo() {
    const { markVideoAsReady } = useLoader();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const handleLoaded = () => {
            console.log('video loaded');
            markVideoAsReady();
        };
        video.addEventListener('canplaythrough', handleLoaded);
        return () => video.removeEventListener('canplaythrough', handleLoaded);
    }, [markVideoAsReady]);

    return (
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/galaxy-stars.mp4" type="video/mp4" />
        </video>
    );
}