'use client';

import {motion} from "framer-motion";
import { useRouter } from "next/navigation";

interface Visitor {
    visitor_id: string,   
    confidence: string,
    user_agent: string,
    timezone: string,
    country: string,
    city: string,
    isp: string,
    timestamp: string
}

export default function VisitorListAdmin({visitors}: {visitors: Array<Visitor>}) {
    const router = useRouter();

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="flex flex-wrap justify-center gap-3">
                {
                    visitors.map((vis) => (
                    <motion.div animate={{ x: [-5, 5] }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: "linear" }} key={vis.visitor_id} className="flex flex-col gap-2 bg-black text-white rounded shadow-md border-white border-2 p-5 hover:bg-white hover:border-black hover:text-black transition ease-in-out size-60 overflow-x-hidden overflow-y-auto ">
                        {Object.entries(vis).map(([key, value]) => (
                            <div key={key} className="flex justify-center flex-col">
                                <h1 className="font-bold text-center bg-green-500 border-black border-1 text-black">{`${key.toUpperCase()}: `}</h1>
                                <h1 className="font-bold text-center bg-red-500 border-white border-1 text-wrap">{`${value}`}</h1>
                            </div>
                        ))}              
                    </motion.div>
                    ))
                }
            </motion.div>
            <motion.button whileHover={{scale: 0.8, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} type="button" onClick={() => {router.push("/admin");}} className="flex justify-center align-center bg-yellow-500 border-black border-2 text-black rounded-md shadow-md p-2">Go Back</motion.button>
        </>
    );
}