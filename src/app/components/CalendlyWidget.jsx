import React from 'react';

const Calendly = () => {
  return (
    <div style={{ width: "640px", height: "1000px", overflow: "hidden", position: "relative" }}>
      <iframe
        src="https://calendly.com/kosikova-terezie/intro_coaching_session"
        style={{
          position: "absolute",
          top: "-250px",
          left: "0",
          width: "670px",
          height: "1000px",
          border: "none",
        }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;