import React from "react";
import { cn } from "../../utils/utils";
import { createPortal } from "react-dom";

const Modal = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={
      "flex flex-col items-center justify-center  overflow-hidden   absolute z-50  top-0 left-0 bg-black/50 w-full h-full"
    }
    {...props}
  >
    <div
      className={cn(
        "bg-white rounded-xl flex flex-col min-w-72 min-h-72 ",
        className
      )}
    >
      {children}
    </div>
  </div>
));
const ModalHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-between p-4 items-center text-sm font-medium rounded-t-xl",
      className
    )}
    {...props}
  />
));
const ModalContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col w-full scrollable flex-1", className)}
    {...props}
  />
));

const ModalFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex gap-4",
      className
    )}
    {...props}
  />
));

export { Modal, ModalHeader, ModalContent,ModalFooter };
