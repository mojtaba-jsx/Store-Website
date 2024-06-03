import React from "react"; // Importing React library
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import { FaCartShopping } from "react-icons/fa6"; // Importing shopping cart icon from react-icons

import "./Landing.css"; // Importing CSS file for Landing component

// Landing component definition
function Landing() {
  return (
    <div className="landing">
      <div className="arrival">
        {/* Title for the new arrival section */}
        <h4 className="arrival-title">New Arrival</h4>
        {/* Subtitle for the new collection */}
        <h1 className="arrival-subtitle">Discover Our New Collection</h1>
        {/* Description text for the new collection */}
        <p className="arrival-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        {/* Link to the shop page */}
        <Link className="button-link" to={'/shop'}>
          <button className="landing-btn">
            BUY NOW
            {/* Shopping cart icon inside the button */}
            <FaCartShopping className="landing-btn-icon" />
          </button>
        </Link>
      </div>
    </div>
  );
}

// Exporting the Landing component as the default export of this module
export default Landing;
