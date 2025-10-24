import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import type { Product } from "../components/ProductCard";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem("seller_products");
    return stored ? JSON.parse(stored) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // filter search & category
  const filteredProducts = products.filter((p) => {
    const matchesSeach = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesCategory && matchesSeach;
  });

  const categoryOptions = ["all", ...new Set(products.map((p) => p.category))];

  // get all products
  useEffect(() => {
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => setProducts(data));
    }
  }, []);

  // store evvery time product get updated
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("seller_products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <>
      <Navbar />
      <h1>Shop</h1>

      <div className="my-5 flex justify-start items-center gap-10">
        <input
          className="border p-2 rounded w-full md:w-1/2"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptions.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* map all products */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map((item) => (
          <>
            <div key={item.id} className="flex flex-col">
              <ProductCard product={item} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

// font
// DMMONO + ROBOTO
