import React, { useState } from "react";
import "./ShopOption.css";
import { LuSettings2 } from "react-icons/lu";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

function ShopOption({ onShowNumberChange }) {
  const [showNumber, setShowNumber] = useState(1);

  const handleShowNumberChange = (e) => {
    const value = parseInt(e.target.value);
    setShowNumber(value);
    onShowNumberChange(value);
  };

  return (
    <div className="shop-option">
      <div className="container">
        <div className="shop-option__wrapper">
          <div className="shop-option__category">
            <span className="shop-option__category-icon">
              <LuSettings2 className="shop-option__category-icon-tag" />
            </span>
            <select className="shop-option__category-select">
              <option value="Category">Category</option>
              <option value="Jewelery">Jewelery</option>
              <option value="Electronics">Electronics</option>
              <option value="Shirts">Shirts</option>
            </select>
          </div>

          <span className="shop-option__square">
            <RiLayoutGridFill className="shop-option__square-icon" />
          </span>

          <span className="shop-option__list">
            <TfiLayoutListThumbAlt className="shop-option__list-icon" />
          </span>

          <span className="shop-option-result-number">
            Showing 1–16 of 32 results
          </span>
          <span className="shop-option__right-show">
            Show <input onChange={handleShowNumberChange} type="number" value={showNumber} className="shop-option__right-show-input" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShopOption;
