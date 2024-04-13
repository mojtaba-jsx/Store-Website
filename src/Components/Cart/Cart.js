import React from "react";
import "./Cart.css";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
import CartLanding from './CartLanding/CartLanding'
function Cart() {
  return (
    <div className="cart">
      <Navbar />
      <CartLanding/>
      <div className="cart__wrapper">
        
      </div>
    </div>
  );
}

export default Cart;
