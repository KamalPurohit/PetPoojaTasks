import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const sidebarRef = useRef();
  const menuRef = useRef();

  //code to handle click outside to close sidebar only on small screens
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
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
  }, [sidebarRef?.current]);

  return (
    <div className="w-full h-screen relative overflow-y-hidden   ">
      <Navbar setIsSidebarOpen={setIsSidebarOpen} ref={menuRef} />
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
