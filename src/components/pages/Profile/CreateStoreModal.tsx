import { useState } from "react";
import { ErrorMessage } from "../../ErrorMessage";
import { createStore } from "../../../api/stores";
import { LoaderSVG } from "../../../assets/LoaderSVG";

interface Props {
  closeModal: VoidFunction;
  onCreated: VoidFunction;
}

export const CreateStoreModal = ({ closeModal, onCreated }: Props) => {
  const [storeName, setStoreName] = useState("");
  const [maxProducts, setMaxProducts] = useState(30);
  const [errorAlert, setErrorAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!/^[\p{L}0-9\- ]{3,30}$/u.test(storeName)) {
      setErrorAlert(
        "El nombre de la tienda debe contener entre 3 y 30 caracteres.\nLetras, números y/o guión '-'"
      );
      return;
    }
    setIsLoading(true);
    const res = await createStore({ name: storeName, maxProducts });
    setIsLoading(false);

    if (!res.success) {
      setErrorAlert(res.message);
      return;
    }

    onCreated();
  };

  return (
    <>
      <div className="fixed backdrop-blur-sm top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div className="bg-white border p-8 flex flex-col gap-6">
          <h2 className="text-xl font-medium">Crear tienda</h2>
          <label htmlFor="storeName">
            Nombre:{" "}
            <input
              type="text"
              id="storeName"
              placeholder="Nuevo nombre"
              className="border ml-2 p-2"
              autoComplete="off"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </label>

          <label
            htmlFor="amountProducts"
            className="flex justify-between items-center"
          >
            Cantidad de productos:
            <select
              id="amountProducts"
              className="p-2 focus:outline-none"
              value={maxProducts}
              onChange={(e) => setMaxProducts(parseInt(e.target.value))}
            >
              <option value={30}>30</option>
              <option value={200}>200</option>
              <option value={1000}>1000</option>
            </select>
          </label>

          <div className="flex justify-between">
            {isLoading ? (
              <div className="m-auto">
                <LoaderSVG />
              </div>
            ) : (
              <>
                <button
                  className="bg-orange-700 text-white p-2 font-medium text-sm hover:bg-orange-500 cursor-pointer"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  className="bg-sky-700 text-white p-2 font-medium text-sm hover:bg-sky-500 cursor-pointer"
                  onClick={handleClick}
                >
                  Confirmar
                </button>
              </>
            )}
          </div>
        </div>
        {errorAlert !== "" && (
          <ErrorMessage message={errorAlert} setMessage={setErrorAlert} />
        )}
      </div>
    </>
  );
};
