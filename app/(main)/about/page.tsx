import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import Loader from "@/components/partials/Loader";

const Header = dynamic(() => import("@/components/partials/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/partials/Footer"), { ssr: false });
const MainScene = dynamic(() => import("@/components/3d/MainScene"), { ssr: false });

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-5">
        <Suspense fallback={<Text.SText text="Loading video........"/>}>
          <iframe className="w-full aspect-video overflow-hidden border-none" src="https://www.youtube.com/embed/_uL_b5Ll9RA?si=xflqfPVJO3ywBbU2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen ></iframe>
        </Suspense>
        <Text.LText text="I'm Nasean"/>
        <Text.MText text="Watch this video for a small clip about me"/>
        <a className="hover:-translate-y-1 transition ease-in-out bg-black border-2 border-white rounded-lg m-auto p-5 flex justify-center" href="/resume.pdf"><Text.MText text="Download Resume"/></a>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <Loader/>
      <Header/>
      <MainContent/>
      <Footer/>
      <Suspense fallback={null}>
        <MainScene/>
      </Suspense>      
    </>
  );
}
