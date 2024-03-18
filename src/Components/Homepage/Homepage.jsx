import React, { useState } from "react";
import HotelCard from "./Hotelcard/HotelCard";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Homepage() {
  const color = useSelector((state) => state.colors.userdata);

  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]);
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url("/searchpagepic.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
      className={`min-w-[100vw] h-full  pt-40  overflow-scroll flex items-center bg-white flex-col `}
    >
      <h1
        className={`w-5/6 h-auto py-4 ${color.sidemainTailwind}  text-white text-left text-3xl font-bold m-3 rounded-md flex items-center justify-start pl-4 `}
      >
        LIST OF PG
      </h1>
      {data.map((item, index) => {
        return (
          <li
            key={index}
            className={` w-3/4  h-56 rounded-md m-4  `}
            onClick={() => navigate("/bookpage")}
          >
            <HotelCard />
          </li>
        );
      })}
    </div>
  );
}

export default Homepage;
