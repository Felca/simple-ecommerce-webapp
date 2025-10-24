import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import type { Product } from "../components/ProductCard";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem("seller_products");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => setProducts(data));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("seller_products", JSON.stringify(products));
    }
  }, [products]);

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-10">
        <h1>Dashboard</h1>

        <div className="flex flex-col md:flex-row justify-items-end items-center gap-10">
          <div className="border-2 w-full py-4 px-6 rounded-2xl">
            <p>Total Customers</p>
            <p className="text-2xl font-bold">100</p>
            <p>7% increase</p>
          </div>

          <div className="border-2 w-full py-4 px-6 rounded-2xl">
            <p>Total Sales</p>
            <p className="text-2xl font-bold">$45.000</p>
            <p>7% increase</p>
          </div>

          <div className="border-2 w-full py-4 px-6 rounded-2xl">
            <p>Total Orders</p>
            <p className="text-2xl font-bold">1000</p>
            <p>7% increase</p>
          </div>
        </div>

        <div className="flex md:justify-end justify-start">
          <Link to={"/add-product"}>+ Add Product</Link>
        </div>

        <div>
          <ProductTable products={products} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
