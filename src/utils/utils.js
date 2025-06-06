import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

export const getColorClasses = (colorName) => {
  const colorMap = {
    warning: {
      text: "text-warning",
      bg: "bg-warningBg",
    },
    error: {
      text: "text-error",
      bg: "bg-errorBg",
    },
    success: {
      text: "text-success",
      bg: "bg-successBg",
    },
    scheduled: {
      text: "text-scheduled",
      bg: "bg-scheduledBg",
    },
    primary: {
      text: "text-black",
      bg: "bg-hover",
    },
  };

  // Return the color classes or fallback to primary
  return colorMap[colorName] || colorMap.primary;
};
