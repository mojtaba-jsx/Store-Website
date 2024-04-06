import React from "react";
import "./ShopLanding.css";
import { IoIosArrowForward } from "react-icons/io";
function ShopLanding() {
  return (
    <div className="shop-landing">
        <div className="shadow"></div>
      <div className="shop-landing__wrapper">
        <h1 className="shop-landing-title">Shop</h1>
        <div className="shop-landing__path">
          <span className="shop-landing__path-home">Home</span>

          <span className="shop-landing__path-arrow">
            <IoIosArrowForward className="shop-landing__path-arrow-icon" />
          </span>

          <span className="shop-landing__path-shop">Shop</span>
        </div>
      </div>
    </div>
  );
}

export default ShopLanding;
