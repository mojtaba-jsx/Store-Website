import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./BlogPost.css";

function BlogPost(props) {
  const navigate = useNavigate();

  const handleBtnClick = (id) => {
    localStorage.setItem("blogId", id);
    navigate('/blog/info');
  };

  return (
    <div className="blog-post">
      <div className="blog-post__wrapper">
        <img src={props.image} alt="" className="blog-post-image" />
        <div className="blog-post__infos">
          <span className="blog-post__infos-author">
            {props.author}
          </span>

          <span className="blog-post__infos-date">
            {props.date}
          </span>
          <span className="blog-post__infos-tag">
            {props.tag}
          </span>
        </div>
        <h1 className="blog-post-title">{props.title}</h1>
        <p className="blog-post-text">
          {(props.body).substring(0,100) + '...'}
        </p>
        <button className="blog-post-btn" onClick={() => handleBtnClick(props.id)}>
          <Link className="blog-post-btn-link" to={'/blog/info'}>Read More ...</Link>
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
