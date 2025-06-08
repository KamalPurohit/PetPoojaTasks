import React from "react";
import LogoFull from "../../assets/logoFull.svg";
import Logo from "../../assets/Logo.svg";
import BreadCrumbs from "../UI/BreadCrumbs";
import { bell, calendar, taskCheck } from "../../assets/SidebarIcons";
import { IoIosArrowDown } from "react-icons/io";
import { LuBuilding } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { Button } from "../UI/Button";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <div className="w-full border-b border-gray-300 p-3  flex gap-4  items-center fixed top-0 z-30 bg-white right-0">
      <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
        <HiMenuAlt1 className="w-6 h-6 text-primary sm:hidden"/>

      </button>
      <div className="flex w-44 max-sm:w-fit	">
        <img src={LogoFull} className="sm:h-8 h-6" />
      </div>
      <div className=" flex items-center  justify-between max-md:justify-end flex-1 px-4 max-md:p-0">
        <div className="max-md:hidden">
          <BreadCrumbs />
        </div>
        <div className="flex gap-3 items-center ">
          <div className="flex gap-3 items-center ">
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <img src={taskCheck} className="w-5 h-5 " />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <img src={bell} className="w-5 h-5 " />
            </Button>

            <div className="px-3 p-2 text-xs bg-hover rounded-md w-[141px] flex items-center justify-between max-md:hidden">
              <span>01-05-2025</span>
              <img src={calendar} alt="calendar" className="w-4 h-4" />
            </div>

            <div className="px-3 p-2 text-xs bg-hover rounded-md w-[166px] flex items-center justify-between gap-4 cursor-pointer max-md:hidden">
              <div className="flex items-center gap-2">
                <LuBuilding className="w-4 h-4 text-[#979797]" />

                <span className="text-nowrap truncate">Outlet Name</span>
              </div>
              <IoIosArrowDown className="w-4 h-4 text-[#979797]" />
            </div>
          </div>
          <div className="h-8 border border-hover  max-md:hidden"></div>
          <button className=" rounded-md flex gap-1 items-center text-xs px-3 p-2    bg-primary text-white hover:bg-dark">
            <GoPlus className="w-4 h-4" />
            <span className="hidden md:flex">Create</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
