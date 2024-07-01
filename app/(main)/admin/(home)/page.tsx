import AdminScene from "@/components/3d/AdminScene";
import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import ProjectListAdmin from "@/components/containers/ProjectListAdmin";
import { Suspense } from "react";
import prisma from "@/lib/prisma";
import AdminChecker from "@/components/session/AdminChecker";
import AdminButton from "@/components/buttons/AdminButton";

export default function Page() {

    const MainContent = async () => {

        async function callContent() {
        const allProjects = await prisma.projects.findMany();
        return allProjects;
        }
    
        const projects = await callContent();
    
        return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
                <Text.LText text="Here are all the projects ready to be edited"/>
                <AdminButton/>
                <ProjectListAdmin projects={projects} />
            </div>
        </main>
        );
    }

    return (
        <>
            <MainContent/>
            <AdminChecker/>
            <Suspense fallback={null}>
                <AdminScene/>
            </Suspense>            
        </>
    );
}
