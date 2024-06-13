import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentType from "../lib/classes";
import { PrismaClient } from '@prisma/client';

const MainContent = () => {

  async function callContent() {
    const prisma = new PrismaClient;
    const allProjects = await prisma.project.findMany()
    return allProjects;
  }

  const projects = callContent();
  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col">
        <h1>This is the projects page of the website.</h1>
        {

        }
        <div>
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
