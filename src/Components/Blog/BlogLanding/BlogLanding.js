import React from "react";
import "./BlogLanding.css";
import { IoIosArrowForward } from "react-icons/io";

function BlogLanding() {
  return (
    <div className="blog-landing">
      <div className="shadow"></div>
      <h1 className="blog-landing-title">Blog</h1>
      <div className="blog-landing__path">
        <span className="blog-landing__path-home">Home</span>

        <span className="blog-landing__path-arrow">
          <IoIosArrowForward className="blog-landing__path-arrow-icon" />
        </span>
        <span className="blog-landing__path-blog">Blog</span>
      </div>
    </div>
  );
}

export default BlogLanding;
