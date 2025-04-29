import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import prisma from "@/lib/prisma";
import SongList from "@/components/containers/SongList";
import {memo} from 'react';

export const dynamic = 'force-dynamic';

const MainContent = async () => {

  async function callContent() {
    const allSongs = await prisma.songs.findMany();
    return allSongs;
  }

  const songs = await callContent();

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col h-full w-full gap-3">
        <Text.LText text="My Songs"/>
        <SongList songs={songs} />
      </div>
    </main>
  );
}

export default memo(function Page() {
  return (
    <>
      <MainContent/>
    </>
  );
})

