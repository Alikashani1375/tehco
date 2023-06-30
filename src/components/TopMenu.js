import React, { useEffect } from "react";
import Slider from "react-slick";
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

const TopMenu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: "true",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="h-100 w-100 items-center justify-center">
      <Navbar />
      <Navbar2 />
      <Slider {...settings}>
        <div>
          <img src={bg1} id="whfull" />
          <div id="title1">ارایه و اجرا برنامه نویسی</div>
          <div id="title2">
            خدمات تولید نرم افزار
            <br />
            ارایه خدمات تولید و پشتیبانی نرم افزاری و طراحی سایت
          </div>
        </div>
        <div>
          <img src={bg2} id="whfull" />
          <div id="title3">تهکو به معرفی شما در دنیای دیجیتال</div>
          <div id="title4">خدمات سئو و تولید محتوا</div>
          <div id="title5">
            ارائه خدمات بهینه ساری موتورهای جستجو و بازاریابی محتوایی
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TopMenu;
