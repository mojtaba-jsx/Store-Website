import React from "react";
import "./CartLanding.css";
import { IoIosArrowForward } from "react-icons/io";

// Component to display the landing section of the cart page
function CartLanding() {
  return (
    <div className="cart-landing">
      {/* Shadow overlay */}
      <div className="shadow"></div>
      
      {/* Title of the cart landing section */}
      <h1 className="cart-landing-title">cart</h1>
      
      {/* Breadcrumb navigation */}
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
