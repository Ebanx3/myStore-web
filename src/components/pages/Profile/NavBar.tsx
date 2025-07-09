import { Link } from "react-router-dom";
import { LogoutSVG } from "../../../assets/LogoutSVG";
import { logout } from "../../../api/auth";
import { useUserContext } from "../../../hooks/useUserContext";

export const NavBar = () => {
  const { setUser } = useUserContext();

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <nav className="flex justify-between max-w-[1024px] m-auto items-center font-medium py-2">
      <Link to="/" className="hover:text-zinc-500">
        Inicio
      </Link>
      <button
        className="flex gap-2 hover:bg-zinc-200 cursor-pointer border-1 border-zinc-300 rounded-md px-2" 
        onClick={handleLogout}
      >
        Salir <LogoutSVG />
      </button>
    </nav>
  );
};
