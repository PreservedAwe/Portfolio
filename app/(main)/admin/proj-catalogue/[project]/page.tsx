import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import { Suspense, memo } from "react";
import ValidateAdmin from "@/lib/validateAdmin";
import AdminChecker from "@/components/session/AdminChecker";
import ProjectFormAdmin from "@/components/containers/ProjectFormAdmin";

const MainContent = async ({ params }: { params: { project: string } }) => {
    
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
            return {id: "", name: "", description: "", github_link: "", banner_url: ""};
        }
    }

    const project = await callContent();

    return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col h-full w-full gap-3">
                <Text.LText text={("Edit @: ")}/>
                <ProjectFormAdmin project={project} />
            </div>
        </main>
    );
}

export default memo(function Page({ params }: { params: { project: string } }) {

    return (
        <>
            <MainContent params={params}/>
            <AdminChecker/>
        </>
    );
})
