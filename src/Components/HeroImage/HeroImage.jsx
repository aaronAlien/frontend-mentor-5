import React from "react";
import desktop from "../../assets/images/illustration-sign-up-desktop.svg";
import mobile from "../../assets/images/illustration-sign-up-mobile.svg";

const HeroImage = () => {
  return (
    <>
      <figure>
        <div className="flex flex-col justify-center w-full md:w-auto mx-auto">
          <img src={desktop} alt='brand illustration' className='sm:block hidden mx-auto w-full rounded-xl' />
          <img src={mobile} alt='brand illustration' className='sm:hidden block mx-auto w-full' />
        </div>
      </figure>
    </>
  );
};

export default HeroImage;
