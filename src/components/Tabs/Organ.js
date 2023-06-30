import React from "react";
import organ from "../images/organ.png";
const Organ = () => {
  return (
    <div className="align-center mx-auto mt-20 flex w-10/12 flex-row justify-center">
      <div className="flex w-6/12 flex-col">
        <div className="text-4xl font-bold text-gray-500">
          راهکارهای <span className="text-cyan-500"> اداری و سازمانی</span>
        </div>

        <div className="mt-10 text-lg font-normal leading-loose text-gray-500">
          امروزه، برای مدیران شرکت های بزرگ و کوچک ضروری می باشد تا پیشرفت
          مدیریتی خود و میزان یکپارچگی عملکرد سازمان با استراتژی ها را اندازه
          گیری نمایند . با افزایش جمعیت و گسترش تکنولوژی، نیاز به استفاده از
          ابزارهای کاربردی برای مدیریت کارآمدتر، در سازمان ها احساس می شود.
          سازمان ها برای رفع نیازهای امروز خود از جمله مدیریت پروژه ها، دسترسی
          به اطلاعات، همکاری درون سازمانی، ارتباط با مشتریان، توانمندسازی
          کارکنان، یکپارچگی سیستم و غیره به دنبال راهکارهایی با حداکثر کارایی می
          باشند . CRM تهکو نرم افزاری است بر پایه پلتفرم های وب که این امکان را
          برای مدیVان و صاحبان کسب و کار خود منحصر به فرد خود این امکان ر کار
          فراهم آورده است تا نیازهای سازمانی و همچنین ارتباط با مشتریان و
          مخاطبین سازمان و بررسی در خواست ها را رفع تا بهره وری و کارایی را در
          کسب و کار های خود افزایش دهند. سازمان های امروزی به این درک رسیده اند
          که برای ارتقای بهره وری و جایگاه خود، نیازمند بکارگیری ابزارهای قوی و
          به روز در زمینه فناوری اطلاعات و ارتباطات درون و برون سازمانی می
          باشند. که CRM تهکو راهکاری است در حفظ رضایت مشتری و همچنین توسعه کسب و
          کار و ارائه خدمات سریع تر به مشتریان است.
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
        <img src={organ} />
      </div>
    </div>
  );
};

export default Organ;
