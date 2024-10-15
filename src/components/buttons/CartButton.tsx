"use client";
import useCartStore from "@/store/cart";
import Button, { ButtonProps } from "@/ui/buttons/Button";
import { ShoppingCart } from "lucide-react";
import React, { FC } from "react";

const CartButton: FC<ButtonProps> = (props) => {
  const cartLength = useCartStore((s) => s.cart).length;
  return (
    <div className="relative">
      <Button icon={<ShoppingCart size={20} />} {...props}>
        Cart
      </Button>
      {cartLength != 0 && (
        <span className="bg-yellow-500 top-[-8px] right-[-8px] absolute w-5 h-5 rounded-full flex items-center justify-center font-medium ">
          {cartLength}
        </span>
      )}
    </div>
  );
};

export default CartButton;
