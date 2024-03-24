import React from "react";
import "./SearchModal.css";
function SearchModal() {
  return (
    <div className="search-modal">
      <div className="search-modal__wrapper">
        <span className="search-modal__title">Search Prodcuts </span>
        <input type="text" className="search-modal__input" placeholder="Enter Product Name"/>
        <button className="search-modal-btn">Search</button>
      </div>
    </div>
  );
}

export default SearchModal;
