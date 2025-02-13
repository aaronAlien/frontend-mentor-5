import React from "react";

const Heading = () => {
  return (
    <>
      <section>
        <div className='flex flex-col gap-8 w-full'>
          <h1 className='text-4xl lg:text-6xl text-darkSlateGrey font-bold'>Stay updated!</h1>
          <h2 className='text-lg lg:text-xl text-darkSlateGrey'>
            Join 60,000+ product managers receiving monthly updates on:
          </h2>
        </div>
      </section>
    </>
  );
};

export default Heading;
