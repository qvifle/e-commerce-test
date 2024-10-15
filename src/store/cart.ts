import { Product } from "@/lib/types/Product.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartProduct extends Product {
  count: number;
}

interface CartStore {
  cart: CartProduct[];
  getCartItem: (productId: number) => CartProduct | undefined;
  addNewProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  incrementCountOfProduct: (productId: number) => void;
  decrementCountOfProduct: (productId: number) => void;
  clear: () => void;
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: [],
      getCartItem: (productId) => {
        const product = get().cart.find((product) => product.id === productId);
        return product;
      },
      addNewProduct: (product) =>
        set((state) => ({ cart: [...state.cart, { ...product, count: 1 }] })),
      removeProduct: (productId) => {
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productId),
        }));
      },
      incrementCountOfProduct: (productId) => {
        set((state) => ({
          cart: state.cart.map((product) =>
            product.id === productId
              ? { ...product, count: product.count + 1 }
              : product
          ),
        }));
      },
      decrementCountOfProduct: (productId) => {
        set((state) => ({
          cart: state.cart.map((product) =>
            product.id === productId
              ? { ...product, count: product.count - 1 }
              : product
          ),
        }));
      },
      clear: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart",
    }
  )
);

export default useCartStore;
