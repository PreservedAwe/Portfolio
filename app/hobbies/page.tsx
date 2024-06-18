import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
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
