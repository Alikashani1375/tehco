import React from "react";
import net from "../images/networktab.png";
const Network = () => {
  return (
    <div className="align-center mx-auto mt-20 flex w-10/12 flex-row justify-center">
      <div className="flex w-6/12 flex-col">
        <div className="text-4xl font-bold text-gray-500">
          شبکه و <span className="text-cyan-500"> زیرساخت</span>
        </div>

        <div className="mt-10 text-lg font-normal leading-loose text-gray-500">
          شرکت تهکو با داشتن کادر مجرب و متخصص در امور شبکه و زیر ساخت با تحلیل
          و ارائه راهکارهای مناسب و مقرون به صرفه خواهد توانست با توجه به نیازها
          و اندازه سازمان یا کسب و کار شما، چناچه نیاز به ارتباطات داخلی سیستمی
          و یکپارچه درون سازمانی باشد به همراه مشاوره رایگان و همچنین تحلیل های
          نیاز های اولیه شما را در ایجاد بستر زیر ساخت و ارتباطات سیستمی از جمله
          راهکارهای شبکه ای و ارائه سرور داخلی و ایجاد شبکه های توزیعی و هم
          پوشانی شده و ارتباطی، شما را یاری نماید.
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
        <img src={net} />
      </div>
    </div>
  );
};

export default Network;
