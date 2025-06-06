import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import WidgetGrid from "../components/Dashboard/WidgetGrid";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 py-6 ">
      <div className="flex sm:px-6 px-3  text-lg justify-between items-center">
        <span className="font-semibold max-sm:text-md">
          Good Evening ! Ajay
        </span>
        <button className="gap-1 px-3 flex item-center p-2 rounded-md border-gray-200 border hover:bg-hover ">
          <LuLayoutDashboard className="w-4 h-4" />
          <span className="text-xs font-medium">Add Widget</span>
        </button>
      </div>

      <WidgetGrid />
    </div>
  );
};

export default Dashboard;
