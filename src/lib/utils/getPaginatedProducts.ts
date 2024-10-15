import { PAGE_LIMIT } from "../constants";
import { Product } from "../types/Product.types";

const getPaginatedProducts = (data: Product[], currentPage: number) => {
  return data.slice(
    currentPage * PAGE_LIMIT,
    currentPage * PAGE_LIMIT + PAGE_LIMIT
  );
};

export default getPaginatedProducts;
