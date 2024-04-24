// !Importe
import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
// !icons
import { FaShopify } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

// !Componnet
function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  // !ElementsRef
  const mobileMenuRef = React.createRef();
  const searchBoxRef = React.createRef();
  const basketRef = React.createRef();

  // !Functions
  const showAndHideMobileMenu = () => {
    let mobileMenuElement = mobileMenuRef.current;
    mobileMenuElement.classList.toggle("open");
  };
  //!

  const searchBoxShowHide = () => {
    let searchBoxELement = searchBoxRef.current;
    searchBoxELement.classList.toggle("open");
  };
  //!

  const closeSearchModal = () => {
    let searchBoxELement = searchBoxRef.current;
    searchBoxELement.classList.toggle("open");
  };
  //!

  const showHidBasket = () => {
    let basketElement = basketRef.current;
    basketElement.classList.toggle("open");
  };
  //!

  const closeBasketModal = () => {
    let basketElement = basketRef.current;
    basketElement.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <span className="navbar__logo-icon">
            <FaShopify className="navbar__logo-icon-shop" />
          </span>
          <span className="navbar__logo-text">
            <a href="#" className="navbar__logo-text-link">
              Shop Website
            </a>
          </span>
        </div>

        <div className="navbar__menu">
          <ul className="navbar__menu__list">
            <li className="navbar__menu__list__item">
              <NavLink
                to={"/"}
                className={(link) =>
                  link.isActive
                    ? "active navbar__menu__list__item-link"
                    : "navbar__menu__list__item-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__menu__list__item">
              <NavLink to={"/shop"} className="navbar__menu__list__item-link">
                Shop
              </NavLink>
            </li>
            <li className="navbar__menu__list__item">
              <NavLink to={"/blog"} className="navbar__menu__list__item-link">
                Blog
              </NavLink>
            </li>
            <li className="navbar__menu__list__item">
              <NavLink
                to={"/contact"}
                className="navbar__menu__list__item-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar__btns">
          <span className="navbar__btns__user">
            <a href="#" className="navbar__btns__user-link">
              <FaUserPlus className="navbar__btns__user-link-icon" />
            </a>
          </span>

          <span className="navbar__btns__search" onClick={searchBoxShowHide}>
            <IoSearch className="navbar__btns__search-icon" />
          </span>

          <span className="navbar__btns__basket" onClick={showHidBasket}>
            <FaBasketShopping className="navbar__btns__basket-link" />
          </span>
        </div>

        <div className="mobile__menu" ref={mobileMenuRef}>
          <div className="navbar__logo">
            <span className="navbar__logo-icon">
              <FaShopify className="navbar__logo-icon-shop" />
            </span>
            <span className="navbar__logo-text">
              <a href="#" className="navbar__logo-text-link">
                Shop Website
              </a>
            </span>
          </div>
          <ul className="mobile__menu__list">
            <li className="mobile__menu__list__item">
              <a href="#" className="mobile__menu__list__item-link">
                Home
              </a>
            </li>
            <li className="mobile__menu__list__item">
              <a href="#" className="mobile__menu__list__item-link">
                Shop
              </a>
            </li>
            <li className="mobile__menu__list__item">
              <a href="#" className="mobile__menu__list__item-link">
                About
              </a>
            </li>
            <li className="mobile__menu__list__item">
              <a href="#" className="mobile__menu__list__item-link">
                Contact
              </a>
            </li>
            <li className="mobile__menu__list__item">
              <a href="#" className="mobile__menu__list__item-link">
                User
              </a>
            </li>
            <li className="mobile__menu__list__item">
              <a href="#" className="mobile__menu__list__item-link">
                Search
              </a>
            </li>
            <li className="mobile__menu__list__item">
              <a href="#" className="mobile__menu__list__item-link">
                Basket
              </a>
            </li>
          </ul>
        </div>

        <div className="search-modal" ref={searchBoxRef}>
          <span className="modal__close-btn" onClick={closeSearchModal}>
            <IoClose />
          </span>
          <div className="search-modal__wrapper">
            <span className="search-modal__title">Search Prodcuts </span>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type="text"
              className="search-modal__input"
              placeholder="Enter Product Name"
            />
            <button className="search-modal-btn">Search</button>
          </div>
        </div>

        <div className="basket" ref={basketRef}>
          <span className="modal__close-btn" onClick={closeBasketModal}>
            <IoClose />
          </span>
          <div className="basket__wrapper">
            <span className="basket__title">Products List</span>
            <div className="basket__product">
              <div className="basket__product__left">
                <img
                  src="images/product.jpg"
                  alt="product"
                  className="basket__product__left-image"
                />
              </div>

              <div className="basket__product__right">
                <span className="basket__product__right-name">Prodcut1</span>
                <span className="basket__product__right-price">$10</span>
                <span className="basket__product__right-value">8</span>
              </div>
            </div>
            <div className="basket__product">
              <div className="basket__product__left">
                <img
                  src="images/product.jpg"
                  alt="product"
                  className="basket__product__left-image"
                />
              </div>

              <div className="basket__product__right">
                <span className="basket__product__right-name">Prodcut1</span>
                <span className="basket__product__right-price">$10</span>
                <span className="basket__product__right-value">8</span>
              </div>
            </div>
            <div className="basket__product">
              <div className="basket__product__left">
                <img
                  src="images/product.jpg"
                  alt="product"
                  className="basket__product__left-image"
                />
              </div>

              <div className="basket__product__right">
                <span className="basket__product__right-name">Prodcut1</span>
                <span className="basket__product__right-price">$10</span>
                <span className="basket__product__right-value">8</span>
              </div>
            </div>
            <div className="basket__product">
              <div className="basket__product__left">
                <img
                  src="images/product.jpg"
                  alt="product"
                  className="basket__product__left-image"
                />
              </div>

              <div className="basket__product__right">
                <span className="basket__product__right-name">Prodcut1</span>
                <span className="basket__product__right-price">$10</span>
                <span className="basket__product__right-value">8</span>
              </div>
            </div>
          </div>
        </div>

        <span
          className="navbar__mobile-menu__btn"
          onClick={showAndHideMobileMenu}
        >
          <IoMenu />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
