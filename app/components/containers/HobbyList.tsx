'use client';

import {motion} from "framer-motion";

interface Hobby {
    id: string;
    type: string;
    bio: string;
    name: string;
  }

  interface HobbyList {
    hobbies: Array<Hobby>;
  }

export default function ProjectList({hobbies}: HobbyList) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="flex flex-wrap justify-center gap-3">
          {
            hobbies.map((hob) => (
              <div key={hob.id} className="flex flex-col bg-black text-white rounded shadow-md border-white p-7 hover:bg-white hover:text-black transition ease-in-out">
                <div>
                  <h1 className="font-bold text-center my-5">Project Name:{hob.name}</h1>
                </div>
                <div>
                  <h1>Language(s):{hob.type}</h1>
                </div>
                <div>
                  <h1>Github Link:{hob.bio}</h1>
                </div>
              </div>
            ))
          }
        </motion.div>
    );
}