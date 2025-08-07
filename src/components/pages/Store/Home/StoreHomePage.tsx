import { useParams } from "react-router-dom";
import { ProductsContainer } from "./ProductsContainer";
import { useEffect, useState } from "react";
import { getProductsByStoreName } from "../../../../api/products";
import { StoreInactive } from "./StoreInactive";
import { StoreDontExists } from "./StoreDontExists";

export const StoreHomePage = () => {
  const { storeName } = useParams();
  const storeNameWithSpaces = storeName?.replaceAll("_", " ") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    const res = await getProductsByStoreName(storeName!);
    if (res.success && res.data) {
      setProducts(res.data);
    }
    if (!res.success) {
      setError(res.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error === "Store is not active") {
    return <StoreInactive storeName={storeNameWithSpaces} />;
  }
  if (error === "Does not exists a store with that name") {
    return <StoreDontExists />;
  }

  return (
    <>
      <ProductsContainer products={products} />
    </>
  );
};
