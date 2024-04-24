import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Product from "./Product/Product";
import { RingLoader } from "react-spinners";

function Products() {
  const [productsDatas, setProductsDatas] = useState([]);
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

  return (
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
  );
}

export default Products;
