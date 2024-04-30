import React, { useState } from "react";
import "./CartProduct.css";

function CartProduct({ id, image, title, price }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="card-product__box">
      <span className="card-product__box-image">
        <img src={image} alt="" className="card-product__box-img" />
      </span>
      <span className="card-product__box-name">{title}</span>
      <span className="card-product__box-price">${price}</span>
      <span className="card-product__box-number">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="card-product__box-number-input"
        />
      </span>
      <span className="card-product__box-total">${ Math.floor(price * quantity)}</span>
    </div>
  );
}

export default CartProduct;
