import React, { useState } from "react";

const CheckBox = ({ label, checked = false, onChange ,...rest }) => {
  return (
    <label className="flex items-center cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
          {...rest}
        />
        <div
          className={`
            w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ease-in-out
            ${
              checked
                ? "bg-primary border-primary shadow-lg"
                : "bg-white border-gray-300 group-hover:border-green-400 "
            }
          `}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <span className="ml-3 text-gray-700 select-none font-medium">
          {label}
        </span>
      )}
    </label>
  );
};
export default CheckBox;
