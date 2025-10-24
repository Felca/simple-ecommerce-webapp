export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full h-full p-4 shadow rounded-lg hover:shadow-lg hover:shadow-blue-600 transition border hover:border-cyan-500">
      <div className="flex justify-end mb-2">
        <div className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {product.category}
        </div>
      </div>

      <div className="flex justify-center mb-5 bg-gray-300">
        <img src={product.image} className="w-32 h-48 object-contain"></img>
      </div>

      <div className="flex flex-col min-h-48">
        <p className="font-medium">{product.title}</p>

        <p className="text-gray-500 grow">
          {product.description.substring(0, 60)}...
        </p>

        <p className="text-sm font-bold text-right">${product.price}</p>
      </div>
    </div>
  );
}
