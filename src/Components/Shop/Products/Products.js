import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Product from "./Product/Product";
import { RingLoader } from "react-spinners";
import { LuSettings2 } from "react-icons/lu";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

function Products() {
  const [productsDatas, setProductsDatas] = useState([]);
  const [numberValue, setNumberValue] = useState("6");
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleProductClick = useCallback(
    (productId) => {
      navigate(`/shop/product/${productId}`);
    },
    [navigate]
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value <= 20) {
      setNumberValue(value);
      setVisibleProducts(Number(value));
      setAllProductsLoaded(Number(value) === 20);
      setErrorMessage("");
    } else {
      setNumberValue("");
      setVisibleProducts(0);
      setAllProductsLoaded(true);
      setErrorMessage("تعداد محصولات بیش از حد مجاز است");
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
                <option value="Category" >
                  Category
                </option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="men's clothing">Mens Clothing</option>
                <option value="women's clothing">Woman Clothing</option>
              </select>
            </div>

            <span className="shop-option__square">
              <RiLayoutGridFill className="shop-option__square-icon" />
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
            {numberValue !== "" && numberValue !== "0" ? (
              productsDatas.map((product) => (
                <div key={product.id} onClick={() => handleProductClick(product.id)}>
                  <Product {...product} />
                </div>
              ))
            ) : numberValue === "0" ? (
              <div className="no-products-message">No products to display.</div>
            ) : (
              <div className="error-message">The amount of input is greater than the number of products</div>
            )}
          </div>
          {numberValue !== "0" && (
            <button
              className="products-btn"
              onClick={loadMoreProducts}
              disabled={allProductsLoaded || isLoading}
            >
              {isLoading ? (
                <>
                  <span>Loading</span>
                  <RingLoader className="loading-spinner" color={"#ffffff"} size={28} />
                </>
              ) : allProductsLoaded ? (
                "All Products Have Been Displayed :)"
              ) : (
                "Show More"
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
