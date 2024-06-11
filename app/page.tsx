import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentType from "./lib/classes";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="bg-black text-white flex text-5xl">
        <h1>This is the main home page of the website.</h1>
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
