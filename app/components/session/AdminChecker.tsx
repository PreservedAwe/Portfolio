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
                window.alert("You are logged out");
                router.push("/");
            }  

        }, 120000); //2 minutes

        return () => {clearInterval(intId)};
    },[router]);
    
    return (<div className="fixed"></div>);
}