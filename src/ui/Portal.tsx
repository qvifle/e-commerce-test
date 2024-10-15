"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type IPortal = {
  children: React.ReactNode;
  selector: string;
};

const Portal = ({ children, selector }: IPortal) => {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);

  return ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
