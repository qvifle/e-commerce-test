import { Product, ProductCategory } from "../types/Product.types";

const filterProductsByCategory = (
  data: Product[],
  categories: ProductCategory[]
) => {
  if (!categories.length) {
    return data;
  }

  return data.filter((item) => categories.find((el) => el == item.category));
};

export default filterProductsByCategory;
