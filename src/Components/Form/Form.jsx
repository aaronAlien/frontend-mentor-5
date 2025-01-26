import React from "react";

const Form = () => {
  return (
    <>
      <div className=''>
        <form action='' className='flex flex-col'>
          <label className='mb-2 text-sm font-bold text-darkSlateGrey'>
            Email Address
          </label>
          <input
            type='email'
            name=''
            id=''
            placeholder='  email@company.com'
            className='mb-4 sm:mb-8 border border-myGrey rounded-lg py-4 sm:py-5 text-sm sm:text-base sm:px-4'
          />
          <button type='submit' className='bg-darkSlateGrey text-white font-bold rounded-lg py-4 sm:py-5 text-sm sm:text-base sm:px-4'>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
