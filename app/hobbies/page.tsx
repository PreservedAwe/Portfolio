import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentType from "../lib/classes";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <h1>This is the hobbies page of the website.</h1>
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
