import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ContentType from "../lib/classes";


const MainContent = () => {

  const submitMessage = async (formData: FormData) => {
    'use server';

    const rawData = {
      fname: formData.get("fname"),
      email: formData.get("email"),
      message: formData.get("message")
    }
  } 

  return(
    <main className={ContentType.mainContent}>
      <div className="flex flex-col bg-black text-white rounded shadow-md border-white p-14">
        <h1>This is the contact page of the website.</h1>
        <form action={submitMessage} className="flex flex-col items-center">
          <label htmlFor="name">Name:</label>
          <input className="text-black" type="text" id="fname" name="fname"/>
          <label htmlFor="email">Email:</label>
          <input className="text-black" type="email" id="email" name="email"/>
          <label htmlFor="message">Message:</label>
          <input className="text-black" type="text" id="message" name="message"/>
          <button type="submit" className="bg-white text-black my-3 rounded shadow-md p-2">Click Me!</button> 
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
