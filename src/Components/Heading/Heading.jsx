import React from "react";

const Heading = () => {
  return (
    <>
      <div className='flex flex-col gap-8 mb-2'>
        <h1 className='text-4xl sm:text-6xl text-darkSlateGrey font-bold'>Stay updated!</h1>
        <h2 className='text-lg sm:text-2xl text-darkSlateGrey'>
          Join 60,000+ product managers receiving monthly updates on:
        </h2>
      </div>
    </>
  );
};

export default Heading;
