import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentType from "../lib/classes";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

async function callContent() {
  const allProjects = await prisma.project.findMany()
  console.log(allProjects)  
}

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <h1>This is the projects page of the website.</h1>
      <div className="flex flex-col bg-black text-white rounded shadow-md border-white p-7">
        <div className="">
          <h1>Project Name:Code Breaker</h1>
        </div>
        <div className="">
          <h1>Language(s):Cobol</h1>
        </div>
        <div className="">
          <h1>Github Link:Imagineeeeeeee</h1>
        </div>
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
