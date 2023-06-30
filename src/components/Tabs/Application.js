import React from "react";
import application from "../images/application.png";
const Application = () => {
  return (
    <div className="align-center mx-auto mt-20 flex w-10/12 flex-row justify-center">
      <div className="flex w-6/12 flex-col">
        <div className="text-4xl font-bold text-gray-500">
          طراحی <span className="text-cyan-500"> اپلیکیشن</span>
        </div>
        <div className="mt-5 text-xl font-normal text-gray-400">
          تجربه با طراحی اپلیکیشن خدمات خود را در دست مخاطب بگذارید.
        </div>
        <div className="mt-10 text-lg font-normal leading-loose text-gray-500">
          اپلیکیشن موبایل یک راه عالی برای ارائه خدمات شما به کاربر است .
          <br />
          فرقی نمیکند خدمات شما چیست و در چه حوزهای کار میکنید، اپلیکیشن کاربردی
          متناسب با کسب و کار شما میتواند سود شما را چندین برابر کند. شناخت
          بهترین راه برای موفقیت کسب و کار شما تخصص ماست. ما با آنالیز کامل کسب
          و کار شما بهترین پیشنهاد را برای ساخت اپلیکیشن برای شما داریم. ما در
          طراحی و توسعه اپلیکیشنهای موبایل اختصاصی، قدرتمند و طراحی کاربر پسند
          با توجه با کسب و کار، همراه شما خواهیم بود.
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
        <img src={application} />
      </div>
    </div>
  );
};

export default Application;
