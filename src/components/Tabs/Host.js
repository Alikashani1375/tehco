import React from "react";
import server from "../images/server.png";
const Host = () => {
  return (
    <div className="align-center mx-auto mt-20 flex w-10/12 flex-row justify-center">
      <div className="flex w-6/12 flex-col">
        <div className="text-4xl font-bold text-gray-500">
          هاست و <span className="text-cyan-500"> سرور</span>
        </div>

        <div className="mt-10 text-lg font-normal leading-loose text-gray-500">
          با تهیه هاست و سرور از تهکو، با هزینه های مقرون به صرفه یک میزبانی
          مطمئن با سرعت مناسب با دسترسی پذیری بالا برای تمام مشتریان که دارای
          کسب و کار و یا سازمان و… می باشند خدماتی با مقیاس های کوچک وبزرگ قابل
          فراهم است. تهکو می تواند خدمات میزبانی وب کسب و کار یا سازمان شما را
          با توجه به اندازه خدمات شما به مخاطبین خود پیشنهاد دهد بنابراین این
          خدمات در تهکو فراهم است که خدمات مشاوره رایگان در امور تهیه فضای
          میزبانی ( هاست وسرور) همچنین خدمات ثبت دامنه با توجه به خواسته های شما
          پس از طراحی سایت یا تولید برنامه های واسط موبایل و… انجام دهد و همچنبن
          خدمات میزبانی تهکو دارای پشتیبانی 7*24 می باشد.
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
        <img src={server} />
      </div>
    </div>
  );
};

export default Host;
