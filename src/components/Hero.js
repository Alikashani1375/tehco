import React from "react";
import heroimage from "./images/hero.png";
const Hero = () => {
  return (
    <div className="mx-auto mt-10 flex w-10/12 flex-row items-start">
      <div className="me-auto mt-10 flex w-5/12 flex-col justify-start text-6xl font-medium">
        <div>Best Place To Buy</div>
        <div className="mt-4" style={{ color: "#3C9379" }}>
          Everything.
        </div>
        <div
          className="mt-10 text-base font-normal"
          style={{ color: "#535A56" }}
        >
          At Bachira, you can shop for all your favorite beauty brands, clothes,
          household products and more at a single place.
        </div>
        <button
          style={{ backgroundColor: "#3C9379" }}
          className="btn-greenshadow mt-10 w-4/12  rounded-lg py-3 text-lg font-normal text-sky-50"
        >
          Shopping Now
        </button>
      </div>

      <div className="w-8/12" style={{ position: "absolute", left: "30%" }}>
        <img src={heroimage}></img>
      </div>
    </div>
  );
};

export default Hero;
