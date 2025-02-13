import React from "react";
import icon from '../../assets/images/icon-list.svg'

const List = () => {

  const listItems = [
    { text: 'Product discovery and building what matters' },
    { text: 'Measuring to ensure updates are a success' },
    { text: 'And much more!' },
  ]

  return (
    <>
      <section>
        <ul className="list-none flex flex-col justify-center space-y-4 text-sm lg:text-lg my-10 md:my-7 text-darkSlateGrey">
          {listItems.map((item, index) => (
            <li key={index} className="flex">
              <img src={icon} alt="check/tick list icon" className="mr-6 md:w-7"/>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default List;
