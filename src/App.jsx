import "./index.css";
import Heading from "./Components/Heading/Heading";
import HeroImage from "./Components/HeroImage/HeroImage";
import List from "./Components/List/List";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import FullForm from "./Components/Form/fullForm";

function App() {
  return (
    <>
      <div className='container flex min-h-screen justify-center items-center sm:mx-auto sm:my-auto'>
        <div className='flex flex-col-reverse sm:flex-row md:gap-18 md:p-8 bg-white sm:rounded-4xl shadow-2xl'>
          <FullForm />
          <HeroImage />
        </div>
      </div>
          
    <div className="relative bottom-0 py-2">
      <Footer />
    </div> 
    </>
  );
}

export default App;
