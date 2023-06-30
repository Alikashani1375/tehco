import React from "react";
import $ from "jquery";
import { useEffect } from "react";

const Navbar2 = () => {
  const showchild = (e) => {
    $(`${e}`).toggle(500);
  };
  const hidechild = (e) => {
    $(`${e}`).hide(500);
  };

  return (
    <div
      className="mx-auto flex w-10/12 flex-row items-center justify-center rounded-2xl bg-cyan-500 bg-sky-50 px-3  font-bold text-sky-50"
      style={{
        position: "absolute",
        cursor: "pointer",
        top: "190px",
        zIndex: 2,
        left: "8.5%",
      }}
    >
      <div>
        <input className="ms-5 w-8/12 rounded px-2 py-2 text-end text-cyan-950" />
      </div>

      <svg
        id="svghover"
        className="mx-5"
        viewBox="0 0 448 512"
        fill="currentColor"
        height="1em"
        width="1em"
      >
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
      <svg
        id="svghover"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </svg>
      <div
        className="me-auto ms-10 flex w-9/12 flex-row items-center "
        dir="rtl"
        style={{ color: "#B3E1F0" }}
      >
        <div className="mx-7" id="mousehover">
          خانه
        </div>
        <div className="mx-7 flex h-full flex-col items-center">
          <div className="flex flex-row items-center" id="mousehover">
            <div
              className="py-5"
              onClick={() => {
                showchild("#show1");
              }}
            >
              محصولات
            </div>
            <div>
              <svg
                className="ms-2 mt-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
                />
              </svg>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center px-8 py-2 font-normal text-gray-600"
            id="show1"
            style={{ display: "none" }}
            onMouseLeave={() => {
              hidechild("#show1");
            }}
          >
            <div>تست</div>
            <div>تست2</div>
          </div>
        </div>
        <div className="mx-7 flex flex-col items-center" id="mousehover">
          <div className="flex flex-row items-center">
            <div
              className="py-5"
              onClick={() => {
                showchild("#show2");
              }}
            >
              خدمات
            </div>
            <div>
              <svg
                className="ms-2 mt-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
                />
              </svg>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center px-8 py-2 font-normal text-gray-600"
            id="show2"
            style={{ display: "none" }}
            onMouseLeave={() => {
              hidechild("#show2");
            }}
          >
            <div>تست</div>
            <div>تست2</div>
          </div>
        </div>
        <div className="mx-7 flex flex-col items-center" id="mousehover">
          <div className="flex flex-row items-center">
            <div
              className="py-5"
              onClick={() => {
                showchild("#show3");
              }}
            >
              نمونه کار
            </div>
            <div>
              <svg
                className="ms-2 mt-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
                />
              </svg>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center px-8 py-2 font-normal text-gray-600"
            id="show3"
            style={{ display: "none" }}
            onMouseLeave={() => {
              hidechild("#show3");
            }}
          >
            <div>تست</div>
            <div>تست2</div>
          </div>
        </div>
        <div className="mx-7 flex flex-col items-center" id="mousehover">
          <div className="flex flex-row items-center">
            <div
              className="py-5"
              onClick={() => {
                showchild("#show4");
              }}
            >
              {" "}
              پشتیبانی
            </div>
            <div>
              <svg
                className="ms-2 mt-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
                />
              </svg>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center px-8 py-2 font-normal text-gray-600"
            id="show4"
            style={{ display: "none" }}
            onMouseLeave={() => {
              hidechild("#show4");
            }}
          >
            <div>تست</div>
            <div>تست2</div>
          </div>
        </div>

        <div className="mx-7" id="mousehover">
          وبلاگ
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
