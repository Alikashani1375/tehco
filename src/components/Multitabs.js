import React, { useState } from "react";
import App from "../App";
import seo from "./images/seo.png";
import host from "./images/host.png";
import app from "./images/app.png";
import network from "./images/network.png";
import organization from "./images/organization.png";
import support from "./images/support.png";
import website from "./images/website.png";
import Seo from "./Tabs/Seo";
import Application from "./Tabs/Application";
import Organ from "./Tabs/Organ";
import Host from "./Tabs/Host";
import Network from "./Tabs/Network";
import Sup from "./Tabs/Sup";
import Web from "./Tabs/Web";
import $ from "jquery";
const Multitabs = () => {
  const [tab, setTab] = useState(<Seo />);
  const setborder = (ev) => {
    $("#borderbottom div").removeClass("activated");
    $(`${ev}`).addClass("activated");
  };
  return (
    <div
      className="align-center mb-20 mt-10 flex w-full flex-col justify-center"
      dir="rtl"
      style={{ fontFamily: "inherit" }}
    >
      <div
        className="align-center mx-auto flex w-10/12 flex-row justify-around"
        style={{ cursor: "pointer" }}
        id="borderbottom"
      >
        <div
          className=" activated flex flex-col"
          id="seoborder"
          onClick={() => {
            setTab(<Seo />);
            setborder("#seoborder");
          }}
        >
          <img src={seo} width={150} />
          <div className="font-bold text-gray-500">سئو و بازاریابی دیجیتال</div>
        </div>
        <div
          className="flex flex-col"
          id="web"
          onClick={() => {
            setTab(<Web />);
            setborder("#web");
          }}
        >
          <img src={website} width={150} />
          <div className="text-center font-bold text-gray-500">
            {" "}
            طراحی وبسایت{" "}
          </div>
        </div>
        <div
          className="flex flex-col"
          id="application"
          onClick={() => {
            setTab(<Application />);
            setborder("#application");
          }}
        >
          <img src={app} width={150} />
          <div className="text-center font-bold text-gray-500">
            {" "}
            تولید اپلیکیشن{" "}
          </div>
        </div>
        <div
          className="flex flex-col"
          id="organ"
          onClick={() => {
            setTab(<Organ />);
            setborder("#organ");
          }}
        >
          <img src={organization} width={150} />
          <div className="text-center font-bold text-gray-500">
            {" "}
            راهکارهای اداری و <br />
            سازمانی{" "}
          </div>
        </div>
        <div
          className="flex flex-col"
          id="host"
          onClick={() => {
            setTab(<Host />);
            setborder("#host");
          }}
        >
          <img src={host} width={150} />
          <div className="text-center font-bold text-gray-500">هاست و سرور</div>
        </div>
        <div
          className="flex flex-col"
          id="network"
          onClick={() => {
            setTab(<Network />);
            setborder("#network");
          }}
        >
          <img src={network} width={150} />
          <div className="text-center font-bold text-gray-500">
            شبکه و زیرساخت
          </div>
        </div>
        <div
          className="flex flex-col"
          id="supp"
          onClick={() => {
            setTab(<Sup />);
            setborder("#supp");
          }}
        >
          <img src={support} width={150} />
          <div className="text-center font-bold text-gray-500">
            پشتیبانی و وب افزار
          </div>
        </div>
      </div>
      <div>{tab}</div>
    </div>
  );
};

export default Multitabs;
