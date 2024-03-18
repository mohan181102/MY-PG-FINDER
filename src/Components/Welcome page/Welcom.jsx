import React, { useState } from "react";
import "./Welcome.css";
import { ReactTyped } from "react-typed";

function Welcom() {
  const [index, setindex] = useState(0);
  const [indexstate, setindexstate] = useState(0);
  const comment = [
    {
      name: "Easy to use",
      comment:
        "Easy to use and find hotel in enywhere, just search with location.",
    },
    {
      name: "Secure & safe",
      comment:
        "Completely secure and safe pg/hotels. no fraud hotels/pg accept in our sites",
    },
    {
      name: "Easy to communicate with owner",
      comment:
        "Easy for communicate with owner you have owners no. also you can chat.",
    },
  ];
  const image = [
    {
      source: "/markus-spiske-g5ZIXjzRGds-unsplash.jpg",
    },
    {
      source: "/marten-bjork-n_IKQDCyrG0-unsplash.jpg",
    },
    {
      source: "/photo-1578683010236-d716f9a3f461.jpg",
    },
    {
      source: "/photo-1512918728675-ed5a9ecdebfd.jpg",
    },
  ];

  return (
    <div className=" min-w-full min-h-full max-h-max flex items-center flex-col">
      <div
        style={{
          width: "100%",
          height: "80vh",
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundImage: `url(${image[index + 1].source})`,
        }}
        className="overflow-scroll flex items-end justify-center"
      >
        <ul
          onClick={(e) => console.log(e)}
          className=" w-screen ml-2 h-2/4 flex items-center overflow-scroll pl-2 "
        >
          {comment.map((item, index) => {
            return (
              <>
                <li
                  key={index * 6}
                  className={` text-gray-600 bg-transparent rounded-md 
                     hover:scale-110 hover:opacity-100 opacity-30
                  
                   ml-4 transition-all delay-600 ease-out mr-2 p-2 pb-2 w-1/4 h-3/4 inline-block overflow-hidden cursor-default bg-white `}
                >
                  <h2
                    className={`w-full h-1/4 text-gray-500 font-bold text-2xl flex items-center justify-start gap-2`}
                  >
                    <h3
                      className={`w-[20%] h-full text-3xl text-white font-bold rounded-md flex items-center justify-center bg-green-600`}
                    >
                      {index + 1}
                    </h3>
                    {item.name}
                  </h2>
                  <p className={`w-full h-3/4 p-2 text-gray-500 text-xl`}>
                    {item.comment}
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="underwelcom w-full flex items-center justify-center flex-col">
        <h2 className="h2forwelcome font-bold text-2xl text-gray-500 ">
          Welcome To
        </h2>
        <h1 id="h2forwelcometyped">
          <ReactTyped
            strings={["MY PG FINDER"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </h1>
        <p className=" w-full h-auto text-md text-gray-700 text-left pb-8">
          Welcome to MY PG FINDER, your go-to destination for finding the
          perfect PG (Paying Guest) accommodation tailored to students' needs!
          Whether you're a college freshman embarking on your educational
          journey or a seasoned student seeking a comfortable and convenient
          living space, our platform offers an extensive database of PG listings
          to match your preferences. At StudentPGSearch.com, we understand the
          importance of finding a suitable living arrangement that complements
          your academic pursuits. Our user-friendly interface allows you to
          effortlessly browse through a variety of PG options based on location,
          amenities, budget, and other customizable filters. Whether you're
          looking for a cozy single room or shared accommodation with fellow
          students, we've got you covered. Our website provides comprehensive
          information for each listing, including photos, detailed descriptions,
          amenities offered, rental rates, and contact information for property
          owners or managers. With our intuitive search functionality, you can
          easily narrow down your options and find the perfect PG that meets
          your specific requirements. In addition to simplifying the search
          process, MY PG FINDER also strives to ensure transparency and
          reliability. We verify each listing to ensure accuracy and legitimacy,
          giving you peace of mind when making your accommodation decision. Our
          platform also features user reviews and ratings, allowing you to learn
          from the experiences of previous tenants and make informed choices.
          Whether you're studying in a bustling metropolis or a quaint college
          town, StudentPGSearch.com is your trusted companion in finding the
          ideal PG accommodation. Start your search today and embark on your
          academic journey with confidence and comfort!
        </p>

        {/* <h2 className="h2forbeni rounded-md h-40">Benifets of our website</h2>
        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-1 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            PG finder websites provide a convenient platform for individuals to
            search for paying guest accommodations according to their
            preferences and requirements. Users can easily browse through
            various options from the comfort of their homes or on-the-go using
            their smartphones.
          </p>
        </p>
        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />
        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-2 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            These websites typically feature a wide range of PG accommodations,
            including different locations, amenities, and price ranges, allowing
            users to explore multiple options before making a decision.
          </p>
        </p>

        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />
        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-3 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            PG finder websites usually provide detailed information about each
            listing, including photos, amenities, rental prices, and contact
            details. This information helps users make informed decisions based
            on their specific needs and preferences.
          </p>
        </p>

        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />

        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-4 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            By using PG finder websites, individuals can save time that would
            otherwise be spent visiting multiple locations or contacting
            numerous landlords or agents. They can quickly narrow down their
            search based on criteria such as location, budget, and amenities
          </p>
        </p>

        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />
        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-5 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            Many PG finder websites allow users to read reviews and ratings from
            previous tenants, providing valuable insights into the quality of
            accommodations, landlord/owner behavior, and overall living
            experience. This helps users make more confident decisions and avoid
            potential issues.
          </p>
        </p>

        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />
        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-6 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            PG finder websites often offer advanced filtering options that allow
            users to refine their search based on specific criteria such as
            location, rent range, amenities, and preferences (e.g.,
            gender-specific accommodations, pet-friendly options).
          </p>
        </p>

        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />
        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-7 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            These platforms are accessible 24/7, allowing users to search for PG
            accommodations at any time that suits them, regardless of their
            location.
          </p>
        </p>

        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />
        <p className="pforbeni">
          <div className="numbericon text-white">
            <i class="fa-solid fa-8 fa-2xl"></i>
          </div>
          <p className="pforunderbeini">
            Using PG finder websites can potentially save users money by helping
            them find accommodations within their budget and avoid unnecessary
            expenses associated with traditional house-hunting methods
          </p>
        </p>

        <img
          src="public/third.jpg"
          style={{
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            marginTop: "40px",
            marginBottom: "40px",

            borderRadius: "0.3rem",
          }}
        />*/}
      </div>
    </div>
  );
}

export default Welcom;
