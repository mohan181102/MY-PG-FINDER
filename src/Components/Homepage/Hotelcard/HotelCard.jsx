import React, { useState } from "react";
import "./HotelCard.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function HotelCard({ apiimage, hotelname, price, rating, location }) {
  const [body, setbody] = useState(true);
  const [imagestate, setimagestate] = useState(0);
  const [inter, setinter] = useState(null);
  const [condition, setcondition] = useState(true);
  const color = useSelector((state) => state.colors.userdata);
  const routlocation = useLocation();
  console.log(routlocation);
  const image = [
    {
      index: 1,
      sorce: "/rom-image-3.webp",
    },
    {
      index: 2,
      sorce: "/room-image-2.jpeg",
    },
  ];

  return (
    <div
      className={` w-full h-full border rounded-md p-4 bg-green-200  flex gap-2 items-center justify-left`}
    >
      <img
        src={`${image[imagestate] ? image[imagestate].sorce : ""}`}
        className={`img bg-cover bg-center object-cover w-1/4 h-full border border-spacing-1 rounded-md `}
      />

      {/* DETAIL ABOUT HOTES */}

      <div
        className={`data w-3/4 h-2/4 mt-20  flex rounded-b-md bg-green-400 items-center justify-center flex-row flex-wrap`}
      >
        {/* left side */}
        <div className="w-2/4 h-full flex p-2 items-center justify-left flex-wrap">
          {/* hotel name */}
          <h2 className="w-full h-1/3 text-xl font-bold text-white text-left">
            Raju palace
          </h2>
          {/* location */}
          <p
            className="w-full h-1/3 text-white flex items-center justify-left gap-2
          "
          >
            <i className="fa-solid fa-location-dot"></i>
            <p className="text-white w-auto h-full">Durg cg</p>
          </p>
          {/* price */}
          <p className="w-full h-1/3 text-white flex items-center flex-wrap">
            <p className="w-auto p-1">
              <i class="fa-solid fa-money-bill-wave fa-sm"></i>
            </p>
            <p className="w-3/4 h-full flex items-center justify-start text-white ">
              700/day
            </p>
          </p>
        </div>

        {/* right side */}
        <div className="w-2/4  h-full">
          {/* rating */}
          <p className="w-full h-2/4 flex items-center justify-end px-3 text-white font-bold text-xl">
            <i class="fa-solid fa-star fa-sm mr-1"></i>
            4.5
          </p>
          {/* book button */}
          <button
            className={`text-white px-2 w-2/4 ml-[45%] bg-red-400 h-[40%] rounded-md flex items-center justify-center`}
          >
            {routlocation.pathname == "/rent"
              ? "Booking"
              : "Process for booking"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
