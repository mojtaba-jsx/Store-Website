import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Shop from './Components/Shop/Shop';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import ProductInfo from './Components/ProductInfo/ProductInfo'
import Cart from './Components/Cart/Cart'
import CheckOut from './Components/CheckOut/CheckOut'
import BlogInfo from './Components/Blog/BlogInfo/BlogInfo'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product" element={<ProductInfo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/info" element={<BlogInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/shop/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
}

export default App;
