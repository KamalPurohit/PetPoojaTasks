import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../UI/Card";
import Badge from "../UI/Badge";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../UI/Button";
import { employeeData, workAllocatedTasks } from "../../assets/MockData/Data";
import { BsThreeDots } from "react-icons/bs";
import TaskCard from "./TaskCard";
import { RxExternalLink } from "react-icons/rx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../UI/Table";

const EmployeeWise = () => {
  return (
    <Card className="col-span-6 h-72 flex flex-col relative overflow-hidden">
      <CardHeader className="p-3 pb-1.5 border-b flex-shrink-0 bg-white">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm font-semibold ">
              Employee Wise Progress
            </CardTitle>
            <div className="flex items-start justify-start gap-2">
              <div className="px-3 p-2 text-xs bg-hover rounded-md flex items-center justify-between gap-4 cursor-pointer max-md:hidden">
                <div className="flex items-center gap-2">
                  <span className="text-nowrap truncate">Select Employee</span>
                </div>
                <IoIosArrowDown className="w-4 h-4 text-[#979797]" />
              </div>

              <Button variant="ghost" size="icon" className="h-7 w-7">
                <RxExternalLink className="sm:w-5 w-4   sm:h-5 h-4  " />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <BsThreeDots className="sm:w-5 w-4   sm:h-5 h-4  " />
              </Button>
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
      <CardContent className="flex-1 overflow-hidden flex  p-0 max-h-96">
        <div className="flex flex-col overflow-y-auto w-full">
          <Table className="w-full text-xs  ">
            <TableHeader>
              <TableRow className="bg-neutralLight sticky top-0 z-10">
                <TableHead className="text-left  ">Name</TableHead>
                <TableHead className="text-left  ">
                  Department
                </TableHead>
                <TableHead className="text-center  ">
                  Assigned
                </TableHead>
                <TableHead className="text-center  ">
                  Ongoing
                </TableHead>
                <TableHead className="text-center  ">
                  Overdue
                </TableHead>
                <TableHead className="text-center  ">
                  Completed
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeData.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell className="text-left ">{employee.name}</TableCell>
                  <TableCell className="text-left ">
                    {employee.department}
                  </TableCell>
                  <TableCell className="text-center ">
                    {employee.assigned}
                  </TableCell>
                  <TableCell className="text-center ">
                    {employee.ongoing}
                  </TableCell>
                  <TableCell className="text-center ">
                    {employee.overdue}
                  </TableCell>
                  <TableCell className="text-center ">
                    {employee.completed}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeWise;
