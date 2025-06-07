import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef();

  //code to handle click outside to close sidebar only on small screens
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (window.innerWidth < 768 && isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-full h-screen relative overflow-y-hidden   ">
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <div className="w-full flex mt-14 ">
        <Sidebar
          ref={sidebarRef}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="w-full   overflow-y-scroll  scrollable layout ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
