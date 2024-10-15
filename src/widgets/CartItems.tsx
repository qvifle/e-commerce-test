"use client";
import CartItemCard from "@/components/cards/CartItemCard/CartItemCard";
import useCartStore from "@/store/cart";
import React from "react";

const CartItems = () => {
  const cart = useCartStore((s) => s.cart);
  if (!cart.length) {
    return <div>No items in cart</div>;
  }

  return (
    <div className="flex flex-col gap-1 flex-grow h-full overflow-y-auto overflow-x-hidden w-full">
      {cart.map((item, key) => (
        <CartItemCard key={key} cartItem={item} />
      ))}
    </div>
  );
};

export default CartItems;
