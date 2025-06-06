import React from "react";
import { cn, getColorClasses } from "../../utils/utils";

const Badge = ({ color, children, className }) => {
  const colors = getColorClasses(color);
  return (
    <span
      className={cn(
        `${colors?.bg} ${colors?.text} w-5 h-5 text-center text-xs flex items-center  justify-center rounded-full `,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
