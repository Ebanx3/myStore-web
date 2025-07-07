import { useEffect, useState } from "react";
import { StoreCard } from "./StoreCard";
import { CreateStoreModal } from "./CreateStoreModal";
import { getUserStores } from "../../../api/stores";

export const StoresContainer = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [showNewStoreModal, setShowNewStoreModal] = useState(false);

  const fetchStores = async () => {
    const res = await getUserStores();
    if (res.success && res.data !== undefined) {
      setStores(res.data);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  return (
    <>
      <section className="mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">Mis Tiendas</h2>
          <button
            className="bg-blue-600 text-white py-2 px-4 font-medium hover:bg-blue-500 cursor-pointer"
            onClick={() => setShowNewStoreModal(true)}
          >
            Crear Tienda
          </button>
        </div>
        {stores.length === 0 && (
          <span className="text=lg font-medium text-zinc-400 mt-12">
            Aún no tienes ninguna tienda.
          </span>
        )}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,300px))] gap-8 mt-12">
          {stores.map((store) => (
            <StoreCard store={store} key={store.id} />
          ))}
        </div>
      </section>
      {showNewStoreModal && (
        <CreateStoreModal
          closeModal={() => setShowNewStoreModal(false)}
          onCreated={() => {
            fetchStores();
            setShowNewStoreModal(false);
          }}
        />
      )}
    </>
  );
};
