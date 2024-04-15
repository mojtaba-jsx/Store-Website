import React from "react";
import "./ContactLanding.css";
import { IoIosArrowForward } from "react-icons/io";

function ContactLanding() {
  return (
    <div className="contact-landing">
      <div className="shadow"></div>
      <h1 className="contact-landing-title">Contact</h1>
      <div className="contact-landing__path">
        <span className="contact-landing__path-home">Home</span>

        <span className="contact-landing__path-arrow">
          <IoIosArrowForward className="contact-landing__path-arrow-icon" />
        </span>

        <span className="contact-landing__path-contact">Shop</span>
        <span className="contact-landing__path-arrow">
          <IoIosArrowForward className="contact-landing__path-arrow-icon" />
        </span>
        <span className="contact-landing__path-contact">Contact</span>
      </div>
    </div>
  );
}

export default ContactLanding;
