import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import ContentType from "@/lib/classes";
import ContactForm from "@/components/containers/ContactForm";
import * as Text from "@/components/text/Text";
import MainScene from "@/components/3d/MainScene";
import { Suspense } from "react";


const MainContent = () => {



  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden text-white rounded border-white p-14 gap-3">
        <Text.LText text="Send a message here or email@:"/>
        <Text.MText text="naseanlawson @outlook.com"/>
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
      <Suspense fallback={null}>
        <MainScene/>
      </Suspense>      
    </>
  );
}
