import React, { useState } from "react";
import "./OurProducts.css";
import Product from "../../Shop/Products/Product/Product";
import { FaProductHunt } from "react-icons/fa";
function OurProducts() {
  let [product, setProduct] = useState([
    { id: 1, name: "shirt", price: "100",rate:'4.2', image:'./images/product-1.jpg' },
    { id: 2, name: "cup", price: "200",rate:'2.2', image:'./images/product-1.jpg' },
    { id: 3, name: "book", price: "1000",rate:'1.2', image:'./images/product-1.jpg' },
    { id: 4, name: "jeweley", price: "800",rate:'5', image:'./images/product-1.jpg' },
  ]);

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
      <button className="our-products__btn">Show more</button>
    </div>
  );
}

export default OurProducts;
