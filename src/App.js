import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Cart from "./Components/Add_To_Cart/Cart";
import { createContext, useState } from "react";
import Pagenotfound from "./Components/PageNotFound/Pagenotfound";

export const Context = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Context.Provider value={{cart, setCart}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Pagenotfound/>} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
