import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing Link and useNavigate from react-router-dom

import "./BlogPost.css"; // Importing CSS for BlogPost component

function BlogPost(props) {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle button click
  const handleBtnClick = (id) => {
    localStorage.setItem("blogId", id); // Save blog ID to localStorage
    navigate("/blog/info"); // Navigate to the blog info page
  };

  return (
    <div className="blog-post">
      <div className="blog-post__wrapper">
        {/* Blog post image */}
        <img src={props.image} alt="" className="blog-post-image" />
        <div className="blog-post__infos">
          {/* Blog post author */}
          <span className="blog-post__infos-author">{props.author}</span>
          {/* Blog post date */}
          <span className="blog-post__infos-date">{props.date}</span>
          {/* Blog post tag */}
          <span className="blog-post__infos-tag">{props.tag}</span>
        </div>
        {/* Blog post title */}
        <h1 className="blog-post-title">{props.title}</h1>
        {/* Blog post body (shortened) */}
        <p className="blog-post-text">{props.body.substring(0, 100) + "..."}</p>
        {/* Button to read more */}
        <button
          className="blog-post-btn"
          onClick={() => handleBtnClick(props.id)}
        >
          <Link className="blog-post-btn-link" to={"/blog/info"}>
            Read More ...
          </Link>
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
