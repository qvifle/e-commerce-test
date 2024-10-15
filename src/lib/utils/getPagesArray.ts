import { PAGE_LIMIT } from "../constants";
import { Product } from "../types/Product.types";



const getPagesArray = (data: Product[]) => {
  const countOfProducts = data.length;
  const countOfPages = Math.ceil(countOfProducts / PAGE_LIMIT);

  return Array.from({ length: countOfPages }, (_, i) => i + 1);
};

export default getPagesArray;
