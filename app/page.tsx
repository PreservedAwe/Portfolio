import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentType from "./lib/classes";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="text-white flex text-5xl justify-center">
        <h1>Welcome To My Website. Take a look around and see what I do.</h1>
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
