import { useUserContext } from "../../../hooks/useUserContext";
import { CartSVG } from "../../../assets/CartSVG";
import { useEffect, useState } from "react";
import { storeIsMine } from "../../../api/stores";
import { Link } from "react-router-dom";
import { GearSVG } from "../../../assets/GearSVG";

export const NavBar = ({ storeName }: { storeName: string }) => {
  const [storeMine, setStoreMine] = useState(false);
  const { user } = useUserContext();

  useEffect(() => {
    if (user != null) {
      (async () => {
        const res = await storeIsMine(storeName);
        if (res.success) setStoreMine(true);
      })();
    }
  }, [storeName, user]);

  return (
    <nav className="flex justify-center gap-8 py-4 font-bold items-center m-auto border-b border-stone-400" >
      <span className="text-xl">{storeName}</span>
      <CartSVG />

      {storeMine && (
        <Link
          to={`/${storeName.replaceAll(' ',"_")}/admin`}
          className="flex fixed right-12 border py-1 px-2 text-sm items-center self-end gap-1 hover:bg-orange-600 hover:text-white"
        >
          Administrar <GearSVG/>
        </Link>
      )}
    </nav>
  );
};
