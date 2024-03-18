import React from "react";
import SideBar from "./Components/SideNavbar/SideBar";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" min-w-screen max-w-max h-screen overscroll-scroll">
      <TopNavbar />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
