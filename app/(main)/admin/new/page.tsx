import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import { Suspense } from "react";
import AdminChecker from "@/components/session/AdminChecker";
import ProjectCreateFormAdmin from "@/components/containers/ProjectCreateFormAdmin";
import dynamic from 'next/dynamic';
import Loader from "@/components/partials/Loader";

const AdminScene = dynamic(() => import("@/components/3d/AdminScene"), { ssr: false });

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
            <Suspense fallback={<Loader/>}>
                <Loader/>
                <MainContent/>
                <AdminChecker/>
                <AdminScene/>
            </Suspense>   
        </>
    );
}

