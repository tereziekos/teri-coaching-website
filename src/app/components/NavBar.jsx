"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="z-20 w-full text-lg sm:text-xl antialiased flex items-center top-0 shadow-md fixed bg-zinc-200 py-2 sm:py-4 font-normal">
      <div className="flex flex-wrap items-center w-full px-6 sm:px-12">
        <h1 className="ml-2 sm:ml-12 md:ml-16 text-lg sm:text-xl">Terezie Kosíková</h1>
        <div className="flex-grow"></div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden px-2 py-1">
          ☰
        </button>
        <ul className={`sm:flex ${menuOpen ? "flex" : "hidden"} space-x-2 sm:space-x-4 pr-12 sm:pr-14`}>
          <a href="#home" {...{ onClick: closeMenu }}>
            <li className="list-none hover:border-b-4 border-zinc-400 cursor-pointer p-2 transition-all">
              Home
            </li>
          </a>
          <a href="#my-approach" {...{ onClick: closeMenu }}>
            <li className="list-none hover:border-b-4 border-zinc-400 cursor-pointer p-2 transition-all">
              My Approach
            </li>
          </a>
          <a href="#get-to-know-me" {...{ onClick: closeMenu }}>
            <li className="list-none hover:border-b-4 border-zinc-400 cursor-pointer p-2 transition-all">
            About Me
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};


export default Navbar;
