
import { changeStoreStatus } from "../../../../api/stores";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../../../hooks/useStoreContext";


export const Menu = () => {
  const { store, setStore} = useStoreContext();
  return (
    <>
        <div className="grid grid-cols-[2fr_1fr] gap-4 items-end">
          <span className="w-[32ch]">
            Estado de tienda:{" "}
            {store!.statusActive ? (
              <span className="text-green-600 font-medium border px-1">
                Activa
              </span>
            ) : (
              <span className="text-red-600 font-medium border px-1">
                Inactiva
              </span>
            )}
          </span>

          <button
            className="border px-4 font-medium hover:bg-stone-900 hover:text-white cursor-pointer text-center"
            onClick={() => {
              changeStoreStatus(store!.name!.replaceAll(" ","_")).then((res) => {
                if (res.success)
                  setStore({ ...store!, statusActive: !store!.statusActive });
              });
            }}
          >
            {store!.statusActive ? "Desactivar" : "Activar"}
          </button>

          <span>Productos</span>
          <Link
            to={`productos`}
            className="border px-4 font-medium hover:bg-stone-900 hover:text-white cursor-pointer text-center"
          >
            Gestionar
          </Link>

          <span>Categorías</span>
          <Link
            to={"categorias"}
            className="border px-4 font-medium hover:bg-stone-900 hover:text-white cursor-pointer text-center"
          >
            Gestionar
          </Link>
        </div>
    </>
  );
};
