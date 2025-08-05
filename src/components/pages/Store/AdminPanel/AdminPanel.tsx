import { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { storeIsMine } from "../../../../api/stores";
import { useStoreContext } from "../../../../hooks/useStoreContext";
import { LoaderSVG } from "../../../../assets/LoaderSVG";

export const AdminPanel = () => {
  const { storeName } = useParams();
  const nav = useNavigate();
  const { store, setStore } = useStoreContext();

  useEffect(() => {
    if (storeName)
      (async () => {
        const res = await storeIsMine(storeName.replaceAll("_", " "));
        if (!res.success) nav(-1);
        else setStore(res.data!);
      })();
  }, [storeName]);

  return (
    <>
      <title>Administrar</title>
      <main className="flex flex-col items-center min-h-screen gap-2">
        <Link to={`/${storeName}`} className="text-3xl font-bold mt-12">
          {storeName?.replaceAll("_"," ")}
        </Link>

        <h2 className="text-xl font-medium mb-8 ">Panel de Administrador</h2>
        {store === null ? <LoaderSVG /> : <Outlet />}
      </main>
    </>
  );
};
