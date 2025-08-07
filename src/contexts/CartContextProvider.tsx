import { useEffect, useState, type ReactNode } from "react";
import { cartsContext } from "./cartContext";

export const CartsContextProvider = ({ children }: { children: ReactNode }) => {
  const savedData = JSON.parse(sessionStorage.getItem("myStoreCarts") || "[]");
  const [carts, setCarts] = useState<Cart[]>(savedData);

  const getCart = (storeName: string): Cart | null => {
    const index = carts.findIndex((cart) => cart.storeName === storeName);
    if (index < 0) return null;
    return carts[index];
  };

  const addItem = ({
    product,
    storeName,
    count,
  }: {
    product: Product;
    storeName: string;
    count: number;
  }) => {
    const copyCarts = [...carts];
    const cart = getCart(storeName);
    if (!cart) {
      const newCart: Cart = { storeName, products: [{ product, count }] };
      copyCarts.push(newCart);
    } else {
      const copyCart: Cart = { storeName, products: [...cart.products] };
      const index = copyCart.products.findIndex(
        (p) => p.product.id === product.id
      );
      if (index < 0) {
        copyCart.products.push({ product, count });
      } else {
        copyCart.products[index].count += count;
        if(copyCart.products[index].count > copyCart.products[index].product.stock){
          copyCart.products[index].count = copyCart.products[index].product.stock;
        }
      }
    }
    setCarts(copyCarts);
  };

  const removeItem = ({storeName, productId}:{storeName:string, productId: string}) => {
    const indexC = carts.findIndex((cart) => cart.storeName === storeName);
    if (indexC < 0) return;

    const indexP = carts[indexC].products.findIndex(p => p.product.id === productId);
    if(indexP < 0) return;

    const copyCarts = [...carts];
    copyCarts[indexC].products.splice(indexP, 1);
    setCarts(copyCarts);
  }

  const clear = (storeName:string)=>{
    const indexC = carts.findIndex((cart) => cart.storeName === storeName);
    if (indexC < 0) return;

    const copyCarts = [...carts];
    copyCarts.splice(indexC, 1);
    setCarts(copyCarts);
  }

  const totalPrice = (storeName:string) => {
    console.log(storeName)
    const cart = getCart(storeName);
    if(!cart) return 0;

    return cart.products.reduce((total, item)=>{
      return total + (item.count * item.product.price)
    },0)
  }

  const countProducts = (storeName:string) => {
    const cart = getCart(storeName);
    console.log(cart)
    if(!cart) return 0;
    console.log(cart)
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
