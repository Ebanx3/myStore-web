import { useEffect, useState } from "react";
import { ErrorMessage } from "../../ErrorMessage";
import { login } from "../../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";
import { ClosedEye } from "../../../assets/ClosedEye";
import { OpenEye } from "../../../assets/OpenEye";
import { LoaderSVG } from "../../../assets/LoaderSVG";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  const nav = useNavigate();
  const { user, setUser } = useUserContext();

  const handleClick = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorAlert("Email no válido");
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/.test(password)) {
      setErrorAlert(
        "La contraseña debe contener al menos 12 caracteres,\n incluyendo mayúscula, minúscula y al menos un número"
      );
      return;
    }
    setIsLoading(true);
    const res = await login({ email, password });
    setIsLoading(false);
    if (!res.success) {
      setErrorAlert(res.message);
      return;
    }

    setUser(res.data ?? null);
    nav("/");
  };

  useEffect(() => {
    if (user !== null) {
      nav("/");
    }
  });

  return (
    <>
      <form className="flex flex-col gap-4 shadow-sm shadow-stone-400 p-8 bg-white rounded-md">
        <label htmlFor="email" className="flex justify-between items-center">
          Email:
          <input
            type="text"
            id="email"
            placeholder="email@email.com"
            className="border p-2 border-stone-400 focus:outline-none ml-2 w-[24ch]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label
          htmlFor="password"
          className="flex justify-between items-center relative"
        >
          Contraseña:
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="********"
            className="border p-2 border-stone-400 focus:outline-none ml-2 w-[24ch]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute right-0 text-stone-800 hover:text-stone-500 cursor-pointer border border-stone-400 p-1"
            onClick={() => setPasswordVisible((value) => !value)}
            type="button"
          >
            {!passwordVisible ? <ClosedEye /> : <OpenEye />}
          </button>
        </label>

        {isLoading ? <div className="self-center"><LoaderSVG /></div> :<button
          type="button"
          className="bg-sky-700 text-white font-medium py-2 cursor-pointer hover:bg-sky-500 w-[20ch] self-center"
          onClick={handleClick}
        >
          Ingresar
        </button>}

        <Link
          to={"/recuperar_contraseña"}
          className="text-sm font-medium text-center text-blue-600 hover:text-blue-400"
        >
          Olvide mi Contraseña
        </Link>
      </form>
      {errorAlert !== "" && (
        <ErrorMessage message={errorAlert} setMessage={setErrorAlert} />
      )}
    </>
  );
};
