import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";
import * as Text from "../components/text/Text";
import MainScene from "../components/3d/MainScene";
import { Suspense } from "react";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden gap-5">
        <iframe  className="place-self-center" width="560" height="315" src="https://www.youtube.com/embed/hUrrHPVHeLM?si=QgPlKXbNDH9M5-cZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Text.LText text="Hey There, My name is Nasean"/>
        <Text.MText text="I am a Software Engineer that has  worked with multiple languages to solve a problem.
          Some such as c#, cobol,javascript, python, c++, ruby, etc.
          The video above will give you a small introduction to who I am."/>
        <a className="hover:-translate-y-1 transition ease-in-out bg-black border-2 border-white rounded-lg mx-32 p-5 flex justify-center" href="/resume.pdf"><Text.MText text="Click this link to download a pdf of my resume"/></a>
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
