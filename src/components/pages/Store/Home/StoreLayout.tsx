import { Outlet, useParams } from "react-router-dom";
import { NavBar } from "../NavBar";

export const StoreLayout = () => {
  const { storeName } = useParams();
  const storeNameWithSpaces = storeName?.replaceAll("_", " ") || "";
  return (
    <>
      <title>{storeNameWithSpaces}</title>
      <NavBar />
      <Outlet />
    </>
  );
};
