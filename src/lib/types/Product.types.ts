export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  image: string | null;
}

export type ProductCategory = "Electronics" | "Clothes" | "Books";
