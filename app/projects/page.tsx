import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";
import * as Text from "../components/text/Text";
import { PrismaClient } from '@prisma/client';
import ProjectList from "../components/containers/ProjectList";
import MainScene from "../components/3d/MainScene";

const MainContent = async () => {

  async function callContent() {
    const prisma = new PrismaClient;
    const allProjects = await prisma.project.findMany({take: 5});
    return allProjects;
  }

  const projects = await callContent();

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
        <Text.LText text="These are projects that I have done"/>
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <MainScene/>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  );
}
