import ContentType from "@/lib/classes";
import * as Text from "@/components/text/Text";

const MainContent = () => {
return(
    <main className={ContentType.mainContent}>
        <div className="flex justify-center max-h-full max-w-full overflow-auto">
            <Text.LText text="Page Not Found"/>
        </div>
    </main>
);
}

export default function Page() {
return (
    <>
        <MainContent/>
    </>
);
}
