import React from 'react';

const Navbar = () => {
    return (
        <div className="z-20 mobile:px-10 lg:px-60 lg:text-[26px] lg:h-[80px] mobile:h-[70px] w-[100vw] flex text-5xl items-center justify-end font-normal shadow-md fixed nav-light txt-light">
            
          <ul className="justify-center sm:flex hidden">
            <li className="list-none mx-5 hover:border-b-4 border-grey-600 cursor-pointer p-2 transition-all">Home</li>
            <li className="list-none mx-5 hover:border-b-4 border-grey-600 cursor-pointer p-2 transition-all">Get to know me</li>
            <li className="list-none mx-5 hover:border-b-4 border-grey-600 cursor-pointer p-2 transition-all">Coaching style</li>
            <li className="list-none mx-5 hover:border-b-4 border-grey-600 cursor-pointer p-2 transition-all">Contact me</li>
          </ul>
          
        </div>
      )
}

export default Navbar;
