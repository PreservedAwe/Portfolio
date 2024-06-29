import AdminScene from "@/components/3d/AdminScene";
import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import ProjectListAdmin from "@/components/containers/ProjectListAdmin";
import { Suspense } from "react";
import prisma from "@/lib/prisma";
import ValidateAdmin from "@/lib/validateAdmin";
import AdminChecker from "@/components/session/AdminChecker";

export default function Page() {

    ValidateAdmin.checkIfNotAdmin();

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
                <ProjectListAdmin projects={projects} />
                <a href="/"><Text.MText text="Click Here to go back Home"/></a>
                <hr />
                <hr />
                <hr />
                <a href="/"><Text.MText text="Click Here to logout."/></a>
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
