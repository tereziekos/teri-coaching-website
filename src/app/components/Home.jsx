import React from "react";
import Image from "next/image";
import ProfileImage from "/Users/terezka/work/website-Teri/teri_app/src/app/images/IMG_3722.jpg";

const Home = () => {
  return (
    <div className="z-10  grid grid-rows-2 grid-cols-2 gap-4 mt-32">
      <div className="row-span-1 col-span-1">
        <Image src={ProfileImage} alt="ProfileImage" />
      </div>
      <div className="row-span-1 col-span-1 space-y-12">
        <div>
          <h1 className="text-center text-2xl mb-9">I am Terezie</h1>
          <p className="text-center text-xl mb-11">
            I would be happy to help you. Be it with your inner exploration,
            relationships or practical problem.
          </p>
        </div>
        <div className="space-y-9">
          <p className="text-lg text-white antialiased bg-gray-400 border border-gray-300 p-4 rounded">
            “I can always choose, but I ought to know that if I do not choose, I
            am still choosing.” <br /> Jean-Paul Sartre
          </p>
          <p className="text-lg  antialiased text-white bg-gray-400 border border-gray-300 p-4 rounded">
            “The only way to deal with an unfree world is to become so
            absolutely free that your very existence is an act of rebellion.”
            <br/> Albert Camus
          </p>
        </div>
      </div>
      <div className="row-span-1 col-span-2">
        <h1>Book a free intro coaching session with me</h1>
        <p>Calendly</p>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>
    </div>
  );
};

export default Home;
