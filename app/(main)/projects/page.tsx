import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import ProjectList from "@/components/containers/ProjectList";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import Loader from "@/components/partials/Loader";
import {memo} from 'react';

const Header = dynamic(() => import("@/components/partials/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/partials/Footer"), { ssr: false });
const MainScene = dynamic(() => import("@/components/3d/MainScene"), { ssr: false });

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
      <Suspense fallback={<Loader/>}>
        <Loader/>
        <Header/>
        <MainContent/>
        <Footer/>
        <MainScene/>
      </Suspense>
    </>
  );
})

export const revalidate = 5
