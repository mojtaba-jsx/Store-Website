// !Importe
import React from "react";
import "./Navbar.css";
// !icons
import { FaShopify } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";

// !Componnet
function Navbar() {
  // !ElementsRef
  const mobileMenuRef = React.createRef();
  const searchBoxRef = React.createRef();

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

  const closeModal = () => {
    let searchBoxELement = searchBoxRef.current;
    searchBoxELement.classList.toggle("open");
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
              <FaUserPlus className="navbar__btns__user-link-icon" />
            </a>
          </span>

          <span className="navbar__btns__search" onClick={searchBoxShowHide}>
            <IoSearch className="navbar__btns__search-icon" />
          </span>

          <span className="navbar__btns__basket">
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
          <span className="search-modal__close" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
          <div className="search-modal__wrapper">
            <span className="search-modal__title">Search Prodcuts </span>
            <input
              type="text"
              className="search-modal__input"
              placeholder="Enter Product Name"
            />
            <button className="search-modal-btn">Search</button>
          </div>
        </div>

        <span
          className="navbar__mobile-menu__btn"
          onClick={showAndHideMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
