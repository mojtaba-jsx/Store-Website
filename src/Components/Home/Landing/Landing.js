import React from "react";
import { Link} from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

import "./Landing.css";
function Landing() {
  return (
    <div className="landing">
      <div className="arrival">
        <h4 className="arrival-title">New Arrival</h4>
        <h1 className="arrival-subtitle">Discover Our New Collection</h1>
        <p className="arrival-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link className="button-link" to={'/shop'}>
        <button className="landing-btn">
          BUY NOW
          <FaCartShopping className="landing-btn-icon" />
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
