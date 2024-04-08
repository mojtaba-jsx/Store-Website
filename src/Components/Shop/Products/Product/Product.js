import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
function Product(props) {
  return (
    <div className="product">
      <img src={props.image} alt="product" className="product__image" />
      <div className="product__info">
        <span className="product__info-name">{props.name}</span>

        <span className="product__info-price">${props.price}</span>

        <span className="product__info-rate">
          {props.rate} <FaStar className="product__info-rate-icon" />
        </span>
      </div>
      <button className="product__btn">
        Add To
        <FaShoppingBasket className="product__btn-icon" />
      </button>
    </div>
  );
}

export default Product;
