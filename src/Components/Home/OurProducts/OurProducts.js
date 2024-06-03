import React, { useState, useEffect } from "react"; // Importing necessary React hooks
import { Link } from "react-router-dom"; // Importing Link component for navigation
import Slider from "react-slick"; // Importing Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Importing slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Importing slick carousel theme CSS
import "./OurProducts.css"; // Importing CSS file for OurProducts component
import Product from "../../Shop/Products/Product/Product"; // Importing Product component
import { FaProductHunt } from "react-icons/fa"; // Importing product hunt icon from react-icons

// OurProducts component definition
function OurProducts() {
  // State to manage the list of products
  let [products, setProducts] = useState([]);

  // useEffect hook to fetch products data when the component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Slider settings configuration
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    spacing: '20',
    slidesToShow: products.length >= 4 ? 4 : products.length, // Number of columns to show based on products length
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Screen size breakpoint for changing number of columns
        settings: {
          slidesToShow: 3, // Number of columns for screens with width 1024px
        },
      },
      {
        breakpoint: 768, // Screen size breakpoint for changing number of columns
        settings: {
          slidesToShow: 2, // Number of columns for screens with width 768px
        },
      },
      {
        breakpoint: 480, // Screen size breakpoint for changing number of columns
        settings: {
          slidesToShow: 1, // Number of columns for screens with width 480px
        },
      },
    ],
  };

  return (
    <div className="our-products">
      {/* Title for the our products section */}
      <h1 className="our-products__title">
        Our Products
        <FaProductHunt />
      </h1>
      {/* Slider component to display products */}
      <Slider {...settings} className="slider">
        {products.map((item) => (
          <div key={item.id} className="slider-item">
            {/* Rendering each product item */}
            <Product {...item} className='product-slider'/>
          </div>
        ))}
      </Slider>
      {/* Button to navigate to the shop page */}
      <button className="our-products__btn">
        <Link className="our-products__btn-link" to={"/shop"}>
          Show more
        </Link>
      </button>
    </div>
  );
}

// Exporting the OurProducts component as the default export of this module
export default OurProducts;
