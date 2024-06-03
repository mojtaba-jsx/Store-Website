// !Imports
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
// !icons
import { FaShopify } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

// Navbar component
function Navbar() {
  // State for search input and cart products
  const [searchValue, setSearchValue] = useState("");
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  // Create an array to hold unique products with their quantities
  const uniqueCartProducts = cartProducts.reduce((acc, product) => {
    // Check if the product already exists in the uniqueCartProducts array
    const existingProductIndex = acc.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      // If the product exists, increment its quantity
      acc[existingProductIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the uniqueCartProducts array
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

  // !ElementsRef
  const mobileMenuRef = React.createRef();
  const searchBoxRef = React.createRef();
  const basketRef = React.createRef();

  // !Functions
  // Toggle mobile menu visibility
  const showAndHideMobileMenu = () => {
    let mobileMenuElement = mobileMenuRef.current;
    mobileMenuElement.classList.toggle("open");
  };

  // Toggle search box visibility
  const searchBoxShowHide = () => {
    let searchBoxELement = searchBoxRef.current;
    searchBoxELement.classList.toggle("open");
  };

  // Close search modal
  const closeSearchModal = () => {
    let searchBoxELement = searchBoxRef.current;
    searchBoxELement.classList.toggle("open");
  };

  // Toggle basket visibility
  const showHidBasket = () => {
    let basketElement = basketRef.current;
    basketElement.classList.toggle("open");
  };

  // Close basket modal
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
            <span className="search-modal__title">Search Products</span>
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

            {/* Display unique cart products */}
            {uniqueCartProducts.map((product) => (
              <div className="basket__product" key={product.id}>
                <div className="basket__product__left">
                  <img
                    src={product.image}
                    alt="product"
                    className="basket__product__left-image"
                  />
                </div>

                <div className="basket__product__right">
                  <span className="basket__product__right-name">
                    {product.title.substring(0, 20) + "..."}
                  </span>
                  <span className="basket__product__right-quantity">
                    {product.quantity}
                  </span>
                  <span className="basket__product__right-price">
                    {product.price + "$"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link to={"/shop/cart"}>
            <button className="basket__btn">Go To Cart</button>
          </Link>
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
