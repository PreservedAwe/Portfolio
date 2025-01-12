"use client";

import { useEffect } from "react";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

interface GetResult {
    visitorId: string
    confidence: {
        score: number
        comment?: string
    }
    components: {
        [key: string]:
            { value: any, duration: number } |
            { error: any, duration: number }
    }
    version: string
}

export default function UniqueUserChecker() {
    const getUserId = async(origin: string) => {
        try {
            const fp = await FingerprintJS.load();
            const result = await fp.get() as GetResult;
            const visitorInfo = {
                visitorId: result.visitorId,
                confidence: String(result.confidence.score),
                os: 'value' in result.components.osCpu && result.components.osCpu.value != undefined ? result.components.osCpu.value : "Unknown",
                timezone: 'value' in result.components.timezone && result.components.timezone.value != undefined ? result.components.timezone.value : "Unknown",
            }
            const res = await fetch((origin + "/api/user"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(visitorInfo),
            });
        } 
        catch(error) {
        }
    }

    useEffect(() => {
        const origin = window.location.origin;
        getUserId(origin);
    },[]);
    
    return (<div className="fixed"></div>);
}