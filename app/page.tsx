import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import ContentType from "./lib/classes";
import * as Text from "./components/text/Text";



const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="text-white flex justify-center">
        <Text.LText text="Welcome To My Website. Take a look around and see what I do."/>
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
    </>
  );
}
