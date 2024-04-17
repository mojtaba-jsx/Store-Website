import React from "react";
import "./BlogInfo.css";
import Navbar from "../../CommonComponents/Header/Navbar/Navbar";
import BlogInfoLanding from "./BlogInfoLanding/BlogInfoLanding";
import ShopBenefits from '../../Shop/ShopBenefits/ShopBenefits'
import Footer from '../../CommonComponents/Footer/Footer'
import { RiAdminFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
function BlogInfo() {
  return (
    <div className="blog-info">
      <Navbar />
      <BlogInfoLanding />
      <div className="blog-info__wrapper">
        <h1 className="blog-info__title">
          Going all-in with millennial design
        </h1>
        <div className="blog-info__infos">
          <span className="blog-info__infos-author">
            <RiAdminFill className="blog-info-icon" />
            Admin
          </span>

          <span className="blog-info__infos-date">
            <CiCalendarDate className="blog-info-icon" />
            14 Oct 2022
          </span>

          <span className="blog-info__infos-tag">
            <FaTag className="blog-info-icon" />
            Clothes
          </span>
        </div>
        <img src="../images/product.jpg" alt="" className="blog-info-image" />
        <p className="blog-info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
          ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
          imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie
          a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
          Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
          ultrices neque ornare aenean euismod elementum.
        </p>
      </div>
      <ShopBenefits/>
      <Footer/>
    </div>
  );
}

export default BlogInfo;
