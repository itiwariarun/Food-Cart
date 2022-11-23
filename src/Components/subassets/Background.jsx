import React from "react";

const Background = ({ children }) => {
  return (
    <div
      className="min-h-[53.5rem] bg-stone-900 min-w-screen"
      style={{ backgroundImage: "url(/img/register_bg_2.png)" }}
    >
      {children}
    </div>
  );
};

export default Background;
