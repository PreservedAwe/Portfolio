import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import ProjectListAdmin from "@/components/containers/ProjectListAdmin";
import { memo } from "react";
import prisma from "@/lib/prisma";
import AdminChecker from "@/components/session/AdminChecker";
import AdminButton from "@/components/buttons/AdminButton";
import dynamic from 'next/dynamic';


const AdminScene = dynamic(() => import("@/components/3d/AdminScene"), { ssr: false });

export default memo(function Page() {

    const MainContent = async () => {

        async function callContent() {
        const allProjects = await prisma.projects.findMany();
        return allProjects;
        }
    
        const projects = await callContent();
    
        return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
                <Text.LText text="All Projects are Editable Here"/>
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
        </>
    );
})

export const revalidate = 5
