import { ProductPictures } from "./ProductPictures";

interface Props {
  products: Product[];
}

export const Table = ({ products }: Props) => {
  return (
    <table className="w-[90vw] p-4 border border-sky-100">
      <thead>
        <tr className="bg-sky-50 h-12">
          <th className="p-2 text-left font-bold w-[32ch]">Id</th>
          <th className="p-2 text-left font-bold">Nombre</th>
          <th className="p-2 text-left font-bold">Detalles</th>
          <th className="p-2 text-left font-bold">Precio</th>
          <th className="p-2 text-left font-bold">Stock</th>
          <th className="p-2 text-left font-bold">Estado Visible</th>
          <th className="p-2 text-left font-bold">Fotos</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr
            key={product.id}
            className={
              index % 2 ? "bg-sky-50 " : ""
            }
          >
            <td className="p-2 text-left font-medium text-sm">{product.id}</td>
            <td className="p-2 text-left font-medium">{product.name}</td>
            <td className="p-2 text-left font-medium whitespace-pre-line text-sm">
              {product.details}
            </td>
            <td className="p-2 text-left font-medium">{product.price}</td>
            <td className="p-2 text-left font-medium">{product.stock}</td>
            <td className="p-2 text-left font-medium">
              {product.statusVisible ? (
                <span>Visible</span>
              ) : (
                <span>Oculto</span>
              )}
            </td>
            <td className="py-4 text-left font-medium">
              <ProductPictures
                urls={product.picturesUrl}
                productName={product.name}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
