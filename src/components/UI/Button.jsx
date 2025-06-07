import * as React from "react";

import { cn } from "../../utils/utils";

const Button = React.forwardRef((props, ref) => {
  const { className, variant, size, children, ...rest } = props;
  const buttonVariants = ({ variant = "default", size = "md" }) => {
    return cn(
      "inline-flex items-center justify-center rounded-md font-medium ",
      variant === "default" && "bg-primary text-white hover:bg-dark",
      variant === "ghost" && "bg-transparent hover:bg-hover text-neutral hover:text-black ",
      variant === "outline" &&
        "border border-border bg-white text-neutral hover:bg-hover text-black",
      size === "sm" && "h-8 px-3 text-xs",
      size === "md" && "h-10 px-4 text-sm",
      size === "lg" && "h-12 px-5 text-base",
      className
    );
  };

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

export { Button };
