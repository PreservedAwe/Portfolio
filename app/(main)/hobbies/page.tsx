import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";
import HobbyList from "@/components/containers/HobbyList";
import {memo} from 'react';

const MainContent = async () => {

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col max-h-full max-w-full overflow-y-auto overflow-x-hidden">
        <Text.LText text="My Hobbies"/>
        <HobbyList/>
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
