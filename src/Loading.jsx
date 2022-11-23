import React from "react";
import Cast from "./Cast.png";

function Loading() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        {" "}
        <div className="fixed px-10 delay-150 top-1/3 animate-ping">
          <h2 className="py-2 font-bold text-center text-slate-100">
            Welcome To
          </h2>
          <img className="" src={Cast} alt="Your Company" />
        </div>
      </div>
    </div>
    // second loading screen custom css
    // <div class="stage">
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    //     <div class="layer"></div>
    // </div>
  );
}

export default Loading;
