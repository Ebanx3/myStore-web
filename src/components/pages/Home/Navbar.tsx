import { Link } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";

export const Navbar = () => {
  const {user} = useUserContext();
  return (
    <nav className="w-full flex justify-center items-end gap-6 py-2 px-6 border-b border-zinc-300">
      <span className="font-bold text-xl">MyStore</span>
      <ul className="flex gap-4 font-medium ">
        <li>Cómo funciona?</li>
        {user === null ? <Link to={"/ingresar"}>Ingresar</Link> : <Link to={'/perfil'}>Perfil</Link>}
      </ul>
    </nav>
  );
};
