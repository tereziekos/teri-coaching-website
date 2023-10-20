import React from "react";
import Image from "next/image";
import CalendlyWidget from "./CalendlyWidget";

const Home = () => {
  return (
    <section id="home">
      <div className="z-10 grid  md:grid-cols-2 gap-4 mt-8 md:mt-24 antialiased grid-rows-1 grid-cols-1">
        <div className="row-span-1 col-span-1 border-round">
          <Image
            src="/images/IMG_7658.JPG"
            alt="ProfileImage"
            className="rounded-lg"
            width={900}
            height={1000}
          />
        </div>
        <div className="row-span-1 col-span-1 space-y-8 md:space-y-12">
          <div>
            <h1 className="text-center text-3xl mb-6 md:mb-8">I am Terezie</h1>
            <p className="text-center text-xl mb-10 md:mb-12">
              I would be happy to help you. Be it with your inner exploration,
              relationships or practical problem.
            </p>
          </div>
          <div className="space-y-8 md:space-y-10">
            <p className="text-base text-white antialiased border-l-8 bg-zinc-400 border border-gray-100 p-4 rounded-lg">
              “I can always choose, but I ought to know that if I do not choose,
              I am still choosing.” <br /> Jean-Paul Sartre
            </p>
            <p className="text-base antialiased text-white border-l-8 bg-zinc-400 border border-gray-100 p-4 rounded-lg ">
              “The only way to deal with an unfree world is to become so
              absolutely free that your very existence is an act of rebellion.”
              <br /> Albert Camus
            </p>
          </div>
        </div>
        <div className="row-span-1 col-span-1 flex flex-col justify-right pr-12 mt-20 md:mt-0">
          <h1 className="text-3xl text-right mb-6">
            Book a free intro 20 min coaching session
          </h1>
          <p className="text-right text-base mb-10 antialiased">
            Best way to find out if we are a good fit is to meet.
          </p>
          <div className="ps-51">
            <p className="text-right text-base mb-4 antialiased">
              The pricing for the regular full sessions is 100 USD for 50
              minutes.
            </p>
            <p className="text-right text-base mb-8 antialiased">
              You can also contact me at my email kosikova.terezie@gmail.com.
            </p>
          </div>
        </div>
        <div className="row-span-1 col-span-1 flex justify-left mt-20 md:mt-0">
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
};

export default Home;
