import "./index.css";
import Heading from "./Components/Heading/Heading";
import HeroImage from "./Components/HeroImage/HeroImage";
import List from "./Components/List/List";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import desktop from "./assets/images/illustration-sign-up-desktop.svg";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";

function App() {
  return (
    <>
      <div className='container mx-auto h-screen flex flex-col sm:items-center sm:justify-center'>
        <div className='flex flex-col-reverse sm:flex-row mx-auto sm:gap-16 sm:p-8 items-center bg-white sm:rounded-4xl shadow-2xl border'>

          <div className='flex flex-col sm:gap-6 p-3 sm:p-0'>
            <Heading />
            <List />
            <Form />
          </div>

          <div className="flex mx-auto">
            <img
              src={desktop}
              alt=''
              className='sm:block hidden w-full rounded-xl'
            />
            <img src={mobile} alt='' className='sm:hidden block mx-auto w-full' />
          </div>
          
        </div>
      </div>
         <div className="relative bottom-0 mx-auto w-full py-2 text-[11px] text-center text-white">
          <Footer />
        </div>
     
    </>
  );
}

export default App;
