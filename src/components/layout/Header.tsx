"use client";
import Link from "next/link";
import React, { useState } from "react";
import CartButton from "../buttons/CartButton";
import Cart from "@/widgets/Cart";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="bg-gray-900 sticky top-0 left-0 z-20">
      <div className="container flex items-center w-full justify-between py-4">
        <Link className="text-gray-100 text-xl font-semibold" href="/">
          E-Shop
        </Link>

        <CartButton onClick={() => setOpen((s) => !s)} />
        <Cart toggle={() => setOpen((s) => !s)} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
