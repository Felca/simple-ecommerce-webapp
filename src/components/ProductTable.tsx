import type { Product } from "./ProductCard";

interface ProductTableProps {
  products: Product[];
  onDelete: (id: number) => void;
}

export default function ProductTable({
  products,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-blue-50">
              <td className="border px-4 py-2 text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-contain mx-auto"
                />
              </td>

              <td className="border px-4 py-2">{product.title}</td>

              <td className="border px-4 py-2 max-w-2xl">
                {product.description}
              </td>

              <td className="border px-4 py-2">{product.category}</td>

              <td className="border px-4 py-2">${product.price}</td>

              <td className="border px-4 py-2">
                <button onClick={() => onDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
