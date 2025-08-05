import { useState, useEffect } from "react";
import { AddProductModal } from "./AddProductModal";
import { getProducts } from "../../../../api/products";
import { Table } from "./Table";
import { useStoreContext } from "../../../../hooks/useStoreContext";
import { Link } from "react-router-dom";
import { BackArrowSVG } from "../../../../assets/BackArrowSVG";

export const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const {store} = useStoreContext();
  // const [searchProductInput, setSearchProductInput] = useState("");

  const fetchProducts = async () => {
    const res = await getProducts(store!.id);
    if(res.success && res.data){
      setProducts(res.data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Link to={`/${store!.name}/admin`} className="absolute left-[8%] top-16 font-bold flex gap-2 hover:text-stone-500"> <BackArrowSVG />
          Volver al Menu
        </Link>
      <div className="flex justify-between max-w-[1200px] w-full items-center my-4">
        <h2 className="text-xl font-bold">Productos</h2>
        <input
          type="text"
          name="name"
          placeholder="buscar producto"
          className="border p-2"
        />
        <button
          className="bg-blue-600 text-white font-medium p-2 hover:bg-blue-400 cursor-pointer"
          onClick={() => setShowAddProductModal(true)}
        >
          Agregar Producto
        </button>
      </div>
      <Table products={products}/>
      {showAddProductModal && (
        <AddProductModal
          closeModal={() => setShowAddProductModal(false)}
          storeId={store!.id}
          onCreated={()=>{
            fetchProducts();
            setShowAddProductModal(false);
          }}
        />
      )}
    </>
  );
};
