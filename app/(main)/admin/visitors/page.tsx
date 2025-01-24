import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import VisitorListAdmin from "@/components/containers/VisitorListAdmin";
import { memo } from "react";
import prisma from "@/lib/prisma";
import AdminChecker from "@/components/session/AdminChecker";

export const revalidate = 1800; // 30 minutes

export default memo(function Page() {

    const MainContent = async () => {

        async function callContent() {
        const allVisitors = await prisma.visitors.findMany();
        return allVisitors;
        }
    
        const visitors = await callContent();
    
        return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-3">
                <Text.LText text={`All Unique Visitors: ${visitors.length}`}/>
                <VisitorListAdmin visitors={visitors} />
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
