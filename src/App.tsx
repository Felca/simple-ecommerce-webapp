import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import Shop from "./pages/Shop"
import './App.css'
import AddProduct from "./pages/AddProduct";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/add-product" element={<AddProduct />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
