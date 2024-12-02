import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import Loader from "@/components/partials/Loader";
import {memo} from 'react';

const Header = dynamic(() => import("@/components/partials/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/partials/Footer"), { ssr: false });
const MainScene = dynamic(() => import("@/components/3d/MainScene"), { ssr: false });

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-5">
        <Suspense fallback={<Text.SText text="Loading video........"/>}>
          <iframe className="w-full aspect-video overflow-hidden border-none" src="https://www.youtube.com/embed/IjlABZj7chw?si=gu74NLLT-Oft_t5K" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen ></iframe>
        </Suspense>
        <Text.LText text="I'm Nasean"/>
        <Text.MText text="Watch this video for a small clip about me"/>
      </div>
    </main>
  );
}

export default memo(function Page() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Loader/>
        <Header/>
        <MainContent/>
        <Footer/>
        <MainScene/>
      </Suspense>     
    </>
  );
})
