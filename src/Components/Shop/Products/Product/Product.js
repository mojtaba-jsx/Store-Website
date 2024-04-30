import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";

function Product({ image, title, price, rating, productId, handleProductClick, handleAddToCart }) {
  const location = useLocation();
  const displayMode = 'grid';

  const showButton = location.pathname !== "/";
  const productClass = location.pathname === "/" ? "product product--short" : "product";
  const disableHover = location.pathname === "/";
  const listMode = displayMode === "list";

  return (
    <div className={`${productClass} ${listMode ? "list-mode" : ""}`}>
      <img
        src={image}
        alt="product"
        className={`product__image ${disableHover ? "disable-hover" : ""}`}
        onClick={() => handleProductClick(productId)}
      />
      {location.pathname !== "/" && (
        <Link to="/" className="product__link-text">
          Show Info
          <BiShow className="product__link-text-icon" />
        </Link>
      )}

      <div className="product__info">
        <span className="product__info-name">{title}</span>
        <span className="product__info-price">${price}</span>
        <span className="product__info-rate">
          {rating.rate} <FaStar className="product__info-rate-icon" />
        </span>
      </div>
      {showButton && (
        <button className="product__btn" onClick={() => handleAddToCart(productId)}>
          <span className="product__btn-text">Add To</span>
          <BsCartCheckFill className="product__btn-icon" />
        </button>
      )}
    </div>
  );
}

export default Product;
