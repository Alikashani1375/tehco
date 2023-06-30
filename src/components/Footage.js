import React from "react";
import explorer from "./images/elogo.png";
import mojavez1 from "./images/mojavez.png";
import mojavez2 from "./images/mojavez2.png";

const Footage = () => {
  return (
    <div
      className="mt-20 flex w-full flex-row bg-cyan-600 pb-10 pe-20 ps-20 pt-20"
      dir="rtl"
      style={{ borderTopRightRadius: 150 }}
    >
      <div className="flex w-6/12 flex-col ">
        <div className="text-lg font-bold text-white">درباره ما</div>
        <div
          style={{ borderBottom: "2px solid white", width: 80, marginTop: 15 }}
        ></div>
        <div className="font-md mt-10 flex flex-row text-gray-300">
          <img width={110} src={explorer} />
          <div className="ms-4 w-9/12">
            شركت توسعه ارتباطات هيركان به اختصار (تهکو) به شناسه ملی 14001987942
            با اتکا بر علم و هنر مدیريت در حوزه فناوري اطلاعات و ارتباطات با هدف
            استفاده از فرصت هاي نوین تجارت الكترونيك وكسب و كار، ایجاد بستر
            مناسب و ایمن جهت ترویج بهترین و به روزترین علوم و فنون طراحی و
            تبلیغات، خدمات و فعالیت های خود را به نحو احسن عرضه می کند.
          </div>
        </div>
      </div>
      <div className="flex w-3/12 flex-col">
        {" "}
        <div className="text-lg font-bold text-white">درباره ما</div>
        <div
          style={{ borderBottom: "2px solid white", width: 80, marginTop: 15 }}
        ></div>
        <div className="font-md mt-10 flex flex-row text-gray-300">
          <img src={mojavez1} width={100} />
          <img src={mojavez2} width={100} />
        </div>
      </div>
      <div className="flex w-3/12 flex-col">
        {" "}
        <div className="text-lg font-bold text-white"> اطلاعات تماس</div>
        <div
          style={{ borderBottom: "2px solid white", width: 80, marginTop: 15 }}
        ></div>
        <div className=" mt-10 flex flex-row items-center justify-center text-sm font-bold text-gray-300">
          <div className="mx-2">
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="location-pin"
            >
              <g data-name="Layer 2">
                <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z"></path>
                <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z"></path>
              </g>
            </svg>
          </div>
          <div>
            {" "}
            آدرس دفتر گرگان: خیابان ولیعصر، عدالت 21، کمانگری 5، مجتمع نگاران
            طبقه دو، واحد غربی
          </div>
        </div>
        <div className=" mt-3 flex flex-row items-center justify-start font-bold text-gray-300">
          <div className="mx-2">
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="location-pin"
            >
              <g data-name="Layer 2">
                <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z"></path>
                <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z"></path>
              </g>
            </svg>
          </div>
          <div> تلفن : 02191307651</div>
        </div>
        <div className=" mt-3 flex flex-row items-center justify-start font-bold text-gray-300">
          <div className="mx-2">
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="location-pin"
            >
              <g data-name="Layer 2">
                <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z"></path>
                <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z"></path>
              </g>
            </svg>
          </div>
          <div> ایمیل : info@tehco.ir</div>
        </div>
        <div className=" mt-3 flex flex-row items-center justify-start font-bold text-gray-300">
          <div className="mx-2">
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="location-pin"
            >
              <g data-name="Layer 2">
                <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z"></path>
                <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z"></path>
              </g>
            </svg>
          </div>
          <div> اینستاگرام : tehco.ir</div>
        </div>
      </div>
    </div>
  );
};

export default Footage;
