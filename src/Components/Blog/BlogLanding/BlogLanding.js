import React from "react";
import "./BlogLanding.css"; // Importing CSS for BlogLanding component
import { IoIosArrowForward } from "react-icons/io"; // Importing arrow forward icon from react-icons

function BlogLanding() {
  return (
    <div className="blog-landing">
      {/* Adding a shadow element */}
      <div className="shadow"></div>
      {/* Blog title */}
      <h1 className="blog-landing-title">Blog</h1>
      <div className="blog-landing__path">
        {/* Path to Home */}
        <span className="blog-landing__path-home">Home</span>
        {/* Arrow icon */}
        <span className="blog-landing__path-arrow">
          <IoIosArrowForward className="blog-landing__path-arrow-icon" />
        </span>
        {/* Path to Blog */}
        <span className="blog-landing__path-blog">Blog</span>
      </div>
    </div>
  );
}

export default BlogLanding;
