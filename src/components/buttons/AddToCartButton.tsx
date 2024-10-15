"use client";
import { Product } from "@/lib/types/Product.types";
import useCartStore from "@/store/cart";
import Button, { ButtonProps } from "@/ui/buttons/Button";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Plus } from "lucide-react";
import React, { FC } from "react";

interface AddToCartButtonProps extends ButtonProps {
  product: Product;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product, ...rest }) => {
  const addNewProduct = useCartStore((s) => s.addNewProduct);
  const isMobile = useMediaQuery("only screen and (min-width : 1280px)");

  return (
    <Button
      variant="dark"
      onClick={(e) => addNewProduct(product)}
      icon={<Plus />}
      className="sm:text-sm"
      {...rest}>
      {isMobile ? "Add to Cart" : undefined}
    </Button>
  );
};

export default AddToCartButton;
