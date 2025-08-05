import { Link } from "react-router-dom";

export const StoreDontExists = () => {
  return (
    <>
    <title>La tienda no existe</title>
      <div className="flex flex-col items-center mt-[12vh] gap-4">
        <span className="text-2xl font-medium">Esta tienda no existe.</span>
        <span>Puedes crear una desde tu perfil. </span>
        <Link to={'/perfil'} className="text-blue-600 font-medium">Ir a perfil</Link> 
      </div>
    </>
  );
};
