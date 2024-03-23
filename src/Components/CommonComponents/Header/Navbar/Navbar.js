import React from "react";
import "./Navbar.css";
// !icons
import { FaShopify } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-icon">
          <FaShopify />
        </span>
        <span className="navbar__logo-text">Shop Website</span>
      </div>

      <div className="navbar__menu">
        <ul className="navbar__menu__list">
          <li className="navbar__menu__list__item">
            <a href="#" className="navbar__menu__list__item-link">
              Home
            </a>
          </li>
          <li className="navbar__menu__list__item">
            <a href="#" className="navbar__menu__list__item-link">
              Shop
            </a>
          </li>
          <li className="navbar__menu__list__item">
            <a href="#" className="navbar__menu__list__item-link">
              About
            </a>
          </li>
          <li className="navbar__menu__list__item">
            <a href="#" className="navbar__menu__list__item-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar__btns">
        <span className="navbar__btns__user">
          <a href="#" className="navbar__btns__user-link">
            <FaUserPlus />
          </a>
        </span>

        <span className="navbar__btns__search">
          <IoSearch />
        </span>

        <span className="navbar__btns__basket">
          <FaBasketShopping />
        </span>
      </div>
      
    </div>
  );
}

export default Navbar;
