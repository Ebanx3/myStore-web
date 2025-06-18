import { Link } from "react-router-dom";
import { Form } from "./Form";

export const Registro = () => {
  return (
    <>
      <title>Registro</title>
      <Form />
      <span className="text-sm">
        Ya tienes una cuenta? <Link to={"/ingresar"} className="uppercase text-stone-900 hover:text-stone-600 font-bold">ingresa</Link>
      </span>
    </>
  );
};
