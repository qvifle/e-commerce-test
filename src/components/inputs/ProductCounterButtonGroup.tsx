import useCartStore, { CartProduct } from "@/store/cart";
import Button from "@/ui/buttons/Button";
import { Minus, Plus, Trash } from "lucide-react";
import React, { FC, useMemo } from "react";

interface ProductCounterButtonGroup {
  cartItem: CartProduct;
}

const ProductCounterButtonGroup: FC<ProductCounterButtonGroup> = ({
  cartItem,
}) => {
  const incrementCountOfProduct = useCartStore(
    (s) => s.incrementCountOfProduct
  );
  const decrementCountOfProduct = useCartStore(
    (s) => s.decrementCountOfProduct
  );
  const removeProduct = useCartStore((s) => s.removeProduct);

  const isLast = useMemo(() => cartItem.count === 1, [cartItem]);

  if (!cartItem) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={isLast ? "error" : undefined}
        icon={isLast ? <Trash size={16} /> : <Minus size={16} />}
        onClick={() => {
          if (isLast) {
            removeProduct(cartItem.id);
          } else {
            decrementCountOfProduct(cartItem.id);
          }
        }}
      />

      <span>{cartItem.count}</span>
      <Button
        icon={<Plus size={16} />}
        onClick={() => incrementCountOfProduct(cartItem.id)}
      />
    </div>
  );
};

export default ProductCounterButtonGroup;
