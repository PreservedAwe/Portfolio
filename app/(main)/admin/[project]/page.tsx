import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import { Suspense } from "react";
import ValidateAdmin from "@/lib/validateAdmin";
import AdminChecker from "@/components/session/AdminChecker";
import ProjectFormAdmin from "@/components/containers/ProjectFormAdmin";
import dynamic from 'next/dynamic';
import Loader from "@/components/partials/Loader";

const AdminScene = dynamic(() => import("@/components/3d/AdminScene"), { ssr: false });

const MainContent = async ({ params }: { params: { project: string } }) => {

    if(params.project.length != 24 ) {
        ValidateAdmin.redirectToAdmin();
    }
    
    async function callContent() {
        const project = await prisma.projects.findUnique({
            where: {
                id: params.project,
            }
        });

        if(project != null) {
            return project;
        }
        else{
            ValidateAdmin.redirectToAdmin();
            return {id: "", name: "", description: "", github_link: ""};
        }
    }

    const project = await callContent();

    return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
                <Text.LText text={("Edit Project@: " + project?.name)}/>
                <ProjectFormAdmin project={project} />
            </div>
        </main>
    );
}

export default function Page({ params }: { params: { project: string } }) {

    ValidateAdmin.checkIfNotAdmin();

    return (
        <>
            <Loader/>
            <MainContent params={params} />
            <AdminChecker/>
            <Suspense fallback={null}>
                <AdminScene/>
            </Suspense>
        </>
    );
}
