import { ProductCard } from "./ProductCard";

interface Props {
  products : Product[];
}

export const ProductsContainer = ({products}:Props) => {
  return (
   <div className="flex max-w-[1200px] m-auto">
    <aside className=" w-[24ch] py-6 flex flex-col">
      <label htmlFor="search">Buscar:</label>
      <input type="text" id="serach" className="p-2 border mb-6"/>
      <label htmlFor="orderby">Ordenar por:</label>
      <select id="orderby" className="text-sm p-2 mb-6">
        <option value="priceltog" >Menor precio primero</option>
        <option value="pricegtol" >Mayor precio primero</option>
        <option value="datemostrecent" >Más recientes primero</option>
        <option value="datelessrecent" >Más anitguos primero</option>
      </select>
      <label htmlFor="filter">Filtrar</label>
    </aside>
     <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,250px))] gap-4 w-4/5  p-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
   </div>
  );
};
