import { CartProduct } from "@/store/cart";
import Image from "next/image";
import React, { FC } from "react";
import ProductCounterButtonGroup from "@/components/inputs/ProductCounterButtonGroup";

export interface CartItemCardProps {
  cartItem: CartProduct;
}

const CartItemCard: FC<CartItemCardProps> = ({ cartItem }) => {
  return (
    <div className="flex flex-col bg-gray-200 border w-full max-w-full border-gray-300 p-1 rounded-md min-[440px]:grid min-[440px]:grid-cols-3 min-[440px]:gap-2">
      <div className="relative aspect-video mb-2">
        <Image
          src={cartItem?.image ?? "/no-content.png"}
          alt={cartItem.name}
          className="rounded-[3px] "
          fill
        />
      </div>
      <div className=" min-[440px]:flex  min-[440px]:items-end">
        <p className="text-xl leading-6 font-medium">{cartItem.name}</p>
      </div>
      <div className="flex items-end justify-between ">
        <p className=" font-bold">{`${cartItem.price}$`}</p>
        <ProductCounterButtonGroup cartItem={cartItem} />
      </div>
    </div>
  );
};

export default CartItemCard;
