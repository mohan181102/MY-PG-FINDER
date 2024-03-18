import React, { useRef, useState } from "react";
import BookProcess from "../Bookprocess/BookProcess";
import "./Payment.css";
// import { data } from "./Children";
function Payment() {
  // const maindata = data;
  return (
    <div
      className={`w-screen h-screen pt-40 bg-cover bg-center  overflow-scroll flex items-center justify-center bg-white flex-col `}
      style={{
        backgroundImage: `url(
          "/room-img-1.jpg"
        )`,
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* USER DETAILS */}
      <div
        className={`w-3/4 border-4 border-spacing-1 border-green-400 h-[75%] bg-white rounded-md flex flex-wrap items-center `}
      >
        {/* left side */}
        <div
          className={`w-[60%] gap-2 p-10  h-full flex items-center flex-col`}
        >
          <h2
            className={`w-full bg-green-400 cursor-default h-10 flex items-center justify-center text-xl font-bold text-white mb-4`}
          >
            Give all details
          </h2>
          {/* number of adults */}
          <label
            className={`w-[90%] bg-gray-400 h-10 rounded-md flex items-center justify-start pl-10`}
          >
            No. of adults
          </label>
          <input
            type="number"
            min={0}
            placeholder="how many adult members?"
            className={`req-input w-[90%] px-4 outline-none h-10 rounded-md border border-green-500 border-spacing-1`}
          />
          {/* number of child */}
          <label
            className={`w-[90%] h-10 bg-gray-400 rounded-md flex items-center justify-start pl-10`}
          >
            No. of child
          </label>
          <input
            type="number"
            min={0}
            placeholder="how many child?"
            className={`req-input px-4 w-[90%] outline-none h-10 rounded-md border border-green-500 border-spacing-1`}
          />
          {/* number of old */}
          <label
            className={`w-[90%] bg-gray-400 h-10 rounded-md flex items-center justify-start pl-10`}
          >
            No. of old
          </label>
          <input
            type="number"
            min={0}
            placeholder="how many old member?"
            className={`req-input px-4 w-[90%] outline-none h-10 rounded-md border border-green-500 border-spacing-1`}
          />
        </div>

        {/* right side */}
        <div
          style={{
            backgroundImage: "",
          }}
          className={`w-[40%] h-full flex items-center justify-center `}
        >
          <button
            className={`h-auto w-44 rounded-md bg-green-400 flex items-center justify-center text-white text-xl font-bold`}
          >
            Reaquest for booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
