import React, { useState } from "react";
import "./Rent.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import HotelCard from "../Homepage/Hotelcard/HotelCard";

function Rent() {
  const color = useSelector((state) => state.colors.userdata);
  const [checkrent, setrent] = useState([0, 6, 6, 6]);

  return (
    <div
      style={{
        backgroundImage: `url("/photo-1578683010236-d716f9a3f461.jpg")`,
      }}
      className={`w-screen h-full pt-40 bg-cover bg-center object-cover  overflow-scroll flex items-start justify-center flex-row flex-wrap `}
    >
      {checkrent != null ? (
        <h1
          className={`w-5/6 flex justify-start items-center  pl-10 text-2xl font-bold text-white   h-16 ${color.sidemainTailwind}`}
        >
          Rented PG
        </h1>
      ) : null}
      {checkrent == null ? (
        <div
          className={`w-1/4 h-[40%] bg-white rounded-md flex items-center flex-col p-10 `}
        >
          <div
            className={`w-full h-3/4 flex text-3xl items-center justify-center text-green-600`}
          >
            <i className="fa-solid fa-face-meh fa-2xl"></i>
          </div>
          <h2
            className={`w-full h-1/4 text-green-600  text-2xl font-bold flex items-center justify-center`}
          >
            You haven't rented a PG
          </h2>
        </div>
      ) : (
        checkrent.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`rentli w-1/4 h-52 border rounded-md border-spacing-1 m-4`}
              >
                <div className={`hotelcard`}>
                  <HotelCard />
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
}

export default Rent;
