import React, { useState } from "react";
import { routesData } from "../../assets/MockData/Data";
import { logout } from "../../assets/SidebarIcons";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const user = {
    name: "Ajay",
    desination: "Software Engineer",
  };
  const nav = useNavigate();
  return (
    <div
      className={` sticky top-14 border-r border-gray-300 select-none sidebar  max-sm:absolute max-sm:top-14 max-sm:shadow-md bg-white z-20  w-fit p-3 flex flex-col gap-1  group justify-between transition-all duration-300 `}
    >
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="w-5 h-5 absolute top-5 -right-3 z-10 shadow-md bg-white sm:invisible sm:group-hover:visible flex rounded-full  items-center justify-center hover:bg-primary hover:text-white"
      >
        <MdOutlineKeyboardArrowLeft
          className={`w-4 h-4 ${
            !isSidebarOpen && `rotate-180`
          } transition-transform duration-300`}
        />
      </button>
      <div className="w-fit flex flex-col gap-[6px]">
        {routesData?.map((route, index) => {
          let isSelected = route?.path == pathname;
          return (
            <div
              key={index}
              className={`flex items-center gap-2 p-2 ${
                isSidebarOpen ? `w-44` : `w-9`
              } transition-all cursor-pointer rounded-md text-black  duration-300 ${
                isSelected ? "bg-light text-primary" : " hover:bg-hover "
              }`}
              onClick={() => nav(route?.path)}
            >
              <img
                src={route?.icon}
                alt={route?.name}
                className="max-h-5 max-w-5"
              />
              {isSidebarOpen && (
                <span className="text-xs truncate text-nowrap">
                  {route?.name}
                </span>
              )}
            </div>
          );
        })}
        <div
          key={"logout"}
          className={`flex items-center gap-2 p-2 ${
            isSidebarOpen ? `w-44` : `w-fit`
          } cursor-pointer rounded-md text-black hover:bg-hover`}
        >
          <img src={logout} alt={"logout"} className="max-h-5 max-w-5" />
          {isSidebarOpen && <span className="text-xs ">Log Out</span>}
        </div>
      </div>
      <div
        className={`${
          isSidebarOpen && ` bg-hover p-2 `
        } rounded-md flex gap-2 items-center cursor-pointer transition-all duration-300 hover:bg-light`}
      >
        <div className="rounded-full text-sm bg-primary text-white capitalize flex justify-center p-2 aspect-square items-center w-8 h-8">
          {user?.name?.[0]}
        </div>
        <div
          className={`${isSidebarOpen ? "flex" : `hidden`} flex-col  gap-1 `}
        >
          <span className="text-sm ">{user?.name}</span>
          <span className="text-xs text-gray-500">{user?.desination}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
