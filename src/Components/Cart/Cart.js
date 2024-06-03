import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
import CartLanding from "./CartLanding/CartLanding";
import ShopBenefits from "../Shop/ShopBenefits/ShopBenefits";
import Footer from "../CommonComponents/Footer/Footer";

function Cart() {
  // Initialize navigation
  const navigate = useNavigate();

  // State to hold cart items and duplicate items
  const [cartItems, setCartItems] = useState([]);
  const [duplicateItems, setDuplicateItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItemsFromStorage);
    setDuplicateItems(getDuplicateItems(cartItemsFromStorage));
  }, []);

  // Handle adding products to the cart
  const handleAddToCart = (product) => {
    const existingProduct = duplicateItems.find(
      (item) => item.title === product.title
    );
    if (existingProduct) {
      const updatedDuplicateItems = duplicateItems.map((item) =>
        item.title === product.title ? { ...item, count: item.count + 1 } : item
      );
      setDuplicateItems(updatedDuplicateItems);
    } else {
      setDuplicateItems((prevItems) => [
        ...prevItems,
        { ...product, count: 1 },
      ]);
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  // Update local storage when cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync cartItems with duplicateItems
  useEffect(() => {
    setCartItems(duplicateItems);
  }, [duplicateItems]);

  // Function to get duplicate items and count them
  const getDuplicateItems = (items) => {
    const duplicateItemsMap = {};
    items.forEach((item) => {
      if (duplicateItemsMap[item.title]) {
        duplicateItemsMap[item.title].count++;
      } else {
        duplicateItemsMap[item.title] = { ...item, count: 1 };
      }
    });
    return Object.values(duplicateItemsMap);
  };

  // Navigate to the checkout page
  const goCheckoutHandler = () => {
    navigate("/shop/checkout");
  };

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
                count={
                  duplicateItems.find((item) => item.title === product.title)
                    ?.count
                }
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
              $
              {Math.floor(
                cartItems.reduce(
                  (total, product) =>
                    total +
                    product.price *
                      (duplicateItems.find(
                        (item) => item.title === product.title
                      )?.count || 1),
                  0
                )
              )}
            </span>
          </div>
          <button onClick={goCheckoutHandler} className="cart__right-btn">
            Check Out
          </button>
        </div>
      </div>
      <ShopBenefits />
      <Footer />
    </div>
  );
}

export default Cart;
