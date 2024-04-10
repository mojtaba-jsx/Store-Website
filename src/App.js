import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ProductInfo from './Components/ProductInfo/ProductInfo'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product" element={<ProductInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
