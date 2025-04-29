import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import AdminNavButton from "@/components/buttons/AdminNavButton";
import ProjectListAdmin from "@/components/containers/ProjectListAdmin";
import { memo } from "react";
import prisma from "@/lib/prisma";
import AdminChecker from "@/components/session/AdminChecker";

export const dynamic = 'force-dynamic';

export default memo(function Page() {

    const MainContent = async () => {

        async function callContent() {
        const allProjects = await prisma.projects.findMany();
        return allProjects;
        }
    
        const projects = await callContent();
    
        return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col h-full w-full gap-3">
                <AdminNavButton text="Go Back" url="/admin"/>
                <AdminNavButton text="Create New Project" url="/admin/proj-catalogue/new-project"/>
                <Text.LText text="All are Editable Here"/>
                <ProjectListAdmin projects={projects} />
            </div>
        </main>
        );
    }

    return (
        <>
            <MainContent/>
            <AdminChecker/>   
        </>
    );
})

