import React from "react";
import "./CartLanding.css";
import { IoIosArrowForward } from "react-icons/io";
function CartLanding() {
  return (
    <div className="cart-landing">
      <div className="shadow"></div>
      <h1 className="cart-landing-title">cart</h1>
      <div className="cart-landing__path">
        <span className="cart-landing__path-home">Home</span>

        <span className="cart-landing__path-arrow">
          <IoIosArrowForward className="cart-landing__path-arrow-icon" />
        </span>

        <span className="cart-landing__path-cart">Shop</span>
        <span className="cart-landing__path-arrow">
          <IoIosArrowForward className="cart-landing__path-arrow-icon" />
        </span>
        <span className="cart-landing__path-cart">Cart</span>
      </div>
    </div>
  );
}

export default CartLanding;
