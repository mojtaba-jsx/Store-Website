import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";
import { FaStar } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
function Product(props) {
  return (
    <div className="product">
      <img src={props.image} alt="product" className="product__image" />
      <span className="product__link-text">
        Show Info
        <BiShow className="product__link-text-icon" />
      </span>

      <div className="product__info">
        <span className="product__info-name">{props.title}</span>

        <span className="product__info-price">${props.price}</span>

        <span className="product__info-rate">
          {props.rating.rate}
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
