import React from "react";
import "./CheckOut.css";
import CheckOutLanding from "./CheckOutLanding/CheckOutLanding";
import Navbar from "../CommonComponents/Header/Navbar/Navbar";
function CheckOut() {
  return (
    <div className="checkout">
      <Navbar />
      <CheckOutLanding />
      <div className="checkout__wrapper">
        <div className="checkout__left">
          <h2 className="checkout__left-title">Billing details</h2>
          <form className="checkout-form">
            <div className="checkout-form__row1">
              <div className="checkout-form__row1__col1">
                <label className="checkout-form__row1__col1-label">
                  FirstName
                </label>
                <input
                  type="text"
                  className="checkout-form__row1__col1-fname"
                />
              </div>

              <div className="checkout-form__row1__col2">
                <label className="checkout-form__row1__col2-label">
                  LastName
                </label>
                <input
                  type="text"
                  className="checkout-form__row1__col2-lname"
                />
              </div>
            </div>

            <div className="checkout-form__row2">
              <label className="checkout-form__row2-label">Email Address</label>
              <input type="email" className="checkout-form__row2-email" />
            </div>

            <div className="checkout-form__row3">
              <label className="checkout-form__row3-label">Phone</label>
              <input type="text" className="checkout-form__row3-phone" />
            </div>

            <div className="checkout-form__row4">
              <label className="checkout-form__row4-label">
                Country/Region
              </label>
              <select className="checkout-form__row4-options">
                <option value="Iran">Iran</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Brazil">Brazil</option>
              </select>
            </div>

            <div className="checkout-form__row5">
              <label className="checkout-form__row5-label">City/Town</label>
              <input type="text" className="checkout-form__row5-city" />
            </div>

            <div className="checkout-form__row6">
              <label className="checkout-form__row6-label">
                Street Address
              </label>
              <input type="text" className="checkout-form__row6-street" />
            </div>

            <div className="checkout-form__row7">
              <label className="checkout-form__row7-label">Zip Code</label>
              <input type="text" className="checkout-form__row7-zipcode" />
            </div>

            <div className="checkout-form__row8">
              <label className="checkout-form__row8-label">
                Additional Information
              </label>
              <textarea className="checkout-form__row8-textarea"></textarea>
            </div>
          </form>
        </div>

        <div className="checkout__right">
          <div className="checkout__right-title">
            <span className="checkout__right-title-name">Product</span>
            <span className="checkout__right-title-name">Subtotal</span>
          </div>

          <div className="checkout__right-product">
            <span className="checkout__right-product-name">Shirt * 1</span>
            <span className="checkout__right-product-price">$100</span>
          </div>

          <div className="checkout__right-total">
            <span className="checkout__right-total-name">Total</span>
            <span className="checkout__right-total-price">$1000</span>
          </div>

          <div className="checkout__right-payment">
            <form className="checkout__right-payment-form">
              <div className="checkout__right-payment-form-box1">
                <input
                  type="radio"
                  id="bank"
                  className="checkout__right-payment-form-box1-radio"
                />
                <label htmlFor="bank">Direct Bank Transfer</label>
                <p className="checkout__right-payment-form-box1-desc">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>

              <div className="checkout__right-payment-form-box2">
                <input
                  type="radio"
                  id="delivary"
                  className="checkout__right-payment-form-radio"
                />
                <label htmlFor="delivary">Cash On Delivery</label>
                <p className="checkout__right-payment-form-desc">
                  Bill payment is done at home
                </p>
              </div>
              <div className="checkout__right-privacy">
                <p className="checkout__right-privacy-text">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>
              <button className="checkout__right-payment-form-btn">Place order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
