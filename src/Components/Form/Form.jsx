import React, { useState } from "react";
import iconSuccess from "../../assets/images/icon-success.svg";

const Form = () => {
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setError("Valid email required ");
      return;
    }

    // clear
    setError("");
    // open modal
    setModalOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className='flex justify-between mb-2 text-sm font-bold text-darkSlateGrey'>
          Email Address
          {error && <p className='text-tomato text-sm font-bold'>{error}</p>}
        </label>
        {!error ? (
          <input
            type='email'
            name=''
            id=''
            placeholder=' email@company.com'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className='px-5 mb-8 border border-myGrey rounded-lg py-4 text-sm lg:text-base lg:px-4'
          />
        ) : (
          <input
            type='email'
            name=''
            id=''
            placeholder=' email@company.com'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className='px-5 mb-8 border border-tomato bg-tomato/20 rounded-lg py-4 text-sm lg:text-base lg:px-4'
          />
        )}

        <button
          type='submit'
          className='mb-8 bg-darkSlateGrey text-white font-bold rounded-lg py-4 text-sm lg:text-base lg:px-4 hover:cursor-pointer'
        >
          Subscribe to monthly newsletter
        </button>
      </form>

      {/* MODAL */}

      {modalOpen && (
        <div className='fixed inset-0 flex items-center justify-center md:bg-charcoalGrey bg-white'>
          <div className='flex flex-col w-auto mx-10 md:mx-auto md:w-2/5 text-left gap-8 px-8 py-6 md:px-14 md:py-10 bg-white md:rounded-4xl md:shadow-2xl'>
            <img src={iconSuccess} alt='' className='w-1/6' />
            <h2 className='text-4xl lg:text-6xl text-darkSlateGrey font-bold'>
              Thanks for subscribing!
            </h2>
            <p className='text-darkSlateGrey text-sm md:text-base'>
              A confirmation email has been sent to{" "}
              <span className='font-bold'>{userInput}</span>. Please open it and
              click the button inside to confirm your subscription.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className='mb-8 bg-darkSlateGrey text-white font-bold rounded-lg py-4 text-sm lg:text-base lg:px-4 hover:cursor-pointer hover:shadow-2xl hover:bg-gradient-to-r from-grad-1 via-grad-2 to-grad-3 transition-all 500ms ease-in-out'
            >
              Dismiss message
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
