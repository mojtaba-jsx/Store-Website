import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import "./OurProducts.css";
import Product from "../../Shop/Products/Product/Product";
import { FaProductHunt } from "react-icons/fa";
function OurProducts() {

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=4')
    .then(res=>res.json())
    .then(products=>{
      setProduct(products)
      // console.log(products);
    })
  })


  let [product, setProduct] = useState([]);

  return (
    <div className="our-products">
      <h1 className="our-products__title">
        Our Products
        <FaProductHunt />
      </h1>
      <div className="our-products__wrapper">
        {product.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
      <button className="our-products__btn">
        <Link className="our-products__btn-link" to={'/shop'}>        Show more</Link>

        </button>
    </div>
  );
}

export default OurProducts;
