import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import { Suspense, memo } from "react";
import ValidateAdmin from "@/lib/validateAdmin";
import AdminChecker from "@/components/session/AdminChecker";
import SongFormAdmin from "@/components/containers/SongFormAdmin";

const MainContent = async ({ params }: { params: { song: string } }) => {
    
    async function callContent() {
        const song = await prisma.songs.findUnique({
            where: {
                id: params.song,
            }
        });

        if(song != null) {
            return song;
        }
        else{
            ValidateAdmin.redirectToAdmin();
            return {id: "", title: "", genre: "", description: "", cover_url: "", audio_url: ""};
        }
    }

    const song = await callContent();

    return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col h-full w-full gap-3">
                <Text.LText text={("Edit @: ")}/>
                <SongFormAdmin song={song} />
            </div>
        </main>
    );
}

export default memo(function Page({ params }: { params: { song: string } }) {

    return (
        <>
            <MainContent params={params}/>
            <AdminChecker/>
        </>
    );
})
