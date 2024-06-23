import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";
import * as Text from "../components/text/Text";
import { PrismaClient } from '@prisma/client';
import ProjectList from "../components/containers/ProjectList";
import HobbyList from "../components/containers/HobbyList";
import MainScene from "../components/3d/MainScene";

const MainContent = async () => {

  async function callContent() {
    const prisma = new PrismaClient;
    const allHobbies = await prisma.project.findMany({take: 5});
    return allHobbies;
  }

  const hobbies = await callContent();

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden">
        <Text.LText text="These are some hobbies that I take an interest in"/>
        <h1 className="text-center text-5xl font-bold text-white mb-4"></h1>
        <ProjectList projects={hobbies} />
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
