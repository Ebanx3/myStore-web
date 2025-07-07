import { Link } from "react-router-dom";

export const StoreCard = ({ store }: { store: Store }) => {
  const link = store.name.replaceAll(" ","_")
  return (
    <Link to={`/${link}`} className="border border-sky-400 bg-gradient-to-t from-white to-sky-100 rounded-md p-4 flex flex-col justify-center gap-2 h-[300px]">
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
          <span className="text-emerald-600 border rounded-md py-1 px-2">Activa</span>
        ) : (
          <span className="text-red-600 border rounded-md ml-2 px-1">Desactiva</span>
        )}
      </span>
      
    </Link>
  );
};
