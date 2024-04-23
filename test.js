import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import Navbar from "../../../CommonComponents/Header/Navbar/Navbar";
import ProductInfoRoute from "./ProductInfoRoute/ProductInfoRoute";
import Footer from "../../../CommonComponents/Footer/Footer";
import { FaCartArrowDown, FaPencilAlt, FaStar } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import ReactLoading from "react-loading"; // اضافه کردن این خط

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // اضافه کردن این خط

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        setLoading(false); // اضافه کردن این خط
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // اضافه کردن این خط
      });
  }, [id]);

  if (loading) { // اضافه کردن این بخش
    return <ReactLoading type={"spin"} color={"#000"} />; // اضافه کردن این خط
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  // بقیه کد‌ها

  return (
    <div className="product-info">
      <Navbar />
      <ProductInfoRoute />
      <div className="product-info__wrapper">
        {/* بقیه کد‌ها */}
      </div>
      <Footer />
    </div>
  );
}

export default ProductInfo;
