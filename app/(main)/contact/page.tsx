import ContentType from "@/lib/classes";
import ContactForm from "@/components/containers/ContactForm";
import * as Text from "@/components/text/Text";
import {memo} from 'react';

const emailReceiver: string = process.env.MAIL_RECEIVER_EMAIL || "";
const MainContent = () => {

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col h-full w-full text-white rounded border-white p-14 gap-3">
        <Text.LText text="Email me here"/>
        <ContactForm />
      </div>
    </main>
  );
}

export default memo(function Page() {
  return (
    <>
      <MainContent/>
    </>
  );
})
