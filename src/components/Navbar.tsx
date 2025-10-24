import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-end gap-10 sticky top-0 py-6 mb-10 bg-white border-b">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/"}>Login</Link>
      </nav>
    </>
  );
}
