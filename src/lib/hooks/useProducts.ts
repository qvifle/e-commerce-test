import productService from "@/lib/services/ProductService";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product.types";

const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await productService.getProducts();
      if (!res.ok) {
        return;
      }

      const data = await res.json();
      return data;
    },
  });

export default useProducts;
