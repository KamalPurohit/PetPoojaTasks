import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import WidgetGrid from "../components/Dashboard/WidgetGrid";
import { Modal, ModalContent, ModalHeader } from "../components/UI/Modal";
import { IoCloseCircle } from "react-icons/io5";
import WidgetModal from "../components/Dashboard/WidgetModal";

const Dashboard = () => {
  const [showWidgetModal, setShowWidgetModal] = useState(false);

  const [widgetList, setWidgetList] = useState([
    { label: "Work Allocated", selected: true, id: "workAllocated" },
    { label: "Employee wise progress", selected: false, id: "employeeWise" },

    {
      label: "Department wise allocation",
      selected: false,
      id: "departmentWise",
    },
    { label: "Overdue tasks", selected: false, id: "overdueTasks" },
    { label: "Workflows", selected: false, id: "workflows" },
    { label: "Personal Notepad", selected: false, id: "personalNotepad" },
  ]);
  return (
    <div className="flex flex-col gap-6 py-6 flex-1">
      {showWidgetModal && (
        <WidgetModal
          widgetList={widgetList}
          setWidgetList={setWidgetList}
          onClose={() => setShowWidgetModal(false)}
        />
      )}
      <div className="flex sm:px-6 px-3  text-lg justify-between items-center">
        <span className="font-semibold max-sm:text-md">
          Good Evening ! Ajay
        </span>
        <button
          className="gap-1 px-3 flex item-center p-2 rounded-md border-gray-200 border hover:bg-hover "
          onClick={() => setShowWidgetModal(true)}
        >
          <LuLayoutDashboard className="w-4 h-4" />
          <span className="text-xs font-medium">Add Widget</span>
        </button>
      </div>

      <WidgetGrid
        widgetList={widgetList}
        setWidgetList={setWidgetList}
        setShowWidgetModal={setShowWidgetModal}
      />
    </div>
  );
};

export default Dashboard;
