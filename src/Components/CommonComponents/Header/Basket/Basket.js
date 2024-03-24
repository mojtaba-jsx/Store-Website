import React from "react";
import "./Basket.css";
function Basket() {
  return (
    <div className="basket">
      <div className="basket__wrapper">
        <span className="basket__title">Products List</span>
        <div className="basket__product">
          <div className="basket__product__left">
            <img
              src="images/product-1.jpg"
              alt="product"
              className="basket__product__left-image"
            />
          </div>

          <div className="basket__product__right">
            <span className="basket__product__right-name">Prodcut1</span>
            <span className="basket__product__right-price">$10</span>
            <span className="basket__product__right-value">8</span>
          </div>
        </div>
        <div className="basket__product">
          <div className="basket__product__left">
            <img
              src="images/product-1.jpg"
              alt="product"
              className="basket__product__left-image"
            />
          </div>

          <div className="basket__product__right">
            <span className="basket__product__right-name">Prodcut1</span>
            <span className="basket__product__right-price">$10</span>
            <span className="basket__product__right-value">8</span>
          </div>
        </div>
        <div className="basket__product">
          <div className="basket__product__left">
            <img
              src="images/product-1.jpg"
              alt="product"
              className="basket__product__left-image"
            />
          </div>

          <div className="basket__product__right">
            <span className="basket__product__right-name">Prodcut1</span>
            <span className="basket__product__right-price">$10</span>
            <span className="basket__product__right-value">8</span>
          </div>
        </div>
        <div className="basket__product">
          <div className="basket__product__left">
            <img
              src="images/product-1.jpg"
              alt="product"
              className="basket__product__left-image"
            />
          </div>

          <div className="basket__product__right">
            <span className="basket__product__right-name">Prodcut1</span>
            <span className="basket__product__right-price">$10</span>
            <span className="basket__product__right-value">8</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
