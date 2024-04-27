import React from "react";
import "./Category.css";
import CategoryItem from "./CategoryItem/CategoryItem";
import { BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
function Category() {
  let [category, setCategory] = useState([
    { id: 1, title: "WomanClothes", image: "./images/category-1.jpeg" },
    { id: 2, title: "ManClothes", image: "./images/category-2.jpeg" },
    { id: 3, title: " Electronics", image: "./images/category-3.jpeg" },
    { id: 4, title: "Jewelery", image: "./images/category-4.jpeg" },
  ]);
  return (
    <div className="category">
      <h2 className="category-title">Browse The Category <BiCategoryAlt /> </h2>
      <div className="category-box">
        {category.map((item) => (
          <CategoryItem  key={item.id} {...item}  />
        ))}
      </div>
    </div>
  );
}

export default Category;
