import React from "react";
import "./CheckOutLanding.css";
import { IoIosArrowForward } from "react-icons/io";

// Component to display the landing section of the checkout page
function CheckOutLanding() {
  return (
    <div className="checkout-landing">
      {/* Shadow overlay */}
      <div className="shadow"></div>

      {/* Title of the checkout landing section */}
      <h1 className="checkout-landing-title">Checkout</h1>

      {/* Breadcrumb navigation */}
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
