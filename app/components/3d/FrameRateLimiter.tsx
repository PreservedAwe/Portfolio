"use client";

import { useThree } from '@react-three/fiber';
import {useEffect} from 'react';

export default function FrameRateLimiter({ fps = 60, children }: { fps?: number, children?: React.ReactNode } = {}) {

const { advance } = useThree();

useEffect(() => {

    let initialTime = performance.now();

    const update: () => void = () => {
        const interval = 1000 / fps;
        const currentTime = performance.now();
        const delta = currentTime - initialTime;
        
        if (delta >= interval) {
            advance(currentTime, true);
            initialTime = currentTime;
        }

        requestAnimationFrame(update);
    };
    const rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);

}, [fps, advance]);

return children;
}
