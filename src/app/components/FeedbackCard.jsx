"use clent";
import React from "react";

const FeedbackCard = ({ content, name, title }) => (
  <div className="flex flex-col justify-between px-4 md:px-10 py-12 rounded-[20px] max-w-[800px] mx-auto my-0 feedback-card">
    <p className="font-poppins font-normal sm:text-xs md:text-base lg:text-[18px] leading-[32.4px] text-gray-500 mb-8">
      {content}
    </p>
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold sm:text-md md:text-lg lg:text-[20px] leading-[32px] text-gray-500">
          {name}
        </h4>
        <p className="font-poppins font-normal sm:text-xs md:text-sm lg:text-[16px] leading-[24px] text-gray-500">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
