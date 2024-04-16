import React from "react";
import "./BlogPost.css";
import { RiAdminFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
function BlogPost() {
  return (
    <div className="blog-post">
      <div className="blog-post__wrapper">
        <img src="../images/product.jpg" alt="" className="blog-post-image" />
        <div className="blog-post__infos">
          <span className="blog-post__infos-author">
            <RiAdminFill className="blog-post__infos-icon" />
            Admin
          </span>

          <span className="blog-post__infos-date">
            <CiCalendarDate className="blog-post__infos-icon" />
            14 Oct 2022
          </span>
          <span className="blog-post__infos-tag">
            <FaTag className="blog-post__infos-icon" />
            Clothes
          </span>
        </div>
        <h1 className="blog-post-title">Going all-in with millennial design</h1>
        <p className="blog-post-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button className="blog-post-btn">Read more</button>
      </div>
    </div>
  );
}
export default BlogPost;
