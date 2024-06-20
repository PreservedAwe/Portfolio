import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";
import {motion} from "framer-motion";
import { PrismaClient } from '@prisma/client';
import ProjectList from "../components/containers/ProjectList";

const MainContent = async () => {

  async function callContent() {
    const prisma = new PrismaClient;
    const allProjects = await prisma.project.findMany({take: 5});
    return allProjects;
  }

  const projects = await callContent();

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col">
        <h1 className="text-center text-5xl font-bold text-white mb-4">These are projects that I have done</h1>
        <ProjectList projects={projects} />
        <button className="bg-black text-white my-3 flex place-content-center rounded-md shadow-md hover:bg-white hover:text-black transition ease-in-out">View More!</button>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  );
}
