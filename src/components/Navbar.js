import React from "react";
import logo from "./images/logo-logistic.png";
import call from "./images/headphone.png";

const Navbar = () => {
  return (
    <div
      className="mx-auto flex w-11/12 flex-row items-center justify-center rounded-2xl bg-sky-50 px-3 pb-20 pt-7"
      style={{
        position: "absolute",
        top: "40px",
        zIndex: 2,
        left: "4.5%",
      }}
    >
      <button
        id="registerbtn"
        style={{ backgroundColor: "#0099CC" }}
        className="btn-greenshadow mx-5 ms-3 rounded-lg px-8 py-5 font-bold text-sky-50"
      >
        پرتال مشتریان +
      </button>
      <div className=" flex flex-col items-start justify-center" dir="rtl">
        <div>
          <span className="font-bold text-gray-600">تلفن :</span>
          <span className="font-normal text-gray-600"> 0219137651</span>
        </div>
        <div className="mt-2">
          <span className="font-bold text-gray-600">ایمیل :</span>
          <span className="font-normal text-gray-600"> info@tehco.ir</span>
        </div>
      </div>
      <img src={call} width={50} className="me-auto ms-10" />

      <img src={logo} width={250} className="ms-auto" />
    </div>
  );
};

export default Navbar;
