import React from "react";
import Image from "next/image";
import ProfileImage from "/Users/terezka/work/website-Teri/teri_app/src/app/images/IMG_3722.jpg";

const Home = () => {
  return (
    <div className="z-10  grid grid-rows-2 grid-cols-2 gap-4 mt-32">
      <div className="row-span-1 col-span-1">
        <Image src={ProfileImage} alt="ProfileImage" width={500} height={300} />
        
      </div>
      <div className="row-span-1 col-span-1">
          <h1>I am Terezie</h1>
          <p>
            I would be happy to help you. Be it with your inner exploration,
            relationships or practical problem.
          </p>
        </div>
      <div className="row-span-1 col-span-1">
        <p>
          “I can always choose, but I ought to know that if I do not choose, I
          am still choosing.” Jean-Paul Sartre
        </p>
        <p>
          “The only way to deal with an unfree world is to become so absolutely
          free that your very existence is an act of rebellion.” ― Albert Camus
        </p>
      </div>
      <div className="row-span-1 col-span-1">
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
