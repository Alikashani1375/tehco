import React from "react";
import shahrdari from "./images/Shahrdari_Gorgan.png";
import Slider from "react-slick";

const Slideshow = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
  };
  return (
    <div className="mx-auto mt-20 w-10/12 ">
      <Slider {...settings}>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>{" "}
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
        <div>
          <img className="mx-auto" width={100} src={shahrdari} />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
