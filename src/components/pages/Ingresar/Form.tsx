import { useEffect, useState } from "react";
import ErrorMessage from "../../ErrorMessage";
import { login } from "../../../api/login";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const nav = useNavigate();
  const { user, setUser} = useUserContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorAlert("Email no válido");
      return;
    }

    if (password.length < 8 || password.length > 50) {
      setErrorAlert("El password debe contener entre 8 y 50 caracteres ");
      return;
    }

    const res = await login({ email, password });
    if (!res.success) {
      setErrorAlert(res.message);
      return;
    }

    setUser(res.data ?? null);
    nav("/");
  };

  useEffect(()=> {
    if(user !== null){
        nav('/');
    }
  });

  return (
    <>
      <form
        className="flex flex-col gap-4 shadow-sm shadow-stone-400 p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-medium">Ingresar</h2>
        <label htmlFor="email"> Email:</label>
        <input
          type="text"
          id="email"
          placeholder="email@email.com"
          className="border p-2 border-stone-400 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password"> Contraseña:</label>
        <input
          type="password"
          id="password"
          placeholder="*****"
          className="border p-2 border-stone-400 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Ingresar"
          className="bg-sky-600 text-white font-medium py-2"
        />
      </form>
      {errorAlert !== "" && (
        <ErrorMessage message={errorAlert} setMessage={setErrorAlert} />
      )}
    </>
  );
};
