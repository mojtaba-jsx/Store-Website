import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductInfo.css";
import Navbar from "../../../CommonComponents/Header/Navbar/Navbar";
import ProductInfoRoute from "./ProductInfoRoute/ProductInfoRoute";
import Footer from "../../../CommonComponents/Footer/Footer";
import { FaCartArrowDown, FaPencilAlt, FaStar } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import ReactLoading from "react-loading";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productValue, setProductValue] = useState(1);
  const [loading, setLoading] = useState(true);
  const [buttonText, setButtonText] = useState("Add To Cart");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart];
      for (let i = 0; i < productValue; i++) {
        updatedCart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // Update button text to "Added To Cart" temporarily
      setButtonText("Added To Cart");
      // Reset button text after 2 seconds
      setTimeout(() => {
        setButtonText("Add To Cart");
      }, 2000);
    }
  };

  const handleCategoryClick = (category) => {
    sessionStorage.setItem("selectedCategory", category);
    navigate("/shop");
  };

  return (
    <div className="product-info">
      <Navbar />
      <ProductInfoRoute />
      <div className="product-info__wrapper">
        {loading ? (
          <ReactLoading
            height={200}
            width={200}
            className="loading"
            type={"bars"}
            color={"#2ec1ac"}
          />
        ) : (
          <>
            <div className="product-info__left">
              {product && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-info__left-image"
                />
              )}
            </div>
            <div className="product-info__right">
              {product && (
                <>
                  <h1 className="product-info__title">{product.title}</h1>
                  <span className="product-info__price">${product.price}</span>
                  <span className="product-info__rate">
                    {product.rating.rate}{" "}
                    <FaStar className="product-info__rate-icon" />
                    <span className="product-info__userscomment">
                      <GiDiscussion className="product-info__userscomment-icon" />
                      By {product.rating.count} User
                    </span>
                  </span>
                  <p className="product-info__description">
                    <FaPencilAlt className="product-info__description-icon" />
                    {product.description}
                  </p>
                  <button
                    className="product-info__category"
                    onClick={() => handleCategoryClick(product.category)}
                  >
                    #{product.category}
                  </button>
                  <div className="product-info__inputs">
                    <input
                      type="number"
                      value={productValue}
                      className="product-info__inputs-number"
                      onChange={(e) => setProductValue(parseInt(e.target.value))}
                    />
                    <button
                      className="product-info__inputs-btn"
                      onClick={handleAddToCart}
                    >
                      {buttonText}{" "}
                      <FaCartArrowDown className="product-info__inputs-btn-icon" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductInfo;
