import { useEffect, useState } from "react";
import ErrorMessage from "../../ErrorMessage";
import { signup } from "../../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";

export const Form = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [success, setSuccess]= useState(false);

  const nav = useNavigate();
  const { user} = useUserContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!/^[\p{L}]{3,30}$/u.test(name)){
      setErrorAlert("El nombre debe contener entre 3 y 30 letras");
      return;
    }

    if(!/^[\p{L}]{3,30}$/u.test(lastname)){
      setErrorAlert("El apellido debe contener entre 3 y 30 letras");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorAlert("Email no válido");
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/.test(password)) {
      setErrorAlert('La contraseña debe contener al menos 12 caracteres, incluyendo mayúscula, minúscula y al menos un número');
      return;
    }

    if( password !== repeatPassword ){
      setErrorAlert("Las contraseñas no coinciden");
      return;
    }

    const res = await signup({ name, lastname, email, password });
    if (!res.success) {
      setErrorAlert(res.message);
      return;
    }

    setSuccess(true);
  };

  useEffect(()=> {
    if(user !== null){
        nav('/');
    }
  });

  return (
    <>
      <form
        className="flex flex-col gap-4 shadow-sm shadow-stone-400 p-8 bg-white rounded-md"
        onSubmit={handleSubmit}
      >

        <label htmlFor="name" className="flex justify-between items-center"> Nombre:
          <input
          type="text"
          id="name"
          placeholder="Carlos"
          className="border py-1 px-2 border-stone-400 focus:outline-none bg-stone-100 ml-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>


        <label htmlFor="lastname" className="flex justify-between items-center"> Apellido:
          <input
          type="text"
          id="lastname"
          placeholder="Rodríguez"
          className="border py-1 px-2 border-stone-400 focus:outline-none bg-stone-100 ml-2"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        </label>


        <label htmlFor="email" className="flex justify-between items-center"> Email:
          <input
          type="email"
          id="email"
          placeholder="email@email.com"
          className="border py-1 px-2 border-stone-400 focus:outline-none bg-stone-100 ml-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        
    
        <label htmlFor="password" className="flex justify-between items-center"> Contraseña:
          <input
          type="password"
          id="password"
          placeholder="*****"
          className="border py-1 px-2 border-stone-400 focus:outline-none bg-stone-100 ml-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
        

        <label htmlFor="repeatPassword" className="flex justify-between items-center"> Repetir contraseña:
          <input
          type="password"
          id="repeatPassword"
          placeholder="*****"
          className="border py-1 px-2 border-stone-400 focus:outline-none bg-stone-100 ml-2"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        </label>
        

        <input
          type="submit"
          value="Registrarme"
          className="bg-sky-700 text-white font-medium py-2 mt-2 cursor-pointer hover:bg-sky-500"
        />
        {success && (
        <div className="absolute bg-white border p-6 rounded-md flex flex-col gap-6">
          <span >
          Se te ha enviado un email a la dirección proporcionada.
          <br />
          Revisa tu email para cambiar la contraseña.
        </span>
          <Link to={'/'} className="bg-sky-700 hover:bg-sky-500 m-auto py-2 px-4 text-white font-medium">Volver</Link>
        </div>
      )}
      </form>
      {errorAlert !== "" && (
        <ErrorMessage message={errorAlert} setMessage={setErrorAlert} />
      )}
    </>
  );
};
