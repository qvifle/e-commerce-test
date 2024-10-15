import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: "default" | "dark" | "error";
}

const button = cva(["font-semibold", "border", "rounded"], {
  variants: {
    intent: {
      default: [
        "bg-gray-200",
        "border-gray-300",
        "hover:bg-gray-300",
        "text-gray-950",
      ],
      dark: [
        "bg-gray-800",
        "border-gray-700",
        "hover:bg-gray-900",
        "text-gray-100",
      ],
      error: [
        "bg-red-700",
        "border-red-700",
        "hover:bg-red-900",
        "text-gray-100",
      ],
    },
  },

  defaultVariants: {
    intent: "default",
  },
});

const Button: FC<ButtonProps> = ({
  children,
  icon,
  variant,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        !!icon && !children
          ? "w-8 h-8 flex items-center justify-center p-1"
          : "flex items-center gap-2 px-2 py-1",
        "bg-gray-200 rounded-md font-medium border border-gray-300 hover:bg-gray-300 duration-100 active:animate-[bump_0.3s_ease-in]",
        button({ intent: variant }),
        className
      )}
      {...rest}>
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
