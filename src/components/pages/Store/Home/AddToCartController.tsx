import { useState } from "react";
import { useCartsContext } from "../../../../hooks/useCartsContext";
import { MinusSVG } from "../../../../assets/MinusSVG";
import { PlusSVG } from "../../../../assets/PlusSVG";

interface Props {
  product: Product;
}

export const AddToCartController = ({ product }: Props) => {
  const [count, setCount] = useState(1);
  const { addItem } = useCartsContext();

  const increaseCount = () => {
    setCount((value) => value + 1);
  };

  const decreaseCount = () => {
    if (count <= 1) return;
    setCount((value) => value - 1);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex border border-stone-400 rounded-xl justify-center">
        <button className="p-2 hover:bg-stone-200 " onClick={decreaseCount}>
          <MinusSVG />
        </button>
        <span className="border-r border-l border-stone-400 text-2xl font-bold p-2 w-[3ch] text-center">
          {count}
        </span>
        <button className="p-2 hover:bg-stone-200 " onClick={increaseCount}>
          <PlusSVG />
        </button>
      </div>
      <button className="bg-rose-700 text-white p-2 rounded-xl hover:bg-rose-500 cursor-pointer font-medium">
        Agregar al carrito
      </button>
    </div>
  );
};
