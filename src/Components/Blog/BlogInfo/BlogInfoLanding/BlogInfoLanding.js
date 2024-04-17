import React from 'react'
import './BlogInfoLanding.css'
import { IoIosArrowForward } from "react-icons/io";

 function BlogInfoLanding() {
  return (
    <div className='blog-info-landing'>
         <div className="shadow"></div>
      <h1 className="blog-info-landing-title">Blog Info</h1>
      <div className="blog-info-landing__path">
        <span className="blog-info-landing__path-home">Home</span>

        <span className="blog-info-landing__path-arrow">
          <IoIosArrowForward className="blog-info-landing__path-arrow-icon" />
        </span>
        <span className="blog-info-landing__path-blog">Blog</span>
        <IoIosArrowForward className="blog-info-landing__path-arrow-icon" />
        <span className="blog-info-landing__path-blog">Info</span>


      </div>
    </div>
  )
}

export default BlogInfoLanding