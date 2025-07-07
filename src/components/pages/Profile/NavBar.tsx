import { Link } from "react-router-dom";
import { LogoutSVG } from "../../../assets/LogoutSVG";

export const NavBar = () => {
  return (<nav className="flex justify-between max-w-[1024px] m-auto items-center font-medium py-2">
    <Link to="/" className="hover:text-zinc-500">Inicio</Link>
    <button className="flex gap-2 hover:text-zinc-500 cursor-pointer border-2 border-zinc-400 rounded-md px-2">Salir <LogoutSVG/></button>
  </nav>);
};