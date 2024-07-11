import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import AdminScene from "@/components/3d/AdminScene";
import { Suspense } from "react";
import AdminChecker from "@/components/session/AdminChecker";
import ProjectCreateFormAdmin from "@/components/containers/ProjectCreateFormAdmin";

const MainContent = () => {

    return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
                <Text.LText text={("Create new project here: ")}/>
                <ProjectCreateFormAdmin/>
            </div>
        </main>
    );
}

export default function Page() {

    return (
        <>
            <MainContent />
            <AdminChecker/>
            <Suspense fallback={null}>
                <AdminScene/>
            </Suspense>
        </>
    );
}
