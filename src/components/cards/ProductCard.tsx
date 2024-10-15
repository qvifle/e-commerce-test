"use client";
import { Product } from "@/lib/types/Product.types";
import React, { FC, useEffect } from "react";
import Image from "next/image";
import Button from "@/ui/buttons/Button";
import AddToCartButton from "../buttons/AddToCartButton";
import useCartStore, { CartProduct } from "@/store/cart";
import { Plus, Minus, Trash } from "lucide-react";
import ProductCounterButtonGroup from "../inputs/ProductCounterButtonGroup";

interface ProductCardProps extends React.HTMLProps<HTMLDivElement> {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [cartItem, setCartItem] = React.useState<CartProduct | undefined>(
    undefined
  );

  const cart = useCartStore((s) => s.cart);

  useEffect(() => {
    const cartItem = cart.find((cartItem) => cartItem.id === product.id);
    setCartItem(cartItem);
  }, [cart, product]);
  return (
    <div className="flex flex-col bg-gray-200 border w-full max-w-full border-gray-300 p-1 rounded-md">
      <div className="relative aspect-video mb-2">
        <Image
          src={product?.image ?? "/no-content.png"}
          alt={product.name}
          className="rounded-[3px] "
          fill
        />
      </div>
      <p className="text-xl leading-6 font-medium">{product.name}</p>
      <p className="text-sm text-gray-400 leading-4">{product.category}</p>
      <div className="flex items-end justify-between">
        <p className=" font-bold">{`${product.price}$`}</p>
        {cartItem ? (
          <ProductCounterButtonGroup cartItem={cartItem} />
        ) : (
          <AddToCartButton product={product} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
