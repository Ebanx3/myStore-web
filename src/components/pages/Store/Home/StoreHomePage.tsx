import { useParams } from "react-router-dom";
import { NavBar } from "../NavBar";
import { ProductsContainer } from "./ProductsContainer";

export const StoreHomePage = () => {
  const { storeName } = useParams();
  const storeNameWithSpaces = storeName?.replaceAll("_", " ") || "";

  return (
    <>
      <title>{storeNameWithSpaces}</title>
      <NavBar storeName={storeNameWithSpaces} />
      <ProductsContainer storeName={storeNameWithSpaces}/>
    </>
  );
};
