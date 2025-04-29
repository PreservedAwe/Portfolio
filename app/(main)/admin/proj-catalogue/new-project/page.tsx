import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import { memo } from "react";
import AdminChecker from "@/components/session/AdminChecker";
import ProjectCreateFormAdmin from "@/components/containers/ProjectCreateFormAdmin";

const MainContent = () => {

    return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col h-full w-full gap-3">
                <Text.LText text={("Create new project here: ")}/>
                <ProjectCreateFormAdmin/>
            </div>
        </main>
    );
}

export default memo(function Page() {

    return (
        <>
            <MainContent/>
            <AdminChecker/>
        </>
    );
})

