import { Product } from "../types/Product.types";

const filterProductsByNameStartsWith = (data: Product[], prefix: string) => {
  return data.filter((item) => item.name.startsWith(prefix));
};

export default filterProductsByNameStartsWith;
