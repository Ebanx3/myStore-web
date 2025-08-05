import { useState } from "react";
import { uploadPicture } from "../../../../api/uploadPicture";
import { LoaderSVG } from "../../../../assets/LoaderSVG";
import { ErrorMessage } from "../../../ErrorMessage";
import { addProduct } from "../../../../api/products";

interface Props {
  closeModal: VoidFunction;
  onCreated:VoidFunction;
  storeId: string;
}

export const AddProductModal = ({ closeModal,onCreated, storeId }: Props) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [pictures, setPictures] = useState<File[]>([]);
  const [hideProduct, setHideProduct] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeNumber = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<number | undefined>>
  ) => {
    if (isNaN(Number(value)) || Number(value) < 0) return;
    setState(Number(value));
  };

  const handleUploadPicture = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (pictures.length === 5) {
      setErrorAlert("No pueden haber más de 5 fotos por producto");
      return;
    }
    if (e.target.files != null) {
      const picturesCopy = [...pictures];
      picturesCopy.push(e.target.files[0]);
      setPictures(picturesCopy);
    }
  };

  const handleAddProduct = async () => {
    if (!/^[\p{L}\p{N} ]{3,50}$/u.test(name)) {
      setErrorAlert("El nombre debe contener entre 3 y 50 letras");
      return;
    }

    if (!price || price <= 0) {
      setErrorAlert("El precio no puede ser 0 o menor");
      return;
    }

    if (!stock || stock < 0) {
      setErrorAlert("El stock no puede ser menor a 0");
      return;
    }

    if (pictures.length === 0) {
      setErrorAlert("Debes agregar al menos una foto del producto");
      return;
    }

    setIsLoading(true);

    const res = await uploadPicture(pictures);
    if (res === null) {
      setErrorAlert(
        "No se pudo subir las fotos, por favor intentálo de nuevo más tarde."
      );
      setIsLoading(false);
      return;
    }

    const response = await addProduct({name, details, price, stock, picturesUrl:res, statusVisible:!hideProduct, storeId});
    if(!response.success){
      setErrorAlert(response.message);
      setIsLoading(false);
      return;
    }

    onCreated();
  };

  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm">
        <form className="border border-stone-400 bg-white p-8 flex flex-col gap-4 ">
          <h2 className="text-xl font-bold text-center mb-6">
            Agregar nuevo Producto
          </h2>
          <div className="grid grid-cols-[1fr_3fr] gap-4">
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              className="border p-1 focus:outline-blue-600"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="details">Descripción: </label>
            <textarea
              id="details"
              className="border p-1 resize-none focus:outline-blue-600"
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>

            <label htmlFor="price">Precio: </label>
            <input
              type="text"
              id="price"
              className="border p-1 focus:outline-blue-600 text-right"
              autoComplete="off"
              value={price}
              onChange={(e) => handleChangeNumber(e.target.value, setPrice)}
              placeholder="0"
            />
            <label htmlFor="price">Stock:</label>
            <input
              type="text"
              id="price"
              className="border p-1 focus:outline-blue-600 text-right"
              autoComplete="off"
              value={stock}
              onChange={(e) => handleChangeNumber(e.target.value, setStock)}
              placeholder="0"
            />

            <div className="flex flex-col">
              <label htmlFor="uploadImgs">Fotos:</label>
              <label
                htmlFor="uploadImgs"
                className="border font-medium p-1 float-right hover:bg-stone-200 cursor-pointer text-center"
              >
                <input
                  type="file"
                  id="uploadImgs"
                  hidden
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleUploadPicture}
                />
                Agregar
              </label>
            </div>
            <div className="my-2 flex gap-2 h-20">
              {pictures.map((picture, index) => (
                <img
                  src={URL.createObjectURL(picture)}
                  className="size-20 object-cover"
                  alt={name ? name + index : "foto" + index}
                  key={picture.name}
                />
              ))}
            </div>

            <label htmlFor="hideProducr">Ocultar producto:</label>
            <div className="flex justify-end">
              <input
                type="checkbox"
                id="hideProduct"
                className="size-6"
                checked={hideProduct}
                onChange={() => setHideProduct((prev) => !prev)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="self-center mt-6 ">
              <LoaderSVG />
            </div>
          ) : (
            <div className="flex gap-4 justify-between mt-6">
              <button
                type="button"
                className="bg-stone-600 text-white py-2 px-4 font-medium hover:bg-stone-500 cursor-pointer"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="bg-blue-600 text-white py-2 px-4 font-medium cursor-pointer hover:bg-blue-500"
                onClick={handleAddProduct}
              >
                Agregar
              </button>
            </div>
          )}
        </form>
      {errorAlert !== "" && (
        <ErrorMessage message={errorAlert} setMessage={setErrorAlert} />
      )}
      </div>
    </>
  );
};
