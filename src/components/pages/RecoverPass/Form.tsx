import { useState } from "react";
import { ErrorMessage } from "../../ErrorMessage";
import { recoverPass } from "../../../api/auth";
import { Link } from "react-router-dom";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (success) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorAlert("Email no válido");
      return;
    }

    const res = await recoverPass(email);
    if (!res.success) {
      setErrorAlert(res.message);
      return;
    }

    setSuccess(true);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 shadow-sm shadow-stone-400 p-8 bg-white rounded-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email"> Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email@email.com"
          className="border p-2 border-stone-400 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          value="Recuperar contraseña"
          className="bg-sky-700 text-white font-medium py-2 cursor-pointer hover:bg-sky-500"
        />
      </form>
      {success && (
        <div className="absolute bg-white border p-6 rounded-md flex flex-col gap-6">
          <span>
            Se te ha enviado un email a la dirección proporcionada.
            <br />
            Revisa tu email para cambiar la contraseña.
          </span>
          <Link
            to={"/"}
            className="bg-sky-700 hover:bg-sky-500 m-auto py-2 px-4 text-white font-medium"
          >
            Volver
          </Link>
        </div>
      )}
      {errorAlert !== "" && (
        <ErrorMessage message={errorAlert} setMessage={setErrorAlert} />
      )}
    </>
  );
};
