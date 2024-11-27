import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import HobbyList from "@/components/containers/HobbyList";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import Loader from "@/components/partials/Loader";

const Header = dynamic(() => import("@/components/partials/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/partials/Footer"), { ssr: false });
const MainScene = dynamic(() => import("@/components/3d/MainScene"), { ssr: false });

const MainContent = async () => {

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden">
        <Text.LText text="My Hobbies"/>
        <HobbyList/>
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
