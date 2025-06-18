import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center items-center gap-6 py-2 px-6 border-b border-zinc-300">
      <span className="font-bold text-xl">MyStore</span>
      <ul className="flex gap-4 font-medium">
        <li>Cómo funciona?</li>
        <li>nose</li>
        <li>que</li>
        <Link to={"/ingresar"}>Ingresar</Link>
      </ul>
    </nav>
  );
};
