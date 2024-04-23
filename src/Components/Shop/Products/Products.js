import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // ایمپورت `useNavigate`
import "./Products.css";
import Product from "./Product/Product";

function Products() {
  const [productsDatas, setproductsDatas] = useState([]);
  const navigate = useNavigate();  // استفاده از `useNavigate` به جای `useHistory`

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(products => {
        setproductsDatas(products);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/shop/product/${productId}`);  // استفاده از `navigate`
  };

  return (
    <div className="products">
      <div className="container">
        <div className="products__wrapper">
          {productsDatas.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product.id)}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
