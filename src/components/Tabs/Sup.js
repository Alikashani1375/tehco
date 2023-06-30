import React from "react";
import suptab from "../images/suptab.png";
const Sup = () => {
  return (
    <div className="align-center mx-auto mt-20 flex w-10/12 flex-row justify-center">
      <div className="flex w-6/12 flex-col">
        <div className="text-4xl font-bold text-gray-500">
          پشتیبانی و <span className="text-cyan-500"> وب افزار</span>
        </div>

        <div className="mt-10 text-lg font-normal leading-loose text-gray-500">
          با لطف خداوند و همت تیم خلاق و جوان تهکو توانسته ایم تا به امروز
          پشتیبان تمام نیاز های مشتریان و خدمات ارائه شده به مخاطبین شرکت باشیم.
          با توجه به عملکرد و دستاوردهای پیشین از میزان رضایت مندی مشتریان عزیز
          این نوید را خواهیم داد که شرکت تهکو همچنان برروی خدمات خود پایداری
          داشته باشد و به مشتریان خود خدمات ارائه دهد. از این رو تهکو در طی مدت
          کوتاهی توانست جلب رضایت بسیاری از مشتریان را معطوف خود نماید و تواسته
          ایم نیازهای مشتریان را در کوتاه ترین زمان فراهم آوریم. تهکو برای خدمات
          خود برای مشتریان عزیز بصورت 7*24 خدمات رسانی خواهد کرد.
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
        <img src={suptab} />
      </div>
    </div>
  );
};

export default Sup;
