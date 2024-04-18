import React from "react";
import { useState } from "react";
import "./Products.css";
import Product from "./Product/Product";
function Products() {
  let [productsDatas, setproductsDatas] = useState([
    {
      id: 1,
      name: "shirt",
      price: "100",
      rate: "4.2",
      image: "./images/product.jpg",
    },
    {
      id: 2,
      name: "cup",
      price: "200",
      rate: "2.2",
      image: "./images/product.jpg",
    },
    {
      id: 3,
      name: "book",
      price: "1000",
      rate: "1.2",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
    {
      id: 4,
      name: "jeweley",
      price: "800",
      rate: "5",
      image: "./images/product.jpg",
    },
  ]);
  return (
    <div className="products">
      <div className="container">
        <div className="products__wrapper">
          {productsDatas.map((product) => (
            <Product {...product}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
