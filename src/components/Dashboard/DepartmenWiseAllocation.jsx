import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../UI/Card";
import { Button } from "../UI/Button";
import { RxExternalLink } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import Badge from "../UI/Badge";

const DepartmenWiseAllocation = () => {
  const data = [
    { department: "HR", tasks: 8, overdueTasks: 2 },
    { department: "IT", tasks: 25, overdueTasks: 10 },
    { department: "Finance", tasks: 35, overdueTasks: 25 },
    { department: "Marketing", tasks: 70, overdueTasks: 22 },
    { department: "Sales", tasks: 68, overdueTasks: 24 },
    { department: "Operations", tasks: 66, overdueTasks: 26 },
    { department: "Legal", tasks: 69, overdueTasks: 23 },
    { department: "Support", tasks: 62, overdueTasks: 18 },
  ];

  const chartData = data.map((item) => ({
    department: item.department,
    tasks: item.tasks,
    overdueTasks: item.overdueTasks,
    total: item.tasks + item.overdueTasks,
  }));

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const totalTasks = data.tasks + data.overdueTasks;
      const tasksPercent = Math.round((data.tasks / totalTasks) * 100);
      const overduePercent = Math.round((data.overdueTasks / totalTasks) * 100);

      return (
        <div className="bg-gray-500 text-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold text-sm mb-2">{label}</p>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span>•</span>
              <span>
                Assigned Tasks: {tasksPercent}% ({data.tasks})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>•</span>
              <span>
                Overdue Tasks: {overduePercent}% ({data.overdueTasks})
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-3 max-md:col-span-6 h-72 flex flex-col">
      <CardHeader className="p-3 border-b pb-1.5 flex flex-row items-start justify-between flex-shrink-0 bg-white">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-semibold text-[#212121]">
                Department Wise Allocation
              </CardTitle>
              <div className="flex items-start justify-start gap-2">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <BsThreeDots className="sm:w-5 w-4   sm:h-5 h-4  " />
                </Button>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex gap-5 w-full ml-2">
            <div className="tab text-xs selected-tab flex gap-1 items-center cursor-pointer">
              Tasks
            </div>
            <div className="text-xs flex gap-1 items-center cursor-pointer tab">
              Issues
            </div>
            <div className="text-xs flex gap-1 items-center cursor-pointer tab">
              Workflow
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-3 flex flex-col overflow-hidden">
        {/* Legend */}
        <div className="flex items-center justify-end gap-4 mb-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#99CFB5]"></div>
            <span className="text-xs text-gray-600">Tasks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFDD9D]"></div>
            <span className="text-xs text-gray-600">Overdue Tasks</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap="15%">
              <XAxis
                dataKey="department"
                axisLine={{ stroke: "#9CA3AF", strokeWidth: 1 }}
                tickLine={{ stroke: "#9CA3AF", strokeWidth: 0.5 }}
                angle={-45}
                textAnchor="end"
                tick={false}
                height={2}
                interval={0}
              />
              <YAxis
                domain={[0, "dataMax"]}
                axisLine={{ stroke: "#9CA3AF", strokeWidth: 1 }}
                tickLine={{ stroke: "#9CA3AF", strokeWidth: 0.5 }}
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
                tickFormatter={(value) => `${Math.round(value)}`}
                width={30}
              />

              {/* Custom Tooltip */}
              <Tooltip
                content={<CustomTooltip />}
                cursor={false} // Remove background cursor
                position={{ y: 0 }}
              />

              {/* Tasks Bar */}
              <Bar
                dataKey="tasks"
                stackId="tasks"
                fill="#99CFB5"
                barSize={40}
              />

              {/* Overdue Tasks Bar */}
              <Bar
                dataKey="overdueTasks"
                stackId="tasks"
                fill="#FFDD9D"
                radius={[10, 10, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Department Label */}
        <div className="text-center  flex-shrink-0">
          <span className="text-gray-500 text-xs font-medium">Departments</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmenWiseAllocation;
