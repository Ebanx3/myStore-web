import { useEffect, useState } from "react";
import { changeStoreStatus, storeIsMine } from "../../../../api/stores";
import { AdminPanelButton } from "./AdminPanelButton";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderSVG } from "../../../../assets/LoaderSVG";

export const Menu = () => {
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
  }, [nav, storeName]);

  return (
    <>
      {store === null ? (
        <LoaderSVG />
      ) : (
        <div className="grid grid-cols-[2fr_1fr] gap-4 items-end">
          <span className="w-[32ch]">
            Estado de tienda:{" "}
            {store.statusActive ? (
              <span className="text-green-600 font-medium border px-1">
                Activa
              </span>
            ) : (
              <span className="text-red-600 font-medium border px-1">
                Inactiva
              </span>
            )}
          </span>
          <AdminPanelButton
            label={store.statusActive ? "Desactivar" : "Activar"}
            onClickMethod={() => {
              changeStoreStatus(store.name!).then((res) => {
                if (res.success)
                  setStore({ ...store, statusActive: !store.statusActive });
              });
            }}
          />

          <span>Productos</span>
          <AdminPanelButton label="Gestionar" onClickMethod={() => {}} />

          <span>Categorías</span>
          <AdminPanelButton label="Gestionar" onClickMethod={() => {}} />
        </div>
      )}
    </>
  );
};
