import React, { useEffect, useState } from "react";
import "./BlogInfo.css"; // Importing CSS for BlogInfo component
import Navbar from "../../CommonComponents/Header/Navbar/Navbar"; // Importing Navbar component
import ShopBenefits from "../../Shop/ShopBenefits/ShopBenefits"; // Importing ShopBenefits component
import Footer from "../../CommonComponents/Footer/Footer"; // Importing Footer component
import { RiAdminFill } from "react-icons/ri"; // Importing icon for admin
import { CiCalendarDate } from "react-icons/ci"; // Importing icon for calendar date
import { FaTag } from "react-icons/fa6"; // Importing icon for tag
import { TfiWrite } from "react-icons/tfi"; // Importing icon for write

function BlogInfo() {
  // State to hold blog information
  const [blogInfo, setBlogInfo] = useState({});

  useEffect(() => {
    const blogId = localStorage.getItem("blogId"); // Getting blog ID from local storage
    fetch(`https://66372b1a288fedf6937f9fdc.mockapi.io/Articles/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlogInfo(data)) // Setting fetched data to state
      .catch((error) => console.log("Error fetching blog info:", error)); // Handling errors
    window.scrollTo(0, 0); // Scroll to top of the page on component mount
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="blog-info">
      {/* Navbar component */}
      <Navbar />
      <div className="blog-info__wrapper">
        {/* Blog title */}
        <h1 className="blog-info__title">{blogInfo.title}</h1>
        <div className="blog-info__infos">
          {/* Blog author */}
          <span className="blog-info__infos-author">
            <RiAdminFill className="blog-info-icon" />
            {blogInfo.author}
          </span>
          {/* Blog date */}
          <span className="blog-info__infos-date">
            <CiCalendarDate className="blog-info-icon" />
            {blogInfo.date}
          </span>
          {/* Blog tag */}
          <span className="blog-info__infos-tag">
            <FaTag className="blog-info-icon" />
            {blogInfo.tag}
          </span>
        </div>
        {/* Blog image */}
        <img src={blogInfo.image} alt="" className="blog-info-image" />
        {/* Blog body */}
        <p className="blog-info-text">{blogInfo.body}</p>

        <div className="blog__author">
          <span className="blog__author-text">
            <TfiWrite className="blog__author-icon" />
            Written By
          </span>
          <div className="blog__author-info">
            {/* Author image */}
            <img
              src={blogInfo.authorImage}
              alt=""
              className="blog__author-image"
            />
            {/* Author name */}
            <span className="blog__author__right-name">{blogInfo.author}</span>
          </div>
        </div>
      </div>
      {/* ShopBenefits component */}
      <ShopBenefits />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default BlogInfo;
