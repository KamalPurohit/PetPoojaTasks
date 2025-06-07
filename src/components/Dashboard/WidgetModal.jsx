import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalFooter, ModalHeader } from "../UI/Modal";
import { IoCloseCircle } from "react-icons/io5";
import CheckBox from "../UI/CheckBox";
import { Button } from "../UI/Button";

const WidgetModal = ({ onClose, widgetList, setWidgetList }) => {
  const [selectedWidgets, setSelectedWidgets] = useState(widgetList);

  return (
    <Modal className="">
      <ModalHeader className=" ">
        <span>Select Widgets</span>
        <IoCloseCircle
          className="w-6 h-6 text-neutral cursor-pointer hover:text-primary transition-colors"
          onClick={onClose}
        />
      </ModalHeader>
      <ModalContent className=" gap-8 items-center justify-center w-full overflow-y-auto px-4">
        <div className="grid grid-cols-4 gap-4 py-8 ">
          {selectedWidgets?.map((widget, idx) => {
            return (
              <label
                key={idx}
                htmlFor={idx}
                className="col-span-4 sm:col-span-2 p-3  bg-gray-100 gap-4 rounded-md cursor-pointer hover:bg-gray-200 transition-colors text-sm flex justify-between"
              >
                <span> {widget?.label}</span>
                <CheckBox
                  id={idx}
                  checked={widget?.selected}
                  onChange={(e) => {
                    setSelectedWidgets((prev) =>
                      prev.map((w, index) =>
                        index === idx ? { ...w, selected: e.target.checked } : w
                      )
                    );
                  }}
                />
              </label>
            );
          })}
        </div>
      </ModalContent>
      <ModalFooter className="grid grid-cols-2 gap-4 p-4">
        <Button
          className="col-span-1"
          variant="outline"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          className="col-span-1"
          onClick={() => {
            setWidgetList(selectedWidgets);
            onClose();
          }}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WidgetModal;
