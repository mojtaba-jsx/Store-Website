import React from "react";
import "./ShareStyles.css";
import { FaShirt } from "react-icons/fa6";
function ShareStyles() {
  return (
    <div className="share-styles">
      <div className="container">
        <h2 className="share-styles-title">
          Share Your Model <FaShirt />
        </h2>

        <div className="share-styles__boxes">
          <div className="share-styles__boxes-left">
            <div className="share-styles__boxes-left-top">
              <img
                src="./images/classic-man1.jpg"
                alt=""
                className="share-styles__boxes-left-top-image"
              />
            </div>

            <div className="share-styles__boxes-left-bottom">
              <img
                src="./images/classic-man-2.jpg"
                alt=""
                className="share-styles__boxes-left-bottom-image"
              />
            </div>
          </div>

          <div className="share-styles__boxes-middle">
            <div className="share-styles__boxes-middle-top">
              <img
                src="./images/classic-man-3.jpg"
                alt=""
                className="share-styles__boxes-middle-top-image"
              />
            </div>

            <div className="share-styles__boxes-middle-bottom">
              <img
                src="./images/classic-woman3.jpg"
                alt=""
                className="share-styles__boxes-middle-bottom-image"
              />
            </div>
          </div>

          <div className="share-styles__boxes-right">
            <div className="share-styles__boxes-right-top">
              <img
                src="./images/calssic-woman1.jpg"
                alt=""
                className="share-styles__boxes-right-top-image"
              />
            </div>

            <div className="share-styles__boxes-right-bottom">
              <img
                src="./images/classic-woman2.jpg"
                alt=""
                className="share-styles__boxes-right-bottom-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareStyles;
