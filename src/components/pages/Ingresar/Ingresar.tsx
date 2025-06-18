import { Link } from "react-router-dom";
import { Form } from "./Form";

export const Ingresar = () => {
  return (
    <>
      <title>Ingresar</title>
      <Form />
      <span className="text-sm">
        No tienes una cuenta? <Link to={"/registro"} className="uppercase text-stone-900 hover:text-stone-600 font-bold">crea una</Link>
      </span>
    </>
  );
};
