import React from "react";
import { Link } from "react-router-dom";
const TopMenu = () => {
  return (
    <div className=" mx-auto mt-5 flex w-10/12 items-center justify-center">
      <div className="me-auto flex text-3xl font-extrabold">
        <div>Ba</div>
        <div style={{ color: "#3C9379" }}>chira</div>
      </div>
      <div className="mx-auto flex w-5/12 justify-between">
        <Link to="/" className="font-bold text-sky-950">
          Home
        </Link>
        <div style={{ color: "#535A56" }}>Products</div>
        <div style={{ color: "#535A56" }}>Categories</div>
        <div style={{ color: "#535A56" }}>Brands</div>
        <div style={{ color: "#535A56" }}>Pricing</div>
      </div>
      <div className="ms-auto flex items-center">
        <div className="text-sky-950">Login</div>
        <button
          id="registerbtn"
          style={{ backgroundColor: "#3C9379" }}
          className="btn-greenshadow ms-3 rounded-lg px-5 py-2 text-sky-50"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
