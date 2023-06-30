import React from "react";

const Banner = () => {
  return (
    <div className="ms-auto mt-20 flex w-10/12 flex-col items-end justify-end rounded bg-cyan-400 p-20">
      <div className="text-4xl font-bold text-white" dir="rtl">
        تهکو برای همکاری اعلام آمادگی می نماید.
      </div>
      <div className="mt-10 text-2xl text-gray-300" dir="rtl">
        جهت ارتباط و استعلام می توانید اقدام نمایید.
      </div>
      <button
        id="btnbanner"
        style={{ backgroundColor: "#0099CC" }}
        className="btn-greenshadow mx-5 ms-3 rounded-lg px-8 py-5 font-bold text-sky-50"
      >
        پرتال مشتریان +
      </button>
    </div>
  );
};

export default Banner;
