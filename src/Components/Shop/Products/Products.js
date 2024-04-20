import React from "react";
import { useState,useEffect } from "react";
import "./Products.css";
import Product from "./Product/Product";
function Products() {

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(products=>{
      setproductsDatas(products)
    })
  })

  let [productsDatas, setproductsDatas] = useState([]);





  return (
    <div className="products">
      <div className="container">
        <div className="products__wrapper">
          {productsDatas.map((product) => (
            <Product {...product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
