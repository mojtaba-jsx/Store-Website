import React from "react";
import "./CategoryItem.css";

function CategoryItem(props) {
  return (
    <div className="category-item">
      <img
        className="category-item__image"
        src={props.image}
        alt="product"
      />
      <span className="category-item__name">{props.title}</span>
    </div>
  );
}

export default CategoryItem;
