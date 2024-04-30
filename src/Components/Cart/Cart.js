import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
import CartLanding from "./CartLanding/CartLanding";
import ShopBenefits from "../Shop/ShopBenefits/ShopBenefits";
import Footer from "../CommonComponents/Footer/Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItemsFromStorage);
  }, []);

  const handleAddToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex] = product;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="cart">
      <Navbar />
      <CartLanding />
      <div className="cart__wrapper">
        <div className="cart__left">
          <div className="cart__left__header">
            <span className="cart__left__header-box">Image</span>
            <span className="cart__left__header-box">Product</span>
            <span className="cart__left__header-box">Price</span>
            <span className="cart__left__header-box">Quantity</span>
            <span className="cart__left__header-box">Subtotal</span>
          </div>
          <div className="cart__left__boxes">
            {cartItems.map((product) => (
              <CartProduct
                key={product.id}
                {...product}
                handleAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="cart__right">
          <h2 className="cart__right-title">Cart Totals</h2>
          <div className="cart__right__price">
            <span className="cart__right__price-title">Total</span>
            <span className="cart__right__price-value">
              ${
                cartItems.reduce((total, product) => total + product.price * product.quantity, 0)
              }
            </span>
          </div>
          <button className="cart__right-btn">Check Out</button>
        </div>
      </div>
      <ShopBenefits />
      <Footer />
    </div>
  );
}

export default Cart;
