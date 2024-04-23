import React from 'react'
import './ProductInfoRoute.css'
import { IoIosArrowForward } from "react-icons/io";
 function ProductInfoRoute() {
  return (
    <div className='product-info-route'>
        <div className="product-info-route__wrapper">
            <span className="product-info-route-home">Home</span>

            <span className="product-info-route-icon">
            <IoIosArrowForward className='product-info-route-icon-tag' />
            </span>

            <span className="product-info-route-shop">Shop</span>

            <span className="product-info-route-icon">
            <IoIosArrowForward className='product-info-route-icon-tag' />
            </span>

            <span className="product-info-route-product-name">
                Product
            </span>
        </div>
    </div>
  )
}

export default ProductInfoRoute