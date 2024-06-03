import React from 'react';
import './BlogInfoLanding.css'; // Importing CSS for BlogInfoLanding component
import { IoIosArrowForward } from "react-icons/io"; // Importing arrow forward icon from react-icons

function BlogInfoLanding() {
  return (
    <div className='blog-info-landing'>
      {/* Adding a shadow element */}
      <div className="shadow"></div>
      {/* Blog Info title */}
      <h1 className="blog-info-landing-title">Blog Info</h1>
      <div className="blog-info-landing__path">
        {/* Path to Home */}
        <span className="blog-info-landing__path-home">Home</span>
        {/* Arrow icon */}
        <span className="blog-info-landing__path-arrow">
          <IoIosArrowForward className="blog-info-landing__path-arrow-icon" />
        </span>
        {/* Path to Blog */}
        <span className="blog-info-landing__path-blog">Blog</span>
        {/* Another Arrow icon */}
        <IoIosArrowForward className="blog-info-landing__path-arrow-icon" />
        {/* Path to Info */}
        <span className="blog-info-landing__path-blog">Info</span>
      </div>
    </div>
  )
}

export default BlogInfoLanding;
