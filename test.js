import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import Navbar from "../../../CommonComponents/Header/Navbar/Navbar";
import ProductInfoRoute from "./ProductInfoRoute/ProductInfoRoute";
import Footer from "../../../CommonComponents/Footer/Footer";
import { FaCartArrowDown, FaPencilAlt, FaStar } from "react-icons/fa";


function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(product => {
        setProduct(product);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-info">
      <Navbar />
      <ProductInfoRoute />
      <div className="product-info__wrapper">
        <div className="product-info__left">
          <img
            src={product.image}
            alt={product.title}
            className="product-info__left-image"
          />
        </div>
        <div className="product-info__right">
          <h1 className="product-info__title">{product.title}</h1>
          <span className="product-info__price">{product.price}</span>
          <span className="product-info__rate">
            {product.rating.rate} <FaStar className="product-info__rate-icon" />
          </span>
          <p className="product-info__description">
            <FaPencilAlt className="product-info__description-icon" />
            {product.description}
          </p>
          <button className="product-info__category">{product.category}</button>
          <span className="product-info__stock">In Stock : {product.rating.count}</span>
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
      <Footer />
    </div>
  );
}

export default ProductInfo;
