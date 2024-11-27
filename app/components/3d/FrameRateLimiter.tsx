"use client";

import { useThree } from '@react-three/fiber';
import {useEffect} from 'react';

export default function FrameRateLimiter({ fps = 60, children }: { fps?: number, children?: React.ReactNode } = {}) {

const { advance } = useThree();

useEffect(() => {

    const initialTime = performance.now();

    const update = (lastTime: number) => {
        let frameCount = 0;

        const currentTime = performance.now();
        const delta = currentTime - lastTime;
        
        if (delta >= (1000 / fps)) {
            advance(currentTime, true);
            frameCount++;
            lastTime = currentTime;
        }

        return requestAnimationFrame(() => {update(lastTime)});

    };

    const rafId = update(initialTime);
    return () => cancelAnimationFrame(rafId);

}, [fps]);

return children;
}
