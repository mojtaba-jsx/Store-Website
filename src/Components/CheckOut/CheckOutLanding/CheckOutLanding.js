import React from "react";
import "./CheckOutLanding.css";
import { IoIosArrowForward } from "react-icons/io";
function CheckOutLanding() {
  return (
    <div className="checkout-landing">
      <div className="shadow"></div>
      <h1 className="checkout-landing-title">Checkout</h1>
      <div className="checkout-landing__path">
        <span className="checkout-landing__path-home">Home</span>

        <span className="checkout-landing__path-arrow">
          <IoIosArrowForward className="checkout-landing__path-arrow-icon" />
        </span>

        <span className="checkout-landing__path-cart">Shop</span>
        <span className="checkout-landing__path-arrow">
          <IoIosArrowForward className="checkout-landing__path-arrow-icon" />
        </span>
        <span className="checkout-landing__path-cart">Checkout</span>
      </div>
    </div>
  );
}

export default CheckOutLanding;
