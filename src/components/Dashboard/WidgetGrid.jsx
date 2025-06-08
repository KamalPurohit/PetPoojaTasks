import ScoreCard from "./ScoreCard";
import { dashboardStats, workAllocatedTasks } from "../../assets/MockData/Data";
import EmptyWidget from "../../assets/EmptyWidget.png";
import WorkAllocated from "./WorkAllocated";
import EmployeeWise from "./EmployeeWise";
import PersonalNotepad from "./PersonalNotepad";
import DepartmenWiseAllocation from "./DepartmenWiseAllocation";
import OverDueTasks from "./OverDueTasks";
import WorkFlows from "./WorkFlows";
import { Button } from "../UI/Button";
import { LuLayoutDashboard } from "react-icons/lu";

const WidgetGrid = ({ widgetList, setShowWidgetModal }) => {
  const componentData = {
    workAllocated: <WorkAllocated key={"WorkAllocate"} />,
    employeeWise: <EmployeeWise key={"EmployeeWis"} />,
    departmentWise: <DepartmenWiseAllocation key={"DepartmenWiseAllocatio"} />,
    overdueTasks: <OverDueTasks key={"OverDueTask"} />,
    workflows: <WorkFlows key={"WorkFlows"} />,
    personalNotepad: <PersonalNotepad key={"PersonalNotepad"} />,
  };
  const hasWidget = widgetList?.some((widget) => widget?.selected);
  return (
    <div className="grid grid-cols-6 gap-6 mb-8 px-4 sm:px-6 flex-1  ">
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

      {hasWidget ? (
        widgetList?.map((widget, idx) => {
          if (!widget?.selected) return null; // Skip if widget is not selected
          return componentData[widget?.id];
        })
      ) : (
        <div className="w-full mt-4 col-span-6 h-full items-center justify-center flex flex-col gap-4">
          <img src={EmptyWidget} alt="No Widget Img" className="w-60 " />
          <div className="flex flex-col gap-2 text-sm items-center">
            <span className="font-semibold ">No any Widgets Added</span>{" "}
            <span className="text-neutral">
              Add widgets to get all data in one place!
            </span>
          </div>
          <button
            className="gap-1 px-3 flex item-center p-2 rounded-md border-black border hover:bg-hover "
            onClick={() => setShowWidgetModal(true)}
          >
            <LuLayoutDashboard className="w-4 h-4" />
            <span className="text-xs font-medium">Add Widget</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WidgetGrid;
