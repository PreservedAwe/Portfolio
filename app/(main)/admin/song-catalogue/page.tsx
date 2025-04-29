import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import AdminNavButton from "@/components/buttons/AdminNavButton";
import SongListAdmin from "@/components/containers/SongListAdmin";
import { memo } from "react";
import prisma from "@/lib/prisma";
import AdminChecker from "@/components/session/AdminChecker";

export const dynamic = 'force-dynamic';

export default memo(function Page() {

    const MainContent = async () => {

        async function callContent() {
        const allSongs = await prisma.songs.findMany();
        return allSongs;
        }
    
        const songs = await callContent();
    
        return(
        <main className={ContentType.adminContent}>
            <div className="flex flex-col h-full w-full gap-3">
                <AdminNavButton text="Go Back" url="/admin"/>
                <AdminNavButton text="Create New Song" url="/admin/song-catalogue/new-song"/>
                <Text.LText text="All are Editable Here"/>
                <SongListAdmin songs={songs} />
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

