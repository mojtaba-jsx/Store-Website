import React from "react";
import { Link } from "react-router-dom";

import "./BlogPost.css";
import { RiAdminFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
function BlogPost(props) {
  return (
    <div className="blog-post">
      <div className="blog-post__wrapper">
        <img src={props.image} alt="" className="blog-post-image" />
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
        <h1 className="blog-post-title">{props.title}</h1>
        <p className="blog-post-text">
          {props.body}
        </p>
        <button className="blog-post-btn">
          <Link className="blog-post-btn-link" to={'/blog/info'}>Read More ...</Link>
        </button>
      </div>
    </div>
  );
}
export default BlogPost;
