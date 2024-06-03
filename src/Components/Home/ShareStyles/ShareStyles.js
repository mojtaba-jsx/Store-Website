import React from "react"; // Importing React library
import "./ShareStyles.css"; // Importing CSS file for ShareStyles component
import { FaShirt } from "react-icons/fa6"; // Importing shirt icon from react-icons

// ShareStyles component definition
function ShareStyles() {
  return (
    <div className="share-styles">
      <div className="container">
        {/* Title for the ShareStyles section */}
        <h2 className="share-styles-title">
          Share Your Model <FaShirt />
        </h2>

        <div className="share-styles__boxes">
          {/* Left column of images */}
          <div className="share-styles__boxes-left">
            <div className="share-styles__boxes-left-top">
              <img
                src="./images/classic-man1.jpg"
                alt="Classic man style 1"
                className="share-styles__boxes-left-top-image"
              />
            </div>

            <div className="share-styles__boxes-left-bottom">
              <img
                src="./images/classic-man-2.jpg"
                alt="Classic man style 2"
                className="share-styles__boxes-left-bottom-image"
              />
            </div>
          </div>

          {/* Middle column of images */}
          <div className="share-styles__boxes-middle">
            <div className="share-styles__boxes-middle-top">
              <img
                src="./images/classic-man-3.jpg"
                alt="Classic man style 3"
                className="share-styles__boxes-middle-top-image"
              />
            </div>

            <div className="share-styles__boxes-middle-bottom">
              <img
                src="./images/classic-woman3.jpg"
                alt="Classic woman style 3"
                className="share-styles__boxes-middle-bottom-image"
              />
            </div>
          </div>

          {/* Right column of images */}
          <div className="share-styles__boxes-right">
            <div className="share-styles__boxes-right-top">
              <img
                src="./images/calssic-woman1.jpg"
                alt="Classic woman style 1"
                className="share-styles__boxes-right-top-image"
              />
            </div>

            <div className="share-styles__boxes-right-bottom">
              <img
                src="./images/classic-woman2.jpg"
                alt="Classic woman style 2"
                className="share-styles__boxes-right-bottom-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the ShareStyles component as the default export of this module
export default ShareStyles;
