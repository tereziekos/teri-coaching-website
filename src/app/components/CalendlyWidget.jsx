import React from "react";

const Calendly = () => {
  return (
    <div
      style={{
        width: "640px",
        height: "750px", 
        overflow: "hidden",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <iframe
        src="https://calendly.com/kosikova-terezie/intro_coaching_session"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%", 
          border: "none",
          borderRadius: "10px"
        }}
      ></iframe>
    </div>
  );
};


export default Calendly;
