"use client";
import Drawer, { DrawerProps } from "@/ui/Drawer";
import React, { FC } from "react";
import { X } from "lucide-react";
import useCartStore from "@/store/cart";
import CartItems from "./CartItems";
import Button from "@/ui/buttons/Button";

const Cart: FC<DrawerProps> = (props) => {
  const { toggle } = props;
  const cart = useCartStore((s) => s.cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const clearCart = useCartStore((s) => s.clear);

  return (
    <Drawer side="right" {...props}>
      <div className="flex w-full items-center justify-between mb-4">
        <h2 className="text-4xl font-bold">Cart</h2>
        <button onClick={toggle}>
          <X />
        </button>
      </div>
      <div className="flex flex-col h-[calc(100dvh-52px-40px-16px-16px)] gap-4 w-full justify-between">
        <CartItems />
        <div className="flex items-center justify-between w-full">
          <p className="text-xl">
            Total: <span className="font-bold">{total}$</span>
          </p>
          {cart.length > 0 && (
            <Button icon={<X />} variant="error" onClick={clearCart}>
              Clear cart
            </Button>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default Cart;
