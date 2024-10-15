import { Product } from "@/lib/types/Product.types";
import getPagesArray from "@/lib/utils/getPagesArray";
import PaginationButton from "@/ui/buttons/PaginationButton";
import React, { ButtonHTMLAttributes, FC } from "react";

interface PaginationButtonGroup
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  products: Product[];
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationButtonGroup: FC<PaginationButtonGroup> = ({
  products,
  currentPage,
  onPageChange,
  ...rest
}) => {
  return (
    <ul className="flex items-center gap-2">
      {getPagesArray(products).map((el, key) => (
        <PaginationButton
          onClick={() => onPageChange(el - 1)}
          key={key}
          isActive={el - 1 === currentPage}
          {...rest}>
          {el}
        </PaginationButton>
      ))}
    </ul>
  );
};

export default PaginationButtonGroup;
