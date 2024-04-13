import React from "react";
import "./Cart.css";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
import CartLanding from "./CartLanding/CartLanding";
import ShopBenefits from '../Shop/ShopBenefits/ShopBenefits'
import Footer from '../CommonComponents/Footer/Footer'

function Cart() {
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
            <div className="cart__left__box">
              <span className="cart__left__box-image">
                <img
                  src="../images/product.jpg"
                  alt=""
                  className="cart__left__box-img"
                />
              </span>
              <span className="cart__left__box-name">Product</span>
              <span className="cart__left__box-price">$100</span>
              <span className="cart__left__box-number">
                <input
                  type="numver"
                  value={10}
                  className="cart__left__box-number-input"
                />
              </span>
              <span className="cart__left__box-total">$1000</span>
            </div>
            <div className="cart__left__box">
              <span className="cart__left__box-image">
                <img
                  src="../images/product.jpg"
                  alt=""
                  className="cart__left__box-img"
                />
              </span>
              <span className="cart__left__box-name">Product</span>
              <span className="cart__left__box-price">$100</span>
              <span className="cart__left__box-number">
                <input
                  type="numver"
                  value={10}
                  className="cart__left__box-number-input"
                />
              </span>
              <span className="cart__left__box-total">$1000</span>
            </div>
          </div>
        </div>

        <div className="cart__right">
          <h2 className="cart__right-title">Cart Totals</h2>
          <div className="cart__right__price">
            <span className="cart__right__price-title">Total</span>
            <span className="cart__right__price-value">$1000</span>
          </div>
          <button className="cart__right-btn">Check Out</button>
        </div>
      </div>
      <ShopBenefits/>
      <Footer/>
    </div>
  );
}

export default Cart;
