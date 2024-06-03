import React, { useState } from "react";
import "./CartProduct.css";

// Component to display a single product in the cart
function CartProduct({ id, image, title, price, count, handleAddToCart }) {
  // State to manage the quantity of the product
  const [quantity, setQuantity] = useState(count);

  // Handle changes in the product quantity input
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="card-product__box">
      {/* Product image */}
      <span className="card-product__box-image">
        <img src={image} alt="" className="card-product__box-img" />
      </span>

      {/* Product title */}
      <span className="card-product__box-name">{title}</span>

      {/* Product price */}
      <span className="card-product__box-price">${price}</span>

      {/* Product quantity */}
      <span className="card-product__box-number">{quantity}</span>

      {/* Total price for this product (price * quantity) */}
      <span className="card-product__box-total">${Math.floor(price * quantity)}</span>
    </div>
  );
}

export default CartProduct;
