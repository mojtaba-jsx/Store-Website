import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurProducts.css";
import Product from "../../Shop/Products/Product/Product";
import { FaProductHunt } from "react-icons/fa";

function OurProducts() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    spacing: '20',
    slidesToShow: products.length >= 4 ? 4 : products.length, // تعداد ستون‌های اسلایدر
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // اندازه صفحه برای تغییر تعداد ستون‌ها
        settings: {
          slidesToShow: 3, // تعداد ستون‌های اسلایدر برای صفحات با اندازه 1024px
        },
      },
      {
        breakpoint: 768, // اندازه صفحه برای تغییر تعداد ستون‌ها
        settings: {
          slidesToShow: 2, // تعداد ستون‌های اسلایدر برای صفحات با اندازه 768px
        },
      },
      {
        breakpoint: 480, // اندازه صفحه برای تغییر تعداد ستون‌ها
        settings: {
          slidesToShow: 1, // تعداد ستون‌های اسلایدر برای صفحات با اندازه 480px
        },
      },
    ],
  };

  return (
    <div className="our-products">
      <h1 className="our-products__title">
        Our Products
        <FaProductHunt />
      </h1>
      <Slider {...settings} className="slider">
        {products.map((item) => (
          <div key={item.id}>
            <Product {...item}  className='product-slider'/>
          </div>
        ))}
      </Slider>
      <button className="our-products__btn">
        <Link className="our-products__btn-link" to={"/shop"}>
          Show more
        </Link>
      </button>
    </div>
  );
}

export default OurProducts;
