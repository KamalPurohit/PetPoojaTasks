import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../UI/Card";
import Badge from "../UI/Badge";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../UI/Button";
import { personalNotes } from "../../assets/MockData/Data";
import { BsThreeDots } from "react-icons/bs";
import TaskCard from "./TaskCard";
import { RxExternalLink } from "react-icons/rx";
import { IoCheckmarkCircle } from "react-icons/io5";

const PersonalNotepad = () => {
  const [data, setData] = useState(personalNotes);
  const [editNotePad, setEditNotePad] = useState([]);
  return (
    <Card className="  col-span-3 max-md:col-span-6 flex-1  h-72 flex flex-col relative overflow-hidden">
      <CardHeader className="p-3  border-b flex flex-row items-start justify-between flex-shrink-0 bg-white">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-semibold text-[#212121]">
                Personal Notepad{" "}
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
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col scrollable p-4 gap-2 ">
        {data?.map((note, index) => {
          let isEditMode = editNotePad.includes(index);
          return (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-md hover:bg-neutralLight ${
                isEditMode && `bg-neutralLight`
              }`}
              onClick={() => {
                setEditNotePad((prev) => {
                  if (prev.includes(index)) {
                    return prev.filter((i) => i !== index);
                  } else {
                    return [...prev, index];
                  }
                });
              }}
            >
              <button
                htmlFor={index}
                className=" cursor-pointer   border-black border rounded-full p-0 "
                onClick={(e) => {
                  e.stopPropagation();
                  setData((prev) =>
                    prev.map((item, i) =>
                      i === index
                        ? { ...item, completed: !item.completed }
                        : item
                    )
                  );
                }}
              >
                <IoCheckmarkCircle
                  className={`min-w-5 min-h-5 aspect-square opacity-0 hover:opacity-100 ${
                    note?.completed && `opacity-100`
                  } text-light bg-primary rounded-full  `}
                />
              </button>
              <div className="flex flex-col w-full gap-1">
                {!isEditMode ? (
                  <h4 className="font-medium text-xs text-[#212121]">
                    {note?.title}
                  </h4>
                ) : (
                  <input
                    type="text"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm bg-white border-border rounded-md border p-2 mb-2 w-full"
                    value={note?.title}
                  />
                )}
                {!isEditMode ? (
                  <p className="text-xs text-[#646464] tracking-[.25px]">
                    {note?.description}
                  </p>
                ) : (
                  <textarea
                    rows={2}
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm bg-white border-border rounded-md border p-2  w-full text-gray-500"
                    value={note?.description}
                  />
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PersonalNotepad;
