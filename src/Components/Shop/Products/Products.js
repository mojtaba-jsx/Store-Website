import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Product from "./Product/Product";
import { RingLoader } from "react-spinners";
import { LuSettings2 } from "react-icons/lu";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

function Products() {
  const [productsDatas, setProductsDatas] = useState([]);
  const [numberValue, setNumberValue] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${visibleProducts}`)
      .then((res) => res.json())
      .then((products) => {
        if (products.length < visibleProducts) {
          setAllProductsLoaded(true);
        }
        setProductsDatas(products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [visibleProducts]);

  const handleProductClick = (productId) => {
    navigate(`/shop/product/${productId}`);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumberValue(value);
    if (value !== "") {
      setVisibleProducts(Number(value));
    } else {
      setVisibleProducts(6);
    }
  };

  return (
    <>
      <div className="shop-option">
        <div className="container">
          <div className="shop-option__wrapper">
            <div className="shop-option__category">
              <span className="shop-option__category-icon">
                <LuSettings2 className="shop-option__category-icon-tag" />
              </span>
              <select className="shop-option__category-select">
                <option value="Category">Category</option>
                <option value="FilterBy">Jewelery</option>
                <option value="FilterBy">Electronics</option>
                <option value="FilterBy">Shirts</option>
              </select>
            </div>

            <span className="shop-option__square">
              <RiLayoutGridFill className="shop-option__square-icon"  />
            </span>

            <span className="shop-option__list">
              <TfiLayoutListThumbAlt className="shop-option__list-icon" />
            </span>

            <span className="shop-option-result-number">
              Showing {visibleProducts} of 20 results
            </span>
            <span className="shop-option__right-show">
              Show{" "}
              <input
                onChange={handleInputChange}
                type="number"
                value={numberValue}
                className="shop-option__right-show-input"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <div className="products__wrapper">
            {productsDatas.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <Product {...product} />
              </div>
            ))}
          </div>
          <button
            className="products-btn"
            onClick={loadMoreProducts}
            disabled={allProductsLoaded || isLoading}
          >
            {isLoading ? (
              <>
                <span>Loading</span>
                <RingLoader
                  className="loading-spinner"
                  color={"#ffffff"}
                  size={28}
                />
              </>
            ) : allProductsLoaded ? (
              "All Products Have Been Displayed :)"
            ) : (
              "Show More"
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
