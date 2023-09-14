import React from "react";

const Navbar = () => {
  return (
    <div className="z-20 w-full text-3xl	 flex  items-center  top-0 shadow-md fixed bg-zinc-200 py-4 font-normal ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="">Terezie Kosíková</h1>
      </div>
      <ul className="justify-center sm:flex hidden">
        <li className="list-none mx-5 hover:border-b-4 border-zinc-400 cursor-pointer p-2 transition-all">
          Home
        </li>
        <li className="list-none mx-5 hover:border-b-4  border-zinc-400 cursor-pointer p-2 transition-all">
          Get to know me
        </li>
        <li className="list-none mx-5 hover:border-b-4  border-zinc-400 cursor-pointer p-2 transition-all">
          Coaching style
        </li>
        <li className="list-none mx-5 hover:border-b-4  border-zinc-400 cursor-pointer p-2 transition-all">
          Contact me
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
