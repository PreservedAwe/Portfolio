import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import ProjectList from "@/components/containers/ProjectList";
import {memo} from 'react';

const MainContent = async () => {

  async function callContent() {
    const allProjects = await prisma.projects.findMany({take: 5});
    return allProjects;
  }

  const projects = await callContent();

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
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

