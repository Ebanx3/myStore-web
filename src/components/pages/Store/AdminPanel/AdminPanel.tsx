
import { Outlet, useParams } from "react-router-dom";

export const AdminPanel = () => {
   const { storeName } = useParams();

  return (
    <>
      <title>Administrar</title>
      <main className="flex flex-col items-center min-h-screen gap-2">
        <h1 className="text-3xl font-bold mt-12">{storeName}</h1>
        <h2 className="text-xl font-medium mb-8 underline">Panel de Administrador</h2>
        <Outlet />
      </main>
    </>
  );
};
