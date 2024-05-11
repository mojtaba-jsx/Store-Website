// در کامپوننت BlogInfo
import React, { useEffect, useState } from "react";
import "./BlogInfo.css";
import Navbar from "../../CommonComponents/Header/Navbar/Navbar";
import ShopBenefits from '../../Shop/ShopBenefits/ShopBenefits'
import Footer from '../../CommonComponents/Footer/Footer'
import { RiAdminFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";

function BlogInfo() {
  const [blogInfo, setBlogInfo] = useState({});
  
  useEffect(() => {
    const blogId = localStorage.getItem("blogId");
    fetch(`https://66372b1a288fedf6937f9fdc.mockapi.io/Articles/${blogId}`)
      .then(res => res.json())
      .then(data => setBlogInfo(data))
      .catch(error => console.log("Error fetching blog info:", error));
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-info">
      <Navbar />
      <div className="blog-info__wrapper">
        <h1 className="blog-info__title">
          {blogInfo.title}
        </h1>
        <div className="blog-info__infos">
          <span className="blog-info__infos-author">
            <RiAdminFill className="blog-info-icon" />
            {blogInfo.author}
          </span>
          <span className="blog-info__infos-date">
            <CiCalendarDate className="blog-info-icon" />
            {blogInfo.date}
          </span>
          <span className="blog-info__infos-tag">
            <FaTag className="blog-info-icon" />
            {blogInfo.tag}
          </span>
        </div>
        <img src={blogInfo.image} alt="" className="blog-info-image" />
        <p className="blog-info-text">
          {blogInfo.body}
        </p>
      </div>
      <ShopBenefits/>
      <Footer/>
    </div>
  );
}

export default BlogInfo;
