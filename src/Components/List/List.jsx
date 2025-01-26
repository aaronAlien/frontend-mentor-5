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
      <ul className="list-none flex flex-col justify-center space-y-2 sm:space-y-4 text-sm sm:text-lg mb-8 sm:mb-0 text-darkSlateGrey">
        {listItems.map((item, index) => (
          <li key={index} className="flex">
            <img src={icon} alt="" className="mr-6"/>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
