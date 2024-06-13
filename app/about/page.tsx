import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentType from "../lib/classes";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="text-white flex text-xl">
        <h1 className="text-center">
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
