import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import { memo } from "react";
import AdminChecker from "@/components/session/AdminChecker";
import AdminButton from "@/components/buttons/AdminButton";

export default memo(function Page() {

    const MainContent = async () => {
    
        return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col h-full w-full gap-3">
                <Text.LText text="Admin Options"/>
                <AdminButton/>
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

