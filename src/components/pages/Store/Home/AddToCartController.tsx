import { useState } from "react";
import { useCartsContext } from "../../../../hooks/useCartsContext";
import { MinusSVG } from "../../../../assets/MinusSVG";
import { PlusSVG } from "../../../../assets/PlusSVG";

interface Props {
  product: Product;
  storeName: string
}

export const AddToCartController = ({ product, storeName }: Props) => {
  const [count, setCount] = useState(1);
  const { addItem } = useCartsContext();

  const increaseCount = () => {
    if(count === product.stock) return;
    setCount((value) => value + 1);
  };

  const decreaseCount = () => {
    if (count <= 1) return;
    setCount((value) => value - 1);
  };

  const handleAddToCart = () => {
    addItem({product, storeName , count});
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex border border-stone-400 rounded-xl justify-center">
        <button className="p-1 hover:bg-stone-200 cursor-pointer" onClick={decreaseCount}>
          <MinusSVG />
        </button>
        <span className="border-r border-l border-stone-400 text-2xl font-bold p-1 w-[3ch] text-center">
          {count}
        </span>
        <button className="p-1 hover:bg-stone-200 cursor-pointer" onClick={increaseCount}>
          <PlusSVG />
        </button>
      </div>
      <button className="bg-rose-700 text-white p-2 rounded-xl hover:bg-rose-500 cursor-pointer font-medium" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};
