import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import AdminScene from "@/components/3d/AdminScene";
import { Suspense } from "react";
import ValidateAdmin from "@/lib/validateAdmin";
import AdminChecker from "@/components/session/AdminChecker";
import ProjectFormAdmin from "@/components/containers/ProjectFormAdmin";

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
            <MainContent params={params} />
            <AdminChecker/>
            <Suspense fallback={null}>
                <AdminScene/>
            </Suspense>
        </>
    );
}
