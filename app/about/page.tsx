import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className=" flex ">
        <h1 className="text-center text-white text-4xl">
          My name is Nasean. I am a computer programmer. I have messed around and worked with multiple languages. <br />
          Some such as c#, cobol,javascript, python, c++, ruby, etc.<br />
          I also play the guitar and make my own songs and covers.
        </h1>
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
