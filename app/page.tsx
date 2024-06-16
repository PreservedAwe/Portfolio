import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentType from "./lib/classes";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="text-white flex justify-center">
        <h1 className="font-bold text-5xl">Welcome To My Website. Take a look around and see what I do.</h1>
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
