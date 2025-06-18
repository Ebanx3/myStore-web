import { Outlet } from "react-router-dom";

export const LayoutForms = () => {
  return (
    <main className="w-screen h-screen flex flex-col gap-2 justify-center items-center bg-gradient-to-br from-blue-200 to-cyan-200">
      <Outlet />
    </main>
  );
};
