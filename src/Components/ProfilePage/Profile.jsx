import React, { useEffect, useState } from "react";
import "./Profile.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Profile() {
  const [email, setemail] = useState("sda");

  const color = useSelector((state) => state.colors.userdata);

  // check();
  return (
    <div
      className={`w-[100vw] min-h-[100vh] pt-20  overflow-scroll flex items-center bg-white flex-col  `}
    >
      <div
        style={{
          backgroundImage: `url(
            "/markus-spiske-g5ZIXjzRGds-unsplash.jpg"
          )`,
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
        className={`min-w-[100vw] min-h-[100vh] pb-20 pt-10 overflow-scroll flex items-center justify-center flex-wrap   `}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            backgroundImage: `url(
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=M3w1MzU4MDd8MHwxfHNlYXJjaHwxMTh8fHVzZXIlMjB8ZW58MHx8fHwxNzA4NDMwMzk4fDA&ixlib=rb-4.0.3"
            )`,
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
          className={`profilimg relative top-3 flex justify-center rounded-md items-end `}
        >
          <h2
            className={`profilename w-full h-auto text-md pl-2 rounded-b-md  ${color.sidemainTailwind} text-white`}
          >
            Profile photo
          </h2>
        </div>
        <table className={`table ${color.MaincolorTailwind}`}>
          <tr className={`rowprofile `}>
            <th className={` ${color.MaincolorTailwind}  `}>First_Name</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Mohan
            </td>
          </tr>
          <tr className={`rowprofile`}>
            <th className={` ${color.MaincolorTailwind}  `}>Last Name</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Jaiswal
            </td>
          </tr>
          <tr className={`rowprofile `}>
            <th className={` ${color.MaincolorTailwind} `}>Email</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Mohanjaiswal@gmail.com
            </td>
          </tr>
          <tr className={`rowprofile `}>
            <th className={` ${color.MaincolorTailwind} `}>Location</th>
            <td
              className={`${
                color.BorderTailwind == "border-black"
                  ? "border-green-500"
                  : "border-black"
              }`}
            >
              Mirzapur{" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;
