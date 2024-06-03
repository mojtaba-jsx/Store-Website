import React from "react";
import "./Footer.css";
import { FaShopify } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

// Component to display the footer of the website
function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        {/* Column 1: Logo and address */}
        <div className="footer__col1">
          <div className="footer__col1__logo">
            <FaShopify className="footer__col1__logo-icon" /> Shop Website
          </div>
          <p className="footer__col1__text">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Column 2: Links to different pages */}
        <div className="footer__col2">
          <span className="footer__col2-title">Links</span>
          <ul className="footer__col2__list">
            <li className="footer__col2__list__item">
              <a href="#" className="footer__col2__list__item-link">
                Home
              </a>
            </li>
            <li className="footer__col2__list__item">
              <a href="#" className="footer__col2__list__item-link">
                Shop
              </a>
            </li>
            <li className="footer__col2__list__item">
              <a href="#" className="footer__col2__list__item-link">
                About
              </a>
            </li>
            <li className="footer__col2__list__item">
              <a href="#" className="footer__col2__list__item-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Help links */}
        <div className="footer__col3">
          <span className="footer__col3-title">Help</span>
          <ul className="footer__col3__list">
            <li className="footer__col3__list__item">
              <a href="#" className="footer__col3__list__item-link">
                Payment Options
              </a>
            </li>
            <li className="footer__col3__list__item">
              <a href="#" className="footer__col3__list__item-link">
                Returns
              </a>
            </li>
            <li className="footer__col3__list__item">
              <a href="#" className="footer__col3__list__item-link">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter subscription */}
        <div className="footer__col4">
          <span className="footer__col4-title">Newsletter</span>
          <div className="footer__col4__newsletter">
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="footer__col4__newsletter-input"
            />
            <button className="footer__col4__newsletter-btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      
      {/* Footer credit */}
      <span className="footer__text">
        Developed By
        <a href="https://github.com/mojtaba-jsx" className="footer__text-link">
          Mojtaba.jsx
        </a>
      </span>
    </div>
  );
}

export default Footer;
