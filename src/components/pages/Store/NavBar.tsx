import { useUserContext } from "../../../hooks/useUserContext";
import { CartSVG } from "../../../assets/CartSVG";
import { useEffect, useState } from "react";
import { storeIsMine } from "../../../api/stores";
import { Link,  useParams } from "react-router-dom";
import { GearSVG } from "../../../assets/GearSVG";
import { useCartsContext } from "../../../hooks/useCartsContext";

export const NavBar = () => {
  const {storeName}=useParams();
  const storeNameWS = storeName!.replaceAll("_"," ")
  const [storeMine, setStoreMine] = useState(false);
  const { user } = useUserContext();
  const { countProducts } = useCartsContext();

  useEffect(() => {
    if (user != null) {
      (async () => {
        const res = await storeIsMine(storeName!.replaceAll('_'," "));
        if (res.success) {setStoreMine(true);};
      })();
    }
  }, [storeName, user]);

  return (
    <>
    <nav className="flex justify-center gap-8 py-4 font-bold items-center m-auto border-b border-stone-400" >
      <Link to={`/${storeName}`} className="text-xl ">{storeNameWS}</Link>
      <Link className="relative overflow-auto w-14 cursor-pointer hover:text-stone-500 group" to={`/${storeName}/carrito`}>
        <CartSVG />
        <span className="text-sm size-6 font-medium text-white bg-red-600 rounded-full p-[1px] absolute top-1 right-1 group-hover:bg-red-500 text-center">{countProducts(storeNameWS)}</span>
      </Link>

      {storeMine && (
        <Link
          to={`/${storeName}/admin`}
          className="flex fixed right-12 border py-1 px-2 text-sm items-center self-end gap-1 hover:bg-orange-600 hover:text-white"
        >
          Administrar <GearSVG/>
        </Link>
      )}
    </nav>
    </>
  );
};
