import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import authservice from "../../Appwrite/appwrite";
import auth, { logout } from "../../Store/auth";

function SideBar() {
  const color = useSelector((state) => state.colors.userdata);
  const loginstatus = useSelector((state) => state.auth.authstatus);
  const navigate = useNavigate();
  const location = useLocation();
  const [activestatus, setactivestatus] = useState(null);

  const useraccess = async function useraccesss() {
    await authservice.getcurrentuser().then((res) => {
      setactivestatus(res.status);
    });
  };

  if (activestatus == null) useraccess();

  const navigatearray = [
    {
      name: "Welcome",
      Navigate: "/",
      logo: null,
      status: activestatus != null ? !activestatus || null : null,
    },
    {
      name: "Home",
      Navigate: "/home",
      logo: <i class="fa-solid fa-house"></i>,
      status: activestatus != null ? activestatus : null,
    },
    {
      name: "Profile",
      Navigate: "/profile",
      logo: <i class="fa-solid fa-user"></i>,
      status: activestatus != null ? activestatus : null,
    },
    {
      name: "Search",
      Navigate: "/search",
      logo: <i class="fas fa-search"></i>,
      status: activestatus != null ? activestatus : null,
    },
    {
      name: "Rent",
      Navigate: "/rent",
      logo: <i class="fa fa-building-o" aria-hidden="true"></i>,
      status: activestatus != null ? activestatus : null,
    },
    {
      name: "Setting",
      Navigate: "/setting",
      logo: <i class="fa-solid fa-gear"></i>,
      status: activestatus != null ? activestatus : null,
    },
    {
      name: "Logout",
      logo: <i class="fas fa-sign-out"></i>,
      status: activestatus != null ? activestatus : null,
    },
    {
      name: loginstatus ? "" : "Login",
      Navigate: "/login",
      logo: <i class="fas fa-sign-in"></i>,
      status: activestatus != null ? !activestatus || null : null,
    },
    {
      name: "Singup",
      Navigate: "/singup",
      logo: null,
      status: activestatus != null ? !activestatus || null : null,
    },
  ];

  async function Logout() {
    await authservice.Logout();
    alert("Successfull logout!!");
  }

  return (
    <div
      className={`w-full main  h-auto ${color.sidemainTailwind} 
        flex items-center absolute top-16 z-20  justify-center`}
    >
      <ul
        id="ulforsidebar"
        style={{ backgroundColor: `${color.sidemainTailwind}` }}
      >
        {navigatearray.map((item, index) => {
          return item.status == (true || null) ? (
            <NavLink
              key={index}
              className={`liforsidebar ${color.HoverTailwind} ${
                color.MaincolorTailwind == "bg-black" ? "hover:text-white" : ""
              } ${
                location.pathname == item.Navigate
                  ? `active ${color.MaincolorTailwind} text-white ${color.BorderTailwind}`
                  : ""
              }`}
              to={item.Navigate}
            >
              <span className={`h-full w-auto mr-2`}>{item.logo}</span>
              {item.name}
            </NavLink>
          ) : null;
        })}
      </ul>
    </div>
    // ) : (
    //   <div
    //     className={`w-full main  h-auto ${color.sidemainTailwind}
    //      flex items-top  absolute top-16   justify-center`}
    //   >
    //     <ul
    //       id="ulforsidebar"
    //       style={{ backgroundColor: `${color.sidemainTailwind}` }}
    //     >
    //       {navigatearray.map((item, index) => {
    //         return item.authstatus == true ? (
    //           <NavLink
    //             onClick={() => (item.name == "Logout" ? Logout() : "")}
    //             key={index}
    //             className={`liforsidebar ${color.HoverTailwind} ${
    //               color.MaincolorTailwind == "bg-black" ? "hover:text-white" : ""
    //             } ${
    //               location.pathname == item.Navigate
    //                 ? `active ${color.MaincolorTailwind} text-white ${color.BorderTailwind}`
    //                 : ""
    //             }`}
    //             to={item.Navigate}
    //           >
    //             {item.name}
    //             {location.pathname == item.Navigate ? (
    //               <i class="fa-solid fa-arrow-right"></i>
    //             ) : (
    //               ""
    //             )}
    //           </NavLink>
    //         ) : null;
    //       })}
    //     </ul>
    //   </div>
  );
}

export default SideBar;
