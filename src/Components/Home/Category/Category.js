import React from "react"; // Importing React library
import "./Category.css"; // Importing CSS file for Category component

// Importing necessary components and icons
import CategoryItem from "./CategoryItem/CategoryItem";
import { BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Category component definition
function Category() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to set the selected product category and navigate to the shop page
  const setProductCategory = (category) => {
    sessionStorage.setItem('selectedCategory', category); // Store the selected category in session storage
    navigate("/shop"); // Navigate to the shop page
  };

  // State to manage the list of categories
  let [category, setCategory] = useState([
    {
      id: 1,
      title: "WomanClothes",
      category: "women's clothing",
      image: "./images/category-1.jpeg",
    },
    {
      id: 2,
      title: "ManClothes",
      category: "men's clothing",
      image: "./images/category-2.jpeg",
    },
    {
      id: 3,
      title: "Electronics",
      category: "electronics",
      image: "./images/category-3.jpeg",
    },
    {
      id: 4,
      title: "Jewelery",
      category: "jewelery",
      image: "./images/category-4.jpeg",
    },
  ]);

  return (
    <div className="category">
      {/* Title for the category section */}
      <h2 className="category-title">
        Browse The Category <BiCategoryAlt />{" "}
      </h2>
      <div className="category-box">
        {/* Rendering the list of categories */}
        {category.map((item) => (
          <div key={item.id} onClick={() => setProductCategory(item.category)}>
            {/* Link component for navigational purposes */}
            <Link className="category-box-link">
              {/* Rendering each category item */}
              <CategoryItem {...item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporting the Category component as the default export of this module
export default Category;
