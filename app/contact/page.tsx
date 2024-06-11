import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentType from "../lib/classes";

const MainContent = () => {
  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col bg-black text-white rounded shadow-md border-white p-14">
        <h1>This is the contact page of the website.</h1>
        <form className="flex flex-col items-center">
          <label htmlFor="name">Name:</label>
          <input className="text-black" type="text" id="fname" name="fname"/>
          <label htmlFor="email">Email:</label>
          <input className="text-black" type="email" id="email" name="email"/>
          <label htmlFor="message">Message:</label>
          <input className="text-black" type="text" id="message" name="message"/>
          <button type="button" className="bg-white text-black my-3 rounded shadow-md p-2">Click Me!</button> 
        </form> 
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
