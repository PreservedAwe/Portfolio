import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import ProjectList from "@/components/containers/ProjectList";
import {memo} from 'react';

export const dynamic = 'force-dynamic';

const MainContent = async () => {

  async function callContent() {
    const allProjects = await prisma.projects.findMany();
    return allProjects;
  }

  const projects = await callContent();

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col h-full w-full gap-3">
        <Text.LText text="My Projects"/>
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}

export default memo(function Page() {
  return (
    <>
      <MainContent/>
    </>
  );
})

