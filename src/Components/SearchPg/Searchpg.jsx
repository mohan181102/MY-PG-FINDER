import React, { useState } from "react";
import "./SearchPg.css";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { ReactTyped } from "react-typed";

function Searchpg() {
  const { handleSubmit, register } = useForm();
  const [loader, setloader] = useState(false);

  // create function for search

  async function searchdata(data) {
    console.log(data);
  }

  const timeout = setTimeout(() => {
    setloader(true);
    clearTimeout(timeout);
  }, 1000);

  return (
    <>
      <div
        className={` w-full flex text-center ${
          loader ? "hidden" : "block"
        } items-center justify-center  h-full bg-white`}
      >
        <ColorRing
          width={80}
          height={80}
          colors={["green", "green", "green", "green", "green"]}
          ariaLabel="loading..."
        />
      </div>
      <div
        style={{
          backgroundImage: "url('/searchpagepic.jpg')",
          objectPosition: "bottom",
          backgroundSize: "cover",
        }}
        className={`w-[100vw] h-3/4 pt-40 gap-4 pb-4  overflow-scroll flex  items-center  bg-white flex-col  `}
      >
        <h1
          className={` w-3/4 bg-gray-200 overflow-hidden opacity-100 rounded-md  mb-[5%] h-[90px] flex items-center justify-between pl-10 text-[3rem] font-extrabold text-green-700`}
        >
          <p className={`heading w-auto h-full`}>Search PG/Hotel here</p>
          <i className="fa fa-keyboard-o mr-3" aria-hidden="true"></i>
        </h1>

        <form
          onSubmit={handleSubmit(searchdata)}
          className={`w-3/4 h-[18vh] flex-wrap bg-green-400 rounded-md flex items-top justify-center`}
        >
          {/* CREATE SEARCH BOX  */}
          <div
            className="w-3/4 h-2/4 mt-2
         rounded-md bg-white flex items-center justify-center gap-2  "
          >
            {/* box for location */}
            <input
              placeholder="Type location.."
              className="w-[30%] h-3/4 border-4 outline-none border-spacing-2 border-green-400"
              {...register("location", { required: true })}
            />
            {/* box for check in and check out */}
            <div className="w-[40%] h-3/4 border border-spacing-2 flex items-start border-green-400">
              {/* check-in date */}
              <input
                id="checkin"
                type="date"
                {...register("checkin", { required: true })}
                className="w-2/4 h-full border border-r-2 border-green-400 outline-none"
              />
              {/* check-out date*/}
              <input
                type="date"
                id="checkout"
                {...register("checkout", { required: true })}
                className="w-2/4 h-full border border-r-2 border-green-400 outline-none"
              />
            </div>
            {/* number of peoples with age(children/adult/old) */}
            <div
              {...register("persons", { required: true })}
              className="w-[20%] h-3/4 border border-spacing-2 border-green-400"
            >
              {/* NUMBER OF ADULTS */}
              <select
                {...register("adult", { required: false })}
                className="select"
              >
                <option selected disabled hidden>
                  Adult
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>5+</option>
                <option>no</option>
              </select>
              {/* NUMBER OF CHILDRENS */}
              <select
                className="select"
                {...register("child", { required: false })}
              >
                <option selected disabled hidden>
                  Child
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>5+</option>
                <option>no</option>
              </select>
              {/* NUMBER OF OLD */}
              <select
                className="select"
                {...register("old", { required: false })}
              >
                <option className="option" selected disabled hidden>
                  Old
                </option>
                <option className="option">1</option>
                <option className="option">2</option>
                <option className="option">3</option>
                <option className="option">4</option>
                <option className="option">5</option>
                <option className="option">5+</option>
                <option className="option">no</option>
              </select>
            </div>
          </div>

          {/* search btn */}
          <button
            type="submit"
            className={`w-3/4 rounded-md font-bold text-xl text-green-700 h-1/4  bg-white `}
          >
            Search
          </button>
        </form>

        {/* CREATE SERACH DIV */}
      </div>
      <div className={`w-full h-full`}></div>
      {/* {loader ? "" : setloader(true)} */}
    </>
  );
}

export default Searchpg;
