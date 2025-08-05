import { Link, useParams } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { storeName } = useParams();

  return (
    <Link
      to={`/${storeName}/${product.id}`}
      className="border shadow-md shadow-stone-400 p-4 flex flex-col hover:scale-105 transition-all duration-150 ease-in-out"
    >
      <img
        src={product.picturesUrl[0]}
        alt={product.name}
        className="size-[250px] aspecto-[1/1] object-cover border border-stone-400"
        style={{ viewTransitionName: `img-${product.id}` }}
      />
      <h2 className="font-medium my-2">{product.name}</h2>
      <span className="font-bold self-end text-xl">$ {product.price}</span>
    </Link>
  );
};
