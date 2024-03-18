import React from "react";
import { useSelector } from "react-redux";

function Setting() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/public/third.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={`w-full h-full bg-cover`}
      ></div>
    </>
  );
}

export default Setting;
