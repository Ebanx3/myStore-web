import { useParams } from "react-router-dom";
import { NavBar } from "../NavBar";
import { useEffect, useState } from "react";
import { getProduct } from "../../../../api/products";
import { AddToCartController } from "./AddToCartController";

export const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { storeName, productId } = useParams();

  const fetchProduct = async () => {
    const response = await getProduct(productId!);
    if (response.success && response.data) {
      setProduct(response.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <title>{product?.name}</title>
      <NavBar storeName={storeName!.replaceAll("_", " ")} />
      {product && (
        <article className="flex max-w-[1024px] m-auto p-4">
          <img
            src={product.picturesUrl[0] ?? ""}
            alt={product.name}
            className="size-[500px] border object-cover"
            style={{ viewTransitionName: `img-${product.id}` }}
          />
          <div className="flex flex-col gap-8 p-6 flex-1 justify-between">
            <div>
              <h1 className="text-3xl font-bold ">{product.name}</h1>
              <p className=" whitespace-pre-line mt-4">{product.details}</p>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold">
                ${product.price}
              </span>
              <AddToCartController product={product} />
            </div>
          </div>
        </article>
      )}
    </>
  );
};
