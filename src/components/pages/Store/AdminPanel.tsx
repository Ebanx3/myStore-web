import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminPanelButton } from "./AdminPanelButton";
import { changeStoreStatus, storeIsMine } from "../../../api/stores";
import { LoaderSVG } from "../../../assets/LoaderSVG";

export const AdminPanel = () => {
  const [store, setStore] = useState<Store | null>(null);
  const { storeName } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (storeName)
      (async () => {
        const res = await storeIsMine(storeName);
        if (!res.success) nav(-1);
        else setStore(res.data!);
      })();
  }, [storeName]);

  return (
    <>
      <title>Administrar</title>
      <main className="flex flex-col justify-center items-center min-h-screen gap-2">
        <h1 className="text-2xl font-bold">{storeName}</h1>
        <h2 className="text-xl font-medium mb-8">Administrar</h2>
        {store === null ? (
          <LoaderSVG />
        ) : (
          <div className="grid grid-cols-[2fr_1fr] gap-4 items-end">
            <span className="w-[32ch]">
              Estado de tienda:{" "}
              {store.statusActive ? (
                <span className="text-green-600 font-medium border px-1">Activa</span>
              ) : (
                <span className="text-red-600 font-medium border px-1">Inactiva</span>
              )}
            </span>
            <AdminPanelButton
              label={store.statusActive ? "Desactivar" : "Activar"}
              onClickMethod={() => {
                changeStoreStatus(storeName!).then((res) => {
                  if (res.success)
                    setStore({ ...store, statusActive: !store.statusActive });
                });
              }}
            />

            <span>Productos</span>
            <AdminPanelButton label="Ver" onClickMethod={() => {}} />

            <span>Categorías</span>
            <AdminPanelButton label="Ver" onClickMethod={() => {}} />
          </div>
        )}
      </main>
    </>
  );
};
