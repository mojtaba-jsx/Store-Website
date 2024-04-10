import React from "react";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
import ProductInfoRoute from "./ProductInfoRoute/ProductInfoRoute";
function ProductInfo() {
  return (
    <div className="product-info">
      <Navbar />
      <ProductInfoRoute />
    </div>
  );
}

export default ProductInfo;
