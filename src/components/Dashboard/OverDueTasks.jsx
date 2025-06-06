import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../UI/Card";
import Badge from "../UI/Badge";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../UI/Button";
import { overdueTasksData } from "../../assets/MockData/Data";
import { BsPersonPlus, BsThreeDots } from "react-icons/bs";
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

const OverDueTasks = () => {
  return (
    <Card className="col-span-6 md:col-span-3  h-72 flex flex-col relative overflow-hidden">
      <CardHeader className="p-3  border-b flex-shrink-0 bg-white">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm font-semibold  flex gap-2">
              Overdue Task <Badge className={'font-normal'}> 10</Badge>
            </CardTitle>
            <div className="flex items-start justify-start gap-2">
              

              <Button variant="ghost" size="icon" className="h-7 w-7">
                <RxExternalLink className="sm:w-5 w-4   sm:h-5 h-4  " />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <BsThreeDots className="sm:w-5 w-4   sm:h-5 h-4  " />
              </Button>
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
                <TableHead className="text-left  ">Assigned To</TableHead>
                <TableHead className="text-center  ">Status</TableHead>
                <TableHead className="text-center  ">DueDate</TableHead>
                <TableHead className="text-center  ">Reassign</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {overdueTasksData.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell className="text-left ">{employee.name}</TableCell>
                  <TableCell className="text-left ">
                    {employee.assignedTo}
                  </TableCell>
                  <TableCell className="text-center ">
                    <Badge
                      color="error"
                      className=" border-error/10 w-fit p-1 rounded-md border"
                    >
                      {employee.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center ">
                    {employee.dueDate}
                  </TableCell>
                  <TableCell className="text-center ">
                    <BsPersonPlus className="w-4 h-4 mx-auto cursor-pointer content-box  text-center bg-hover hover:shadow" />
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

export default OverDueTasks;
