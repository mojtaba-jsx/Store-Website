import React from "react";
import "./Category.css";
import CategoryItem from "./CategoryItem/CategoryItem";
import { BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();

  const setProductCategory = (category) => {
    sessionStorage.setItem('selectedCategory', category);
    navigate("/shop");
  };

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
      <h2 className="category-title">
        Browse The Category <BiCategoryAlt />{" "}
      </h2>
      <div className="category-box">
        {category.map((item) => (
          <div key={item.id} onClick={() => setProductCategory(item.category)}>
            <Link className="category-box-link">
              <CategoryItem {...item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
