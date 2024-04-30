import React from "react";
import "./CartProduct.css";
function CartProduct() {
  return (
    <div className="card-product__box">
      <span className="card-product__box-image">
        <img
          src="../images/product.jpg"
          alt=""
          className="card-product__box-img"
        />
      </span>
      <span className="card-product__box-name">Product</span>
      <span className="card-product__box-price">$100</span>
      <span className="card-product__box-number">
        <input
          type="numver"
          value={10}
          className="card-product__box-number-input"
        />
      </span>
      <span className="card-product__box-total">$1000</span>
    </div>
  );
}

export default CartProduct;
