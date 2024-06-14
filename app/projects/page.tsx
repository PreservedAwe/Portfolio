import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentType from "../lib/classes";
import { PrismaClient } from '@prisma/client';
import { Children } from "react";

const MainContent = async () => {

  async function callContent() {
    const prisma = new PrismaClient;
    const allProjects = await prisma.project.findMany({take: 5});
    return allProjects;
  }

  const projects = await callContent();

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-center text-5xl text-white">This is the projects page of the website.</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {
            projects.map((pro) => (
              <div key={pro.id} className="flex flex-col bg-black text-white rounded shadow-md border-white p-7">
                <div className="">
                  <h1>Project Name:{pro.project_name}</h1>
                </div>
                <div className="">
                  <h1>Language(s):{pro.language}</h1>
                </div>
                <div className="">
                  <h1>Github Link:{pro.github}</h1>
                </div>
              </div>
            ))
          }
        </div>
        <button className="bg-black text-white ">View More!</button>
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
