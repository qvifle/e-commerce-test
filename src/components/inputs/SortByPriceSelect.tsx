import { SortPrice } from "@/lib/types/ProductFilters.types";
import React, { FC } from "react";

interface SortByPriceSelect {
  setSort: React.Dispatch<React.SetStateAction<SortPrice>>;
}

const SortByPriceSelect: FC<SortByPriceSelect> = ({ setSort }) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span>Sort price:</span>
      <select
        defaultValue={"no"}
        name="sort"
        onChange={(e) =>
          setSort(
            e.target.value == "null" ? null : (e.target.value as SortPrice)
          )
        }>
        <option value="null">-</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
};

export default SortByPriceSelect;
