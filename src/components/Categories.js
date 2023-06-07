import React from "react";
import fashion from "./images/fashion.png";
import skincare from "./images/skincare.png";
import shoes from "./images/Shoes.png";
import electronic from "./images/Electronic.png";
const Categories = () => {
  return (
    <div className="mx-auto mt-20 flex w-10/12 flex-col items-start justify-center ">
      <div className="mt-10 w-4/12 text-4xl font-medium">
        Browse Categories of <br />
        The Store
      </div>
      <div className="mt-10 flex w-full flex-row">
        <div className="flex h-full  flex-col " style={{ width: "45%" }}>
          <div className="brightness-100" style={{ width: 500, height: 180 }}>
            <div className="text-xl font-medium" id="fashiontext">
              Fashion
              <br />
              30000 items
            </div>
            <img
              className="rounded-3xl brightness-75"
              style={{ zIndex: 1 }}
              src={fashion}
            ></img>
          </div>
          <div
            className=" brightness-100"
            style={{ width: 500, height: 180, marginTop: 30 }}
          >
            <div className="text-xl font-medium" id="skincaretext">
              Skincare
              <br />
              500 items
            </div>
            <img className=" rounded-3xl brightness-75" src={skincare}></img>
          </div>
        </div>
        <div className="flex flex-row " style={{ width: "55%" }}>
          <div className=" brightness-100" style={{ width: 290, height: 390 }}>
            <div className="w-full text-lg font-medium" id="shoestext">
              Shoes
              <br />
              20000 items
            </div>
            <img className="rounded-3xl brightness-75" src={shoes}></img>
          </div>
          <div
            className=" ms-auto  brightness-100"
            style={{ width: 360, height: 390 }}
          >
            <div className="w-full text-lg font-medium" id="electronictext">
              Electronic
              <br />
              20000 items
            </div>
            <img className="rounded-3xl brightness-75" src={electronic}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
