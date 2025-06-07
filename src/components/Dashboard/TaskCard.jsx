import React from "react";
import Badge from "../UI/Badge";
import { calendar, workflow } from "../../assets/SidebarIcons";
import { GoClock } from "react-icons/go";

const TaskCard = ({ task }) => {
  return (
    <div className="flex-1 bg-neutralLight hover:shadow-md cursor-pointer text-neutral lg:cols-span-1 rounded-md p-3 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-0.5 text-neutralsub-content text-xs">
            <img
              className="w-4 h-4"
              alt="ID"
              src="https://c.animaapp.com/mbjn5sgkKz1Y1O/img/chevron-up.svg"
            />
            <span>ID {task.id}</span>
          </div>
          <h4 className="font-medium text-xs text-[#212121]">{task.title}</h4>
        </div>
        <div className="flex items-center gap-0.5 text-neutralsub-content text-xs">
          <img
            className="w-4 h-4"
            alt="Comments"
            src="https://c.animaapp.com/mbjn5sgkKz1Y1O/img/message-circle-02.svg"
          />
          <span>{task.comments}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5 text-neutralsub-content text-xs">
              <img className="w-4 h-4" alt="Date" src={calendar} />
              <span>{task.date}</span>
            </div>
            <div className="flex items-center gap-0.5 text-neutralsub-content text-xs">
              <GoClock className="w-4 h-4" />
              <span>{task.time}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="bg-white rounded p-0.5">
            <img className="w-4 h-4" alt="Dataflow" src={workflow} />
          </div>
          <div className="flex items-center justify-between flex-1">
            <Badge
              color="warning"
              className=" border-warning/10 w-fit p-1 rounded-md border"
            >
              {task.status}
            </Badge>
            <Badge
              variant="outline"
              className="bg-white text-[#212121] w-fit p-1 rounded-md"
            >
              {task.category}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
