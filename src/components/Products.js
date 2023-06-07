import React from "react";
import Slider from "react-slick";
import handsfree from "./images/handsfree.png";
import shoe from "./images/shoe.png";
import sweter from "./images/shirt.png";
import smartwatch from "./images/watch.png";
import airpod from "./images/handsfree.png";
const Products = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,

    // centerMode: true,
    // centerPadding: "60px",
    //     rows: 2,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const items = [
    { name: "Nike Air Force", price: "299.999 $", image: shoe },
    { name: "White Sweter", price: "399.999 $", image: sweter },
    { name: "Androind Smartwatch", price: "599.999 $", image: smartwatch },
    { name: "Apple Airpods", price: "799.999 $", image: airpod },
    { name: "Female Shirt", price: "199.999 $", image: sweter },
    { name: "White Sweter", price: "399.999 $", image: smartwatch },
    { name: "Androind Smartwatch", price: "599.999 $", image: airpod },
  ];

  return (
    <div className=" mx-auto mt-20 flex w-10/12 flex-col justify-center">
      <div className="items-start text-3xl font-bold">
        Populer Products From <br />
        All Brands
      </div>

      <Slider {...settings} className="mt-20 w-full">
        {items.map((item) => (
          <div className=" flex w-1/6 flex-col">
            <img src={item.image} width={250} className="rounded-3xl"></img>
            <div className="ms-2 mt-5 font-bold">{item.name}</div>
            <div className="ms-2 mt-1">{item.price}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
