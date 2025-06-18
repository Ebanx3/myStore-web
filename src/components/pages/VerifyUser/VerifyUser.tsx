import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../../../api/auth";
import { useState } from "react";
import { LoaderSVG } from "../../../assets/LoaderSVG";

export const VerifyUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { verificationCode } = useParams();
  const nav = useNavigate();

  const handleOnClick = async () => {
    setLoading(true);
    const res = await verifyEmail(verificationCode!);
    if (res?.success) {
      nav("/");
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
    <title>Verificar email</title>
    <main className="max-w-[1024px] min-h-screen m-auto flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl">
        Gracias por registrarte en <strong>MyStore</strong>
      </h2>
      <span>
        Dale al botón para verificar tu email y terminar con el proceso de
        registro.
      </span>
      {!error && !loading && (
        <button
        className="bg-gradient-to-b from-sky-600 to-indigo-600 hover:opacity-85 cursor-pointer font-medium rounded-md px-2 py-1 text-white h-10"
        onClick={handleOnClick}
        >
          Verificar email
        </button>
      )}
      {!error && loading && <LoaderSVG />}
      {error && (
        <p className="text-sm max-w-3xl border-2 bg-red-100 border-red-500 p-4 font-medium">
          Error al verificar el código, prueba <Link to={"/ingresar"} className="text-blue-700 font-bold cursor-pointer hover:text-blue-400">ingresar</Link> con tus credenciales para comprobar si ya validaste tu email. <br/>
          En caso negativo puedes volver a <button className="text-blue-700 font-bold cursor-pointer hover:text-blue-400">pedir un nuevo código</button> y revisar nuevamente tu email.
        </p>
      )}
    </main>
      </>
  );
};
