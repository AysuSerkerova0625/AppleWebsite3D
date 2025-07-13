import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10">
      <nav className="flex w-full screen-max-width ">
        <img src={appleImg} width={14} height={18} />
        <ul className="flex flex-1 justify-center">
          {navLists.map((listName) => (
            <li
              key={listName}
              className="px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all"
            >
              {listName}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            className="cursor-pointer transition-all"
            src={searchImg}
            alt="search"
            width={18}
            height={18}
          />
          <img
            className="cursor-pointer transition-all"
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
