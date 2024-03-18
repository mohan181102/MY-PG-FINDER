import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import authservice from "../../Appwrite/appwrite";
import { useSelector } from "react-redux";
import "./Login.css";

function Login() {
  const { handleSubmit, register } = useForm();
  const color = useSelector((state) => state.colors.userdata);
  const [loader, setloader] = useState(false);
  const [pgloader, setpgloader] = useState(false);

  async function login(data) {
    console.log(data);
    const loginuser = await authservice.login(data);
    if (loginuser) {
      alert("userlogin");
    }
    setloader(false);
  }

  return (
    <div
      style={{
        backgroundImage:
          "url('/public/markus-spiske-g5ZIXjzRGds-unsplash.jpg')",
        objectPosition: "center",
        backgroundSize: "cover",
      }}
      className={`w-full h-full  overflow-scroll flex items-center justify-center pt-20 bg-white  `}
    >
      <div
        className="w-full h-full bg-white "
        style={{ display: `${!pgloader ? "block" : "none"}` }}
      />
      <form
        onSubmit={handleSubmit(login)}
        className={`w-1/4 h-3/4 bg-gray-200 rounded-md flex items-center justify-center p-4 flex-wrap`}
      >
        <h2
          className={`w-full h-10 ${color.MaincolorTailwind} mb-10 rounded-sm text-xl text-white font-bold flex items-center justify-center `}
        >
          Fill all details
        </h2>

        <label
          className={`w-3/4  h-auto text-md ${color.MaincolorTailwind} p-2 rounded-md mb-1 text-white`}
        >
          <i className="fas fa-envelope mx-2"></i>
          Email:-
        </label>
        <input
          className={`w-3/4 p-2 h-10 border-none outline-none mb-3 ${color.BorderTailwind} rounded-sm`}
          label="Email: "
          id="email"
          placeholder="Enter your email"
          type="email"
          {...register("email", { required: true })}
        />

        <label
          className={`w-3/4 h-auto text-md ${color.MaincolorTailwind} p-2 rounded-md mb-1 text-white`}
        >
          <i className="fa fa-key mx-2" aria-hidden="true"></i>
          Password:-
        </label>
        <input
          className={`w-3/4 p-2 h-10 border-none outline-none mb-3 ${color.BorderTailwind} rounded-sm`}
          label="Password: "
          placeholder="Enter your password"
          id="password"
          type="password"
          warning="true"
          showpassword="true"
          {...register("password", { required: true, minLength: 8 })}
        />
        <button
          type="submit"
          id="create"
          onClick={() => setloader(true)}
          className={`w-full h-8 text-white flex items-center justify-center rounded-md ${color.MaincolorTailwind}`}
        >
          {loader ? <div className={`loader`} /> : "LogIn"}
        </button>
      </form>

      {/* add image */}

      <div
        style={{
          objectFit: "cover",
          objectPosition: "center",
          backgroundImage:
            "url('/public/francesca-saraco-_dS27XGgRyQ-unsplash.jpg')",
        }}
        className={` bg-cover bg-center w-1/4 h-3/4 flex items-center justify-center `}
      >
        <div className="welcom-back">
          <p
            className={` cursor-default w-full h-full   flex items-center justify-center   text-2xl font-bold text-white hover:brightness-110 `}
          >
            Welcome back
          </p>
        </div>
      </div>
      {pgloader == false ? setpgloader(true) : ""}
    </div>
  );
}

export default Login;
