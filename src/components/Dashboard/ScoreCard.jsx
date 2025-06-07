import React from "react";
import { Card, CardContent } from "../UI/Card";
import Badge from "../UI/Badge";

const ScoreCard = ({ icon, title, stats = [] }) => {
  return (
    <Card className=" col-span-6 sm:col-span-3 md:col-span-2 h-fit ">
      <CardContent className="p-3.5 space-y-2.5 ">
        <div className="flex items-center gap-3 ">
          <div className="w-8 h-8 p-1 bg-hover rounded-lg flex items-center justify-center">
            <img src={icon} alt={title} className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm text-gray-900 flex-grow">
            {title}
          </h3>
        </div>
        <div className="flex  gap-4 text-sm flex-wrap">
          {stats?.map((stat, index) => {
            return (
              <div className="flex  items-center gap-1" key={index}>
                <span className=" text-xs truncate ma text-neutral">
                  {stat?.name}
                </span>
                <Badge color={stat?.color}>{stat?.count}</Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
