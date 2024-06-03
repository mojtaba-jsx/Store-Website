import React from "react";
import "./ContactLanding.css"; // Importing CSS styles
import { IoIosArrowForward } from "react-icons/io"; // Importing an arrow icon from react-icons library

function ContactLanding() {
  return (
    <div className="contact-landing"> {/* Container for the contact section */}
      <div className="shadow"></div> {/* A shadow effect */}
      <h1 className="contact-landing-title">Contact</h1> {/* Title for the contact section */}
      <div className="contact-landing__path"> {/* Breadcrumb navigation */}
        <span className="contact-landing__path-home">Home</span> {/* Link to Home */}
        <span className="contact-landing__path-arrow"> {/* Arrow separator */}
          <IoIosArrowForward className="contact-landing__path-arrow-icon" /> {/* Arrow icon */}
        </span>
        <span className="contact-landing__path-shop">Shop</span> {/* Link to Shop */}
        <span className="contact-landing__path-arrow"> {/* Arrow separator */}
          <IoIosArrowForward className="contact-landing__path-arrow-icon" /> {/* Arrow icon */}
        </span>
        <span className="contact-landing__path-contact">Contact</span> {/* Current page */}
      </div>
    </div>
  );
}

export default ContactLanding; // Exporting the component
