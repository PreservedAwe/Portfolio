import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";
import ContactForm from "../components/containers/ContactForm";
import * as Text from "../components/text/Text";


const MainContent = () => {



  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden bg-black text-white rounded shadow-md border-white p-14">
        <Text.MText text="Send Me a message through here!"/>
        <ContactForm />
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
