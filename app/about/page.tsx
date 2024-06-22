import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";
import * as Text from "../components/text/Text";
import MainScene from "../components/3d/MainScene";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden">
        <iframe  className="place-self-center" width="560" height="315" src="https://www.youtube.com/embed/hUrrHPVHeLM?si=QgPlKXbNDH9M5-cZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Text.LText text="Hey There, My name is Nasean"/>
        <Text.MText text="My name is Nasean. I am a computer programmer. I have messed around and worked with multiple languages.
          Some such as c#, cobol,javascript, python, c++, ruby, etc.
          I also play the guitar and make my own songs and covers."/>
        <a className="hover:translate-y-1 transition ease-in-out" href=""><Text.MText text="Click this link to download a pdf of my resume"/></a>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <MainScene/>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  );
}
