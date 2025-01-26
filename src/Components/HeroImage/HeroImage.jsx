import React from "react";
import desktop from '../../assets/images/illustration-sign-up-desktop.svg'
import mobile from "../../assets/images/illustration-sign-up-mobile.svg";

const HeroImage = () => {
  return (
    <>
        <img
          src={desktop}
          alt=''
          className='sm:block hidden mx-auto rounded-xl'
        />
        <img
          src={mobile}
          alt=''
          className='sm:hidden block mx-auto w-full'
        />
    </>
  );
};

export default HeroImage;
