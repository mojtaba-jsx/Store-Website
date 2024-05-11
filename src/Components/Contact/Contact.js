import React from "react";
import "./Contact.css";
import ContactLanding from "./ContactLanding/ContactLanding";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
import ShopBenefits from "../Shop/ShopBenefits/ShopBenefits";
import Footer from "../CommonComponents/Footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <ContactLanding />
      <div className="contact__wrapper">
        <div className="contact__top">
          <h2 className="contact__top__title">Get In Touch With Us</h2>
          <p className="contact__top__text">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="contact__bottom">
          <div className="contact__bottom__left">
            <div className="contact__bottom__left__box">
              <div className="contact__bottom__left__box-left">
                <FaLocationDot className="contact__bottom__left__box-left-icon" />
              </div>
              <div className="contact__bottom__left__box-right">
                <h3 className="contact__bottom__left__box-right-title">
                  Address
                </h3>
                <p className="contact__bottom__left__box-right-text">
                  Iran - Isfahan Is A Beautiful Place With Good Weather In The
                  Heart Of Beautiful Iran
                </p>
              </div>
            </div>

            <div className="contact__bottom__left__box">
              <div className="contact__bottom__left__box-left">
                <FaPhoneAlt className="contact__bottom__left__box-left-icon" />
              </div>
              <div className="contact__bottom__left__box-right">
                <h3 className="contact__bottom__left__box-right-title">
                  Phone
                </h3>
                <span className="contact__bottom__left__box-right-title-text">
                  Mobile: 09218750654
                </span>
                <span className="contact__bottom__left__box-right-title-text">
                  Hotline: 09218750654
                </span>
              </div>
            </div>

            <div className="contact__bottom__left__box">
              <div className="contact__bottom__left__box-left">
                <IoTime className="contact__bottom__left__box-left-icon" />
              </div>
              <div className="contact__bottom__left__box-right">
                <h3 className="contact__bottom__left__box-right-title">
                  Working Time
                </h3>
                <span className="contact__bottom__left__box-right-title-text">
                  Monday-Friday: 9:00 - 22:00
                </span>
                <span className="contact__bottom__left__box-right-title-text">
                  Saturday-Sunday: 9:00 - 21:00
                </span>
              </div>
            </div>
          </div>

          <div className="contact__bottom__right">
            <form className="contact__bottom__right-form">
              <div className="contact__bottom__right-form-name">
                <label>Your name</label>
                <input
                  type="text"
                  placeholder="Whats Your Name ?"
                  className="contact__bottom__right-form-name-input"
                />
              </div>
              <div className="contact__bottom__right-form-email">
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="Enter Valid Email"
                  className="contact__bottom__right-form-email-input"
                />
              </div>
              <div className="contact__bottom__right-form-subject">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="What About ?"
                  className="contact__bottom__right-form-subject-input"
                />
              </div>
              <div className="contact__bottom__right-form-textarea">
                <label>Message</label>
                <textarea
                  placeholder="Enter The Message"
                  className="contact__bottom__right-form-textarea-input"
                ></textarea>
              </div>
              <button className="contact__bottom__right-form-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ShopBenefits />
      <Footer />
    </div>
  );
}

export default Contact;
