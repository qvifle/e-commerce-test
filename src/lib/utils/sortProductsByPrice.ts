import { Product } from "../types/Product.types";
import { SortPrice } from "../types/ProductFilters.types";

const sortProductsByPrice = (data: Product[], by: SortPrice) => {
  if (!by) {
    return data;
  }

  return data.sort((a, b) =>
    by === "asc" ? a.price - b.price : b.price - a.price
  );
};

export default sortProductsByPrice;
