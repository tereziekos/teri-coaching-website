import React from "react";
import Image from "next/image";
import ProfileImage from "../images/IMG_7658.jpg";
import CalendlyWidget from "./CalendlyWidget";

const Home = () => {
  return (
    <section id="home">
     <div className="z-10 grid md:grid-rows-1 md:grid-cols-2 gap-4 mt-44 antialiased grid-rows-4 grid-cols-1">
        <div className="row-span-1 col-span-1 border-round">
          <Image src={ProfileImage} alt="ProfileImage" className="rounded-lg" />
        </div>
        <div className="row-span-1 col-span-1 space-y-12">
          <div>
            <h1 className="text-center text-3xl mb-9">I am Terezie</h1>
            <p className="text-center text-xl mb-11">
              I would be happy to help you. Be it with your inner exploration,
              relationships or practical problem.
            </p>
          </div>
          <div className="space-y-9">
            <p className="text-base text-white antialiased border-l-8 bg-zinc-400 border border-gray-100 p-4 rounded-lg">
              “I can always choose, but I ought to know that if I do not choose,
              I am still choosing.” <br /> Jean-Paul Sartre
            </p>
            <p className="text-base  antialiased text-white border-l-8 bg-zinc-400 border border-gray-100 p-4 rounded-lg ">
              “The only way to deal with an unfree world is to become so
              absolutely free that your very existence is an act of rebellion.”
              <br /> Albert Camus
            </p>
          </div>
        </div>
        <div className="row-span-1 col-span-1 flex flex-col justify-right pr-12 mt-36 md:mt-0">
          <h1 className="text-3xl text-right mb-4">
            Book a free intro 20 min coaching session
          </h1>
          <p className="text-right text-base mb-16 antialiased">
            Best way to find out if we are a good fit is to meet.
          </p>
          <div className="ps-51">
            <p className="text-right text-base mb-2 antialiased  ">
              The pricing for the regular full sessions is 100 USD for 50
              minutes.
            </p>
            <p className="text-right text-base mb-11 antialiased  ">
              You can also contact me at my email kosikova.terezie@gmail.com.
            </p>
          </div>
        </div>
        <div className="row-span-1 col-span-1 flex justify-left mt-36 md:mt-0">
          <CalendlyWidget />
        </div>
      </div>
    </section> 
  );
};

export default Home;
