import React from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen relative overflow-y-hidden ">
      <Navbar />
      <div className="w-full flex mt-14 ">
        <Sidebar />
        <div className="w-full  max-sm:ml-16  overflow-y-scroll  scrollable layout">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
