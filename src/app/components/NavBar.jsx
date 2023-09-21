import React from "react";

const Navbar = () => {
  return (
    <div className="z-20 w-full text-2xl antialiased flex items-center top-0 shadow-md fixed bg-zinc-200 py-4 font-normal">
      <div className="flex flex-wrap items-center w-full px-12">
        <h1 className="ml-24">Terezie Kosíková</h1>
        <div className="flex-grow"></div>
        <ul className="sm:flex hidden space-x-7 pr-18">
          <a href="#home">
            <li className="list-none hover:border-b-4 border-zinc-400 cursor-pointer p-2 transition-all">
              Home
            </li>
          </a>
          <a href="#my-approach">
            <li className="list-none hover:border-b-4 border-zinc-400 cursor-pointer p-2 transition-all">
              My Approach
            </li>
          </a>
          <a href="#get-to-know-me">
            <li className="list-none hover:border-b-4 border-zinc-400 cursor-pointer p-2 transition-all">
              Get to know me
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
