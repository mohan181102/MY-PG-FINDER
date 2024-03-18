import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BookPage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function BookPage({ image, hotelname, price, rating, location }) {
  const color = useSelector((state) => state.colors.userdata);
  const array = [
    { name: "Hotelname", data: "hotelname" },
    { name: "Price", data: "price" },
    { name: "Rating", data: "rating" },
    { name: "Location", data: "location" },
  ];
  const [comment, setcomment] = useState([
    {
      name: "maxwell",
      comment: "dsdfafjdjfjkdshj",
    },
  ]);
  const imagearray = [1, 2, 3, 4, 4, 2, 3, 3];
  const navigate = useNavigate();

  return (
    <div
      className={` min-w-full max-w-max h-full pb-40 fixed  overflow-scroll  flex flex-wrap items-center justify-center gap-10 bg-white flex-row `}
    >
      <img
        className={`imgforbook w-full h-3/4 bg-cover object-cover bg-center`}
        src={`https://images.unsplash.com/photo-1682688759157-57988e10ffa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MzU4MDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzM2NTg3N3w&ixlib=rb-4.0.3&q=80&w=400`}
      />

      {/* IMAGES */}
      <div
        className={`w-3/4 h-44 my-3 rounded-md p-2 pl-2 flex items-center overflow-scroll  justify-center flex-col ${color.sidemainTailwind}`}
      >
        <h2
          className={`w-full font-bold text-xl h-[20%] overflow-hidden  ${color.sidemainTailwind} text-white  pl-9 flex justify-start items-center `}
        >
          Images
        </h2>
        <ul
          className={`w-full flex items-center overflow-x-scroll justify-start h-full  pl-2 `}
        >
          {imagearray.map((item, index) => {
            return (
              <>
                <img
                  src={"/searchpagepic.jpg"}
                  className={`w-1/4 h-[90%] bg-center bg-cover mx-2 rounded-md mt-2`}
                />
              </>
            );
          })}
        </ul>
      </div>

      {/* DETAILS */}
      <ul
        className={`detailsul w-3/4 h-auto flex items-center  justify-center flex-wrap flex-row border border-spacing-1 border-gray-600`}
      >
        <h2
          className={`w-full font-bold text-lg h-14 ${color.sidemainTailwind} text-white  pl-9 flex justify-start items-center `}
        >
          Details
        </h2>

        {array.map((item, index) => {
          return (
            <li className={`flex items-between justify-left  w-full h-14  `}>
              <p
                className={`w-10 h-full flex font-medium items-center justify-center`}
              >
                {index + 1}
              </p>
              <p
                className={`text-md w-1/4 h-full text-left flex items-center font-medium justify-start`}
              >
                {item.name}
              </p>
              <span className={` w-2 h-full flex items-center justify-center `}>
                <i class="fa-solid fa-caret-right"></i>
              </span>
              <p
                className={`h-full w-2/4 flex items-center  justify-start pl-4`}
              >
                {item.data}
              </p>
            </li>
          );
        })}
      </ul>

      {/* COMMENTS */}

      <div
        className={`w-3/4 h-auto flex items-center  justify-center flex-wrap flex-row overflow-scroll border border-spacing-1 border-gray-600`}
      >
        <h2
          className={`w-full font-bold text-lg h-14 ${color.sidemainTailwind} text-white  pl-9 flex justify-start items-center `}
        >
          Comments
        </h2>
        {comment != null
          ? comment.map((item, index) => {
              return (
                <li
                  key={index * 2}
                  className={`flex items-between justify-center flex-wrap bg-slate-200  w-5/6 h-auto  `}
                >
                  <h3
                    className={` w-full h-1/4 bg-white text-black flex items-center justify-start `}
                  >
                    <img alt="?" />
                    <p>{item.username}</p>
                  </h3>
                  <p>{item.comment}</p>
                </li>
              );
            })
          : ""}
      </div>
      <NavLink
        onClick={() => navigate("/payment")}
        className={`w-3/5 h-10 fixed bottom-0 flex items-center justify-center ${color.sidemainTailwind} text-white`}
      >
        Process For Booking
      </NavLink>
    </div>
  );
}

export default BookPage;
