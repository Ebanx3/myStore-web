import { createContext } from "react";

interface CartsContext {
  getCart: (storeName: string) => Cart | null;
  addItem: ({
    product,
    storeName,
    count,
  }: {
    product: Product;
    storeName: string;
    count: number;
  }) => void;
  removeItem: ({storeName, productId}:{storeName:string, productId: string}) => void;
  clear: (storeName: string) => void;
  totalPrice: (storeName: string) => number;
  countProducts: (storeName: string) => number;
}

export const cartsContext = createContext<CartsContext>({} as CartsContext);
