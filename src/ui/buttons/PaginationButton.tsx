import { cn } from "@/lib/utils/cn";
import React, { ButtonHTMLAttributes, FC } from "react";

interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  isActive,
  children,
  className,
  ...rest
}) => {
  return (
    <li
      className={cn(
        "h-6 w-6  rounded-md flex items-center justify-start",
        isActive ? "bg-gray-700 text-gray-50" : "bg-gray-200",
        className
      )}>
      <button className="w-full h-full text-sm  text-center" {...rest}>
        {children}
      </button>
    </li>
  );
};

export default PaginationButton;
