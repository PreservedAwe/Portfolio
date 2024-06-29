"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function AdminChecker() {
    const router = useRouter();

    useEffect(() => {

        const origin = window.location.origin;

        const intId = setInterval(async () => {
            const res = await fetch(origin + "/api/sign-in");

            if(!res.ok) {
                router.push("/");
            }  

        }, 60000);

        return () => {clearInterval(intId)};
    });
    
    return (<div className="fixed"></div>);
}