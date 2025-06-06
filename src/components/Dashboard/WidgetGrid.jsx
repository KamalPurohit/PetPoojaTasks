import React from "react";
import { issues, Task } from "../../assets/SidebarIcons";
import ScoreCard from "./ScoreCard";
import { dashboardStats, workAllocatedTasks } from "../../assets/MockData/Data";
import { Card, CardContent, CardHeader, CardTitle } from "../UI/Card";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../UI/Button";
import Badge from "../UI/Badge";
import TaskCard from "./TaskCard";
import WorkAllocated from "./WorkAllocated";
import EmployeeWise from "./EmployeeWise";
import PersonalNotepad from "./PersonalNotepad";
import DepartmenWiseAllocation from "./DepartmenWiseAllocation";
import OverDueTasks from "./OverDueTasks";
import WorkFlows from "./WorkFlows";

const WidgetGrid = () => {
  return (
    <div className="grid grid-cols-6 gap-6 mb-8 px-4 sm:px-6   ">
      {/* Top Score Cards */}
      {dashboardStats?.map((stat, index) => (
        <ScoreCard
          index={index}
          key={index}
          icon={stat?.icon}
          title={stat?.title}
          stats={stat?.stats}
        />
      ))}
      <WorkAllocated />
      <EmployeeWise />
      <PersonalNotepad />
      <DepartmenWiseAllocation />
      <OverDueTasks />
      <WorkFlows />
    </div>
  );
};

export default WidgetGrid;
