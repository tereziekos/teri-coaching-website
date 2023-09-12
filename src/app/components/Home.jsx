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
          <h1 className="">
            I am Terezie
          </h1>
          <p className="text-justify">
            I would be happy to help you. Be it with your inner exploration,
            relationships or practical problem.
          </p>
         
        </div>
      </div>
      <div className="flex justify-center">
        <div  >
          <p>
            “I can always choose, but I ought to know that if I do not choose, I
            am still choosing.” Jean-Paul Sartre
          </p>
          <p>
            “The only way to deal with an unfree world is to become so
            absolutely free that your very existence is an act of rebellion.” ―
            Albert Camus
          </p>
        </div>
        <div >
        <h1>Book a free intro coaching session with me</h1>
          <p>Calendly</p>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      </div>
    </div>
  );
};

export default Home;
