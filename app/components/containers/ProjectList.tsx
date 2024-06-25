'use client';

import {motion} from "framer-motion";

interface Project {
    id: string;
    name: string;
    description: string;
    github_link: string;
  }

  interface ProjectList {
    projects: Array<Project>;
  }

export default function ProjectList({projects}: ProjectList) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="flex flex-wrap justify-center gap-3">
          {
            projects.map((pro) => (
              <div key={pro.id} className="flex flex-col gap-2 bg-black text-white rounded shadow-md border-white border-2 p-5 hover:bg-white hover:border-black hover:text-black transition ease-in-out size-60 text-center overflow-x-hidden overflow-y-auto ">
                <div className="flex justify-center flex-col">
                  <h1 className="font-bold text-center">Project Name</h1>
                  <h1 className="text-center">{pro.name}</h1>
                </div>
                <div className="flex justify-center flex-col">
                  <h1 className="font-bold text-center">Github Link</h1>
                  <a className="border-2 border-green-500 rounded-lg p-1 m-1 hover:scale-90 transition ease-in-out" href={pro.github_link}>Click Here!</a>
                </div>
                <div className="flex justify-center flex-col">
                  <h1 className="font-bold text-center">Description</h1>
                  <h1 className="text-center">{pro.description}</h1>
                </div>
              </div>
            ))
          }
        </motion.div>
    );
}