import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import ContentType from "./lib/classes";
import * as Text from "./components/text/Text";
import MainScene from "./components/3d/MainScene";



const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="flex justify-center max-h-full max-w-full overflow-auto">
        <Text.LText text="Welcome To My Website. Take a look around and see what I do"/>
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
