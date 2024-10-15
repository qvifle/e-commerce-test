import { Product, ProductCategory } from "../types/Product.types";
import filterProductsByNameStartsWith from "./filterProductsByName";
import filterProductsByCategory from "./filterProductsByCategory";
import sortProductsByPrice from "./sortProductsByPrice";
import { SortPrice } from "../types/ProductFilters.types";

interface ApplyProductsFiltersArguments {
  products: Product[];
  searchValue: string;
  categories: ProductCategory[];
  sortBy: SortPrice;
}

const applyProductsFilters = ({
  categories,
  products,
  searchValue,
  sortBy,
}: ApplyProductsFiltersArguments) => {
  const filteredByNameData = filterProductsByNameStartsWith(
    products,
    searchValue
  );

  const filteredByCategory = filterProductsByCategory(
    filteredByNameData,
    categories
  );

  const sortedByPrice = sortProductsByPrice(filteredByCategory, sortBy);

  return sortedByPrice;
};

export default applyProductsFilters;
