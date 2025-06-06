import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../UI/Card";
import Badge from "../UI/Badge";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../UI/Button";
import { workAllocatedTasks } from "../../assets/MockData/Data";
import { BsThreeDots } from "react-icons/bs";
import TaskCard from "./TaskCard";

const WorkAllocated = () => {
  return (
    <Card className="col-span-6 h-72 flex flex-col relative overflow-hidden">
      <CardHeader className="p-3 pb-1.5 border-b flex flex-row items-start justify-between flex-shrink-0 bg-white">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-semibold text-[#212121]">
                Work Allocated
              </CardTitle>
              <div className="flex items-start justify-start gap-2">
                <div className="px-3 p-2 text-xs bg-hover rounded-md flex items-center justify-between gap-4 cursor-pointer max-md:hidden">
                  <div className="flex items-center gap-2">
                    <span className="text-nowrap truncate">
                      Select Employee
                    </span>
                  </div>
                  <IoIosArrowDown className="w-4 h-4 text-[#979797]" />
                </div>

                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <BsThreeDots className="sm:w-5 w-4   sm:h-5 h-4  " />
                </Button>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex gap-5 w-full ml-2">
            <div className="tab text-xs selected-tab flex gap-1 items-center cursor-pointer">
              Tasks <Badge color={"success"}>10</Badge>
            </div>
            <div className="text-xs flex gap-1 items-center cursor-pointer tab">
              Issues <Badge>10</Badge>
            </div>
            <div className="text-xs flex gap-1 items-center cursor-pointer tab">
              Workflow <Badge>10</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 scrollable p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workAllocatedTasks?.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkAllocated;
