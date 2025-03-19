import ContentType from "@/lib/classes";
import ContactForm from "@/components/containers/ContactForm";
import * as Text from "@/components/text/Text";
import {memo} from 'react';

const emailReceiver: string = process.env.MAIL_RECEIVER_EMAIL || "bant7ds@yahoo.com";
const MainContent = () => {

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-hidden overflow-x-hidden text-white rounded border-white p-14 gap-3">
        <Text.LText text="Send a message here or email@:"/>
        <Text.MText text={emailReceiver}/>
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
