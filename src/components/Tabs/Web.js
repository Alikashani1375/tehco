import React from "react";
import webtab from "../images/webtab.png";
const Web = () => {
  return (
    <div className="align-center mx-auto mt-20 flex w-10/12 flex-row justify-center">
      <div className="flex w-6/12 flex-col">
        <div className="text-4xl font-bold text-gray-500">
          طراحی <span className="text-cyan-500"> وبسایت</span>
        </div>
        <div className="mt-5 text-xl font-normal text-gray-400">
          با طرحی سایت کسب و کارتان را رونق و توسعه دهید.{" "}
        </div>
        <div className="mt-10 text-lg font-normal leading-loose text-gray-500">
          وب سایت شما اولین تعامل کاربر با کسب و کار شماست. با طراحی سایت برای
          کسب و کارتان، شما می توانید به صورت ۲۴ ساعته با مخاطبان خود در ارتباط
          باشید و همواره ویترین زیبایی از محصولات و خدمات خود را به مشتریان
          ارائه دهید. داشتن وب سایت حرفهای اعتماد کاربر را جلب میکند و باعث
          افزایش فروش میشود. تهکو با داشتن تیم جوان و خلاق در طراحی سایت میتواند
          شما را به اهداف اصلی کسب وکار خود برساند. قدم اول در طراحی سایت مشاوره
          تخصصی و رایگان برای کسب و کار شماست. به علاوه با این کار، شما می
          توانید ارتباطی تعاملی و دو سویه با کاربران, و مشتریان خود برقرار کنید
          که تأثیر بسزایی در برندسازی شما خواهد داشت.
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
        <img src={webtab} />
      </div>
    </div>
  );
};

export default Web;
