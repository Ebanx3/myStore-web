import { createContext } from "react";

interface CartsContext {
  getCart: (storeId: string) => Cart | null;
  addItem: ({
    product,
    storeId,
    count,
  }: {
    product: Product;
    storeId: string;
    count: number;
  }) => void;
  removeItem: ({storeId, productId}:{storeId:string, productId: string}) => void;
  clear: (storeId: string) => void;
  totalPrice: (storeId: string) => number;
  countProducts: (storeId: string) => number;
}

export const cartsContext = createContext<CartsContext>({} as CartsContext);
