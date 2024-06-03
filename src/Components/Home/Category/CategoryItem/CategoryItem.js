import React from "react"; // Importing React library
import "./CategoryItem.css"; // Importing CSS file for CategoryItem component

// CategoryItem component definition
function CategoryItem(props) {
  return (
    <div className="category-item">
      {/* Rendering the image of the category item */}
      <img
        className="category-item__image"
        src={props.image}
        alt="product" // Alt text for accessibility
      />
      {/* Rendering the title of the category item */}
      <span className="category-item__name">{props.title}</span>
    </div>
  );
}

// Exporting the CategoryItem component as the default export of this module
export default CategoryItem;
