import React from "react";
import seotab from "../images/seotab.png";
const Seo = () => {
  return (
    <div className="align-center mx-auto mt-20 flex w-10/12 flex-row justify-center">
      <div className="flex w-6/12 flex-col">
        <div className="text-4xl font-bold text-gray-500">
          سئو و <span className="text-cyan-500">بازاریابی دیجیتال</span>
        </div>
        <div className="mt-5 text-xl font-normal text-gray-400">
          با دیجیتال مارکتینگ، کسب وکارتان را به یک ماشین پولساز تبدیل کن.
        </div>
        <div className="mt-10 text-lg font-normal leading-loose text-gray-500">
          هدف هر کسب و کاری، توسعه، افزایش فروش و کسب درآمد بیشتر است. برای تحقق
          این امر، شما نیاز دارید تا اصول بازاریابی مدرن را در کسب و کارتان
          پیاده سازی کنید. دیجیتال مارکتینگ یا بازاریابی دیجیتال شامل تمامی
          ابزارها و فعالیت هایی است که برای بازاریابی محصولات و خدمات در بستر
          دیجیتال مورد استفاده قرار می گیرند.دیجیتال مارکتینگ حوزه های گوناگونی
          نظیر سئو و بهینه سازی سایت، تولید محتوا، بازاریابی شبکه های اجتماعی،
          تبلیغات و کمپین های اینترنتی، ایمیل مارکتینگ و… را شامل می شود که هر
          کدام اگر به صورت اصولی پیاده سازی و اجرا شوند، می توانند به شکل معجزه
          آسایی کسب و کارتان را رونق بخشند!
          <br /> سایت خود را به صفحه اول گوگل برسانید و مشتری های خود را چند
          برابر کنید. شما با سفارش طراحی سایت خود از تهکو قدم اول در سئو سایت
          خود را برداشته اید، زیرا اولین اصل در طراحی سایت رعایت اصول فنی سئو
          است.
        </div>
        <div>
          {" "}
          <button
            id="registerbtn"
            style={{ backgroundColor: "#0099CC" }}
            className="btn-greenshadow mx-5 ms-3 mt-5 rounded-lg px-8 py-5 font-bold text-sky-50"
          >
            اطلاعات بیشتر
          </button>
        </div>
      </div>
      <div className="align-center flex w-6/12 justify-center">
        <img src={seotab} height={200} />
      </div>
    </div>
  );
};

export default Seo;
