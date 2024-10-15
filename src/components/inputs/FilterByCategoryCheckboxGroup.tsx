import { ProductCategory } from "@/lib/types/Product.types";
import Checkbox from "@/ui/inputs/Checkbox";
import React, { FC } from "react";

interface FilterByCategoryCheckboxGroupProps {
  handleChangeCategories: React.Dispatch<
    React.SetStateAction<ProductCategory[]>
  >;
  categories: string[];
}

const FilterByCategoryCheckboxGroup: FC<FilterByCategoryCheckboxGroupProps> = ({
  handleChangeCategories,
  categories,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    handleChangeCategories((s) => {
      if (checked) {
        return [...s, value as ProductCategory];
      } else {
        return s.filter((el) => el !== value);
      }
    });
  };
  
  return (
    <div className="flex flex-col gap-1">
      {categories.map((el, key) => (
        <Checkbox key={key} onChange={handleChange} value={el}>
          {el}
        </Checkbox>
      ))}
    </div>
  );
};

export default FilterByCategoryCheckboxGroup;
