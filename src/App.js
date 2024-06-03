import React from "react"; // Importing React library
import "./App.css"; // Importing CSS file for App component
import { Routes, Route } from "react-router-dom"; // Importing Routes and Route components from react-router-dom

// Importing necessary components
import Home from "./Components/Home/Home";
import Shop from './Components/Shop/Shop';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import ProductInfo from './Components/Shop/Products/ProductInfo/ProductInfo'
import Cart from './Components/Cart/Cart'
import CheckOut from './Components/CheckOut/CheckOut'
import BlogInfo from './Components/Blog/BlogInfo/BlogInfo'

// App component definition
function App() {
  return (
    <>
      {/* Setting up routes for different paths */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the shop page */}
        <Route path="/shop" element={<Shop />} />
        {/* Route for individual product info */}
        <Route path="/shop/product/:id" element={<ProductInfo />} />
        {/* Route for the blog page */}
        <Route path="/blog" element={<Blog />} />
        {/* Route for individual blog post */}
        <Route path="/blog/info" element={<BlogInfo />} />
        {/* Route for the contact page */}
        <Route path="/contact" element={<Contact />} />
        {/* Route for the shopping cart page */}
        <Route path="/shop/cart" element={<Cart />} />
        {/* Route for the checkout page */}
        <Route path="/shop/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
}

// Exporting the App component as the default export of this module
export default App;
