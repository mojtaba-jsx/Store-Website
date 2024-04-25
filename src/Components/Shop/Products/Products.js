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
  const [category, setCategory] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const limit = visibleProducts;
    const offset = (pageNumber - 1) * visibleProducts;
    let apiUrl;
    if (category === "all") {
      apiUrl = `https://fakestoreapi.com/products?limit=${limit}&offset=${offset}`;
    } else {
      apiUrl = `https://fakestoreapi.com/products/category/${category}?limit=${limit}&offset=${offset}`;
    }
    fetch(apiUrl)
      .then((res) => {
        const totalCount = res.headers.get('X-Total-Count');
        setTotalProductsCount(Number(totalCount));
        return res.json();
      })
      .then((products) => {
        if (products.length < visibleProducts) {
          setAllProductsLoaded(true);
        }
        setProductsDatas((prevProducts) => {
          const newProducts = products.filter(
            (product) => !prevProducts.some((prevProduct) => prevProduct.id === product.id)
          );
          return [...prevProducts, ...newProducts];
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [visibleProducts, category, pageNumber]);

  useEffect(() => {
    if (category === "all") {
      setNumberValue("6");
    } else {
      setNumberValue("6");
      setVisibleProducts(6);
    }
  }, [category]);

  const handleProductClick = useCallback(
    (productId) => {
      navigate(`/shop/product/${productId}`);
    },
    [navigate]
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
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
      setErrorMessage("The amount of input is greater than the number of products");
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setPageNumber(1);
    setProductsDatas([]);
    if (selectedCategory === "all") {
      setNumberValue("6");
    } else {
      setNumberValue("6");
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
              <select 
                className="shop-option__category-select"
                onChange={handleCategoryChange}
                value={category}
              >
                <option value="all">All Products</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
            </div>

            <span className="shop-option__square">
              <RiLayoutGridFill className="shop-option__square-icon" />
            </span>

            <span className="shop-option__list">
              <TfiLayoutListThumbAlt className="shop-option__list-icon" />
            </span>

            <span className="shop-option-result-number">
              Showing {productsDatas.length} of {category === "all" ? totalProductsCount : 20} results
            </span>
            <span className="shop-option__right-show">
              Show{" "}
              <input
                onChange={handleInputChange}
                type="number"
                value={numberValue}
                className="shop-option__right-show-input"
                disabled={category !== "all"}  // Disable input if category is not "all"
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
              <div className="error-message">{errorMessage}</div>
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
