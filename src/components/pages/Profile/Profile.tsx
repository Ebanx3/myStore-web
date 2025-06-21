import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";
import { useEffect, useState } from "react";
import { Navbar } from "../Home/Navbar";
import { getUserStores } from "../../../api/stores";
import { StoreCard } from "./StoreCard";

export const Profile = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const { user } = useUserContext();
  const nav = useNavigate();

  useEffect(() => {
    if (user === null) nav("/");
    (async () => {
      const res = await getUserStores();
      if (res.success && res.data !== undefined) {
        setStores(res.data);
      }
    })();
  });

  if (user === null) {
    return null;
  }

  return (
    <>
      <title>Mi Perfil</title>
      <Navbar />
      <main className="max-w-[1024px] m-auto py-16">
        <h1 className="text-3xl font-bold text-stone-700">{user.name}</h1>
        <h2 className="text-2xl font-bold text-stone-500">{user.lastname}</h2>
        <h3 className="text-xl  font-medium">{user.email}</h3>
        <section>
          {stores.map(store => <StoreCard store={store} key={store.id}/>)}
        </section>
      </main>
    </>
  );
};
