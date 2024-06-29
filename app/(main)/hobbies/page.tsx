import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import HobbyList from "@/components/containers/HobbyList";
import MainScene from "@/components/3d/MainScene";
import { Suspense } from "react";

const MainContent = async () => {

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden">
        <Text.LText text="These are some hobbies that I enjoy doing"/>
        <HobbyList/>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
      <Suspense fallback={null}>
        <MainScene/>
      </Suspense>
    </>
  );
}
