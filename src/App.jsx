import "./index.css";
import HeroImage from "./Components/HeroImage/HeroImage";
import Footer from "./Components/Footer/Footer";
import FullForm from "./Components/Form/FullForm";

function App() {
  return (
    <>
      <main>
        <div className='container flex min-h-screen justify-center items-center sm:m-auto'>
          <div className='flex flex-col-reverse items-center sm:flex-row sm:gap-6 2xl:gap-14 sm:p-6 2xl:p-8 bg-white sm:rounded-4xl shadow-2xl'>
            <FullForm />
            <HeroImage />
          </div>
        </div>
      </main>

      <div className='relative bottom-0 py-2'>
        <Footer />
      </div>
    </>
  );
}

export default App;
