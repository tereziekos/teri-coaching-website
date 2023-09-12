import React from "react";
import Image from "next/image";
import ProfileImage from "/Users/terezka/work/website-Teri/teri_app/src/app/images/IMG_3722.jpg";

const Home = () => {
  return (
    <div className="z-10 max-w-5xl w-full items-center mt-32">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={ProfileImage}
            alt="ProfileImage"
            width={500}
            height={300}
          />
        </div>
        <div>
          <h1 className="  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            I am Terezie
          </h1>
          <p className="text-justify">
            I would be happy to help you. Be it with your inner exploration,
            relationships or practical problem.
          </p>
          <h1>Book a coaching session with me</h1>
        </div>
      </div>
      <div>
        <p className="text-justify">
          “I can always choose, but I ought to know that if I do not choose, I
          am still choosing.” Jean-Paul Sartre
        </p>
        <p className="text-justify">
          “The only way to deal with an unfree world is to become so absolutely
          free that your very existence is an act of rebellion.” ― Albert Camus
        </p>
        
      </div>
    </div>
  );
};

export default Home;
