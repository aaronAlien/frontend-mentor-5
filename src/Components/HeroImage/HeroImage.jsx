import React from "react";
import desktop from "../../assets/images/illustration-sign-up-desktop.svg";
import mobile from "../../assets/images/illustration-sign-up-mobile.svg";

const HeroImage = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full md:w-auto 2xl:w-1/2 mx-auto">
        <img src={desktop} alt='' className='sm:block hidden mx-auto w-full rounded-xl' />
        <img src={mobile} alt='' className='sm:hidden block mx-auto w-full' />
      </div>
    </>
  );
};

export default HeroImage;
