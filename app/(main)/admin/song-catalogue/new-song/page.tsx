import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import { memo } from "react";
import AdminChecker from "@/components/session/AdminChecker";
import SongCreateFormAdmin from "@/components/containers/SongCreateFormAdmin";

const MainContent = () => {

    return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col h-full w-full gap-3">
                <Text.LText text={("Create new song here: ")}/>
                <SongCreateFormAdmin/>
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

