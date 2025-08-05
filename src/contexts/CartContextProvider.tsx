import { useEffect, useState, type ReactNode } from "react";
import { cartsContext } from "./cartContext";

export const CartsContextProvider = ({ children }: { children: ReactNode }) => {
  const savedData = JSON.parse(sessionStorage.getItem("myStoreCarts") || "[]");
  const [carts, setCarts] = useState<Cart[]>(savedData);

  const getCart = (storeId: string): Cart | null => {
    const index = carts.findIndex((cart) => cart.storeId === storeId);
    if (index < 0) return null;
    return carts[index];
  };

  const addItem = ({
    product,
    storeId,
    count,
  }: {
    product: Product;
    storeId: string;
    count: number;
  }) => {
    const copyCarts = [...carts];
    const cart = getCart(storeId);
    if (!cart) {
      const newCart: Cart = { storeId, products: [{ product, count }] };
      copyCarts.push(newCart);
    } else {
      const copyCart: Cart = { storeId, products: [...cart.products] };
      const index = copyCart.products.findIndex(
        (p) => p.product.id === product.id
      );
      if (index < 0) {
        copyCart.products.push({ product, count });
      } else {
        copyCart.products[index].count = count;
      }
    }
    setCarts(copyCarts);
  };

  const removeItem = ({storeId, productId}:{storeId:string, productId: string}) => {
    const indexC = carts.findIndex((cart) => cart.storeId === storeId);
    if (indexC < 0) return;

    const indexP = carts[indexC].products.findIndex(p => p.product.id === productId);
    if(indexP < 0) return;

    const copyCarts = [...carts];
    copyCarts[indexC].products.splice(indexP, 1);
    setCarts(copyCarts);
  }

  const clear = (storeId:string)=>{
    const indexC = carts.findIndex((cart) => cart.storeId === storeId);
    if (indexC < 0) return;

    const copyCarts = [...carts];
    copyCarts.splice(indexC, 1);
    setCarts(copyCarts);
  }

  const totalPrice = (storeId:string) => {
    const cart = getCart(storeId);
    if(!cart) return 0;

    return cart.products.reduce((total, item)=>{
      return total + (item.count * item.product.price)
    },0)
  }

  const countProducts = (storeId:string) => {
    const cart = getCart(storeId);
    if(!cart) return 0;

    return cart.products.reduce((total, item) => {
      return total + item.count
    },0)
  }


  useEffect(() => {
    sessionStorage.setItem("myStoreCarts", JSON.stringify(carts));
  }, [carts]);

  return (
    <cartsContext.Provider value={{ getCart, addItem, removeItem, clear, totalPrice, countProducts }}>
      {children}
    </cartsContext.Provider>
  );
};
