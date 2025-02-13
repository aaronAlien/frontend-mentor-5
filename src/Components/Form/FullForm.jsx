import React from "react";
import Heading from "../Heading/Heading";
import List from "../List/List";
import Form from "./Form";
import Footer from "../Footer/Footer";


const FullForm = () => {
  return (
    <>
    <div className="flex flex-col sm:w-1/2 md:w-1/2 2xl:w-2/3 p-8 sm:p-0 mx-auto justify-center">
        <Heading />
        <List />
        <Form />
    </div>
    </>
  );
};

export default FullForm;
