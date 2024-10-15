"use client";
import React, { HTMLAttributes } from "react";
import Portal from "./Portal";
import { cn } from "@/lib/utils/cn";
// import ScrollLock from "./ScrollLock";

export interface DrawerProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  toggle: () => void;
  side?: "left" | "right";
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  toggle,
  children,
  side = "right",
  className,
  ...rest
}) => {
  const width = 500;

  const getPosition = () => {
    if (side === "left") {
      return { left: isOpen ? 0 : `-${width}px` };
    }

    return { right: isOpen ? 0 : `-${width}px` };
  };

  return (
    <Portal selector="portal">
      {/* {isOpen && <ScrollLock />} */}
      <div
        onClick={toggle}
        className={cn(
          isOpen ? "block" : "hidden",
          "fixed top-0 left-0 w-screen h-screen max-h-screen overflow-hidden z-[40] bg-gray-950 opacity-50"
        )}
        {...rest}></div>

      <aside
        id="drawer"
        style={getPosition()}
        className={cn(
          "fixed white transition-[right,left] duration-[400ms] ease-in-out bg-gray-100 text-gray-950 z-[40] top-0 px-4 pt-[52px] pb-4 w-screen h-screen hide-scroll overflow-y-auto  flex flex-col ",
          "min-[500px]:max-w-[500px]"
        )}
        {...rest}>
        {isOpen && children}
      </aside>
    </Portal>
  );
};

export default Drawer;
