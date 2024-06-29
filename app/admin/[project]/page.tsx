import ContentType from "../../lib/classes";
import * as Text from "../../components/text/Text";
import prisma from "../../lib/prisma";
import AdminScene from "../../components/3d/AdminScene";
import { Suspense } from "react";

const MainContent = async ({ params }: { params: { project: string } }) => {

    async function callContent() {
        const project = await prisma.projects.findUnique({
            where: {
                id: params.project,
            }
        });
        return project;
    }

    const project = await callContent();

    return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
                <Text.LText text={("This is project with name: " + project?.name)}/>

            </div>
        </main>
    );
}

export default function Page({ params }: { params: { project: string } }) {
return (
    <>
        <MainContent params={params} />
        <Suspense fallback={null}>
            <AdminScene/>
        </Suspense>
    </>
);
}
