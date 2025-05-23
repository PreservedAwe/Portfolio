import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import { Suspense } from "react";
import {memo} from 'react';

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col h-full w-full gap-5">
        <Suspense fallback={<Text.SText text="Loading video........"/>}>
          <iframe className="w-full h-full aspect-video overflow-hidden border-none" src="https://www.youtube.com/embed/IjlABZj7chw?si=gu74NLLT-Oft_t5K" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen ></iframe>
        </Suspense>
        <Text.LText text="Hey There!"/>
        <Text.MText text="Watch this video for a small clip about me"/>
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
