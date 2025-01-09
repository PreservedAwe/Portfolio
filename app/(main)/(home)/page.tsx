import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import {memo} from 'react';

const MainContent = () => {

  return(
    <main className={ContentType.mainContent}>
      <div className="flex justify-center flex-col max-h-full max-w-full overflow-auto">
        <Text.LText text="Welcome!"/>
        <Text.MText text="Take a look around at the menu above or any links below."/>
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
