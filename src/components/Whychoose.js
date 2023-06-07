import React from "react";
import car from "./images/car.png";
import hand from "./images/hand.png";
import hour from "./images/hour.png";
const Whychoose = () => {
  return (
    <div className=" mx-auto mt-20 flex w-9/12 flex-col items-center justify-center">
      <div className="text-3xl font-bold" style={{ fontFamily: "initial" }}>
        Why Choose Ba<span style={{ color: "#3C9379" }}>chira</span>?
      </div>
      <div className="mt-20 flex w-full flex-row justify-between">
        <div className="flex w-3/12 flex-col items-center justify-center text-center">
          <img src={car} width={64} height={64}></img>
          <div className="mt-1 text-xl font-bold">Free Delivery</div>
          <div style={{ color: "#535A56" }} className="text-medium mt-1">
            Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
            eiusmod tempor
          </div>
        </div>
        <div className="flex w-3/12 flex-col items-center justify-center text-center">
          <img src={hand} width={64} height={64}></img>
          <div className="mt-1 text-xl font-bold">Trusted Platform</div>
          <div style={{ color: "#535A56" }} className="text-medium mt-1">
            Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
            eiusmod tempor
          </div>
        </div>
        <div className="flex w-3/12 flex-col items-center justify-center text-center">
          <img src={hour} width={64} height={64}></img>
          <div className="mt-1 text-xl font-bold">Here For You </div>
          <div style={{ color: "#535A56" }} className="text-medium mt-1">
            Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
            eiusmod tempor
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
