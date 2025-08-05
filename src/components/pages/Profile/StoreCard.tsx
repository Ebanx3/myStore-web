import { Link } from "react-router-dom";
import { GearSVG } from "../../../assets/GearSVG";

export const StoreCard = ({ store }: { store: Store }) => {
  const link = store.name.replaceAll(" ", "_");
  return (
    <article className="shadow-sm shadow-stone-400  rounded-md p-4 flex flex-col justify-center items-center gap-2 h-[300px] text-sky-950">
      <span className="text-xl font-bold uppercase">{store.name}</span>
      <span className="text-sm font-medium">
        Cantidad de productos:{" "}
        <span className="text-md font-bold">
          {store.currentProducts}/{store.maxProducts}
        </span>
      </span>
      <span className="text-sm font-medium h-8 flex items-center">
        Estado:{" "}
        {store.statusActive ? (
          <span className="text-emerald-600 py-1 px-2 font-bold">
            Activa
          </span>
        ) : (
          <span className="text-red-600 ml-2 px-1 font-bold">
            Inactiva
          </span>
        )}
      </span>
      <Link
        to={`/${link}/admin`}
        className="flex border py-1 px-2 text-sm items-center font-medium gap-1 hover:bg-orange-600 hover:text-white"
      >
        Administrar <GearSVG />
      </Link>
      <Link
        to={`/${link}`}
        className="bg-blue-600 text-white font-medium p-2 hover:bg-blue-500 mt-4"
      >
        Ver Tienda
      </Link>
    </article>
  );
};
