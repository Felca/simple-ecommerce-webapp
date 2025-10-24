import { useState } from "react";
import type { Product } from "../components/ProductCard";
import { redirect } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const stored = localStorage.getItem("seller_products");
    const products: Product[] = stored ? JSON.parse(stored) : [];

    const newId =
      products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const newProduct: Product = {
      id: newId,
      title,
      price: Number(price),
      description,
      category,
      image,
    };

    products.push(newProduct);
    localStorage.setItem("seller_products", JSON.stringify(products));

    alert("Product added!");

    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");

    redirect("/dashboard");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />
      <h1 className="pb-10">Add Product</h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <div className="flex justify-between items-center gap-10">
          <label>Title:</label>
          <input
            placeholder="enter title.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-1/2"
          ></input>
        </div>

        <div className="flex justify-between items-center gap-10">
          <label>Price:</label>
          <input
            placeholder="enter price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            type="number"
            className="w-1/2"
          ></input>
        </div>

        <div className="flex justify-between items-center gap-10">
          <label>Description:</label>
          <textarea
            placeholder="enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-1/2"
          ></textarea>
        </div>

        <div className="flex justify-between items-center gap-10">
          <label>Category:</label>
          <input
            placeholder="enter category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-1/2"
          ></input>
        </div>

        <div className="flex justify-between items-center gap-10">
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-1/2"
          ></input>
        </div>

        <button onClick={() => handleSubmit}>Save Product</button>
      </form>
    </>
  );
}
