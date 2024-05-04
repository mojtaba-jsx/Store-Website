import React, { useState } from "react";
import "./CartProduct.css";

function CartProduct({ id, image, title, price, count, handleAddToCart }) {
  const [quantity, setQuantity] = useState(count); // تغییر اینجا

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
          onChange={handleQuantityChange} // تغییر اینجا
          className="card-product__box-number-input"
        />
      </span>
      <span className="card-product__box-total">${ Math.floor(price * quantity)}</span>
      {/* <span className="card-product__box-count">{count}</span> */}
    </div>
  );
}

export default CartProduct;
