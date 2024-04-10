import React from "react";
import "./ProductInfo.css";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
import ProductInfoRoute from "./ProductInfoRoute/ProductInfoRoute";
import Footer from "../CommonComponents/Footer/Footer";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function ProductInfo() {
  return (
    <div className="product-info">
      <Navbar />
      <ProductInfoRoute />
      <div className="product-info__wrapper">
        <div className="product-info__left">
          <img
            src="../images/product.jpg"
            alt="product"
            className="product-info__left-image"
          />
        </div>
        <div className="product-info__right">
          <h1 className="product-info__title">Book</h1>
          <span className="product-info__price">$100</span>
          <span className="product-info__rate">
            4.2 <FaStar className="product-info__rate-icon" />
          </span>
          <p className="product-info__description">
            <FaPencilAlt className="product-info__description-icon" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            veritatis quibusdam eaque obcaecati. Aliquam tenetur ad nihil velit
            omnis quidem.
          </p>
          <button className="product-info__category">#Mens Clothing</button>
          <span className="product-info__stock">In Stock : 200</span>
          <div className="product-info__inputs">
            <input
              type="number"
              value={10}
              className="product-info__inputs-number"
            />
            <button className="product-info__inputs-btn">
              Add To Cart{" "}
              <FaCartArrowDown className="product-info__inputs-btn-icon" />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductInfo;
