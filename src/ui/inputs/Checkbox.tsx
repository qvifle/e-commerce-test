import { cn } from "@/lib/utils/cn";
import React, { FC, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number | undefined;
}

const Checkbox: FC<CheckboxProps> = ({
  children,
  value,
  className,
  ...rest
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <input value={value} type="checkbox" {...rest} />
      <label htmlFor="Electronics">{children}</label>
    </div>
  );
};

export default Checkbox;
