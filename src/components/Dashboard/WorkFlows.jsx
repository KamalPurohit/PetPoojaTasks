import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../UI/Card";
import Badge from "../UI/Badge";
import { Button } from "../UI/Button";
import { workflowsData } from "../../assets/MockData/Data";
import { BsPersonPlus, BsThreeDots } from "react-icons/bs";

import { RxExternalLink } from "react-icons/rx";

const WorkFlows = () => {
  return (
    <Card className="col-span-6 md:col-span-3  h-72 flex flex-col relative overflow-hidden">
      <CardHeader>
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm font-semibold  flex gap-2">
              Workflows
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
        <div className="grid grid-cols-4 overflow-y-auto w-full gap-3 p-3 ">
          {workflowsData.map((workflow, index) => (
            <div
              key={index}
              className="bg-neutralLight col-span-4 lg:col-span-2  rounded-md p-3 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-xs text-[#212121]">
                  {workflow.title}
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-neutral">
                    Responses
                  </span>
                  <Badge variant="outline" className={'bg-white'}>{workflow.responses}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-neutral">Tasks</span>
                  <Badge variant="outline" className={'bg-white'}>{workflow.tasks}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkFlows;
