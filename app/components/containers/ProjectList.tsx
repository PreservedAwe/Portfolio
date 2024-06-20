'use client';

import {motion} from "framer-motion";
import * as Text from "../text/Text";

interface Project {
    id: string;
    project_name: string;
    language: string;
    github: string;
  }

  interface ProjectList {
    projects: Array<Project>;
  }

export default function ProjectList({projects}: ProjectList) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1.0 }} className="flex flex-wrap justify-center gap-3">
          {
            projects.map((pro) => (
              <div key={pro.id} className="flex flex-col bg-black text-white rounded shadow-md border-white p-7 hover:bg-white hover:text-black transition ease-in-out">
                <div>
                  <h1 className="font-bold text-center my-5">Project Name:{pro.project_name}</h1>
                </div>
                <div>
                  <h1>Language(s):{pro.language}</h1>
                </div>
                <div>
                  <h1>Github Link:{pro.github}</h1>
                </div>
              </div>
            ))
          }
        </motion.div>
    );
}