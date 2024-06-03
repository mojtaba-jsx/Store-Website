import React, { useEffect, useState } from "react";
import "./Blog.css"; //! Importing CSS for Blog component
import BlogLanding from "./BlogLanding/BlogLanding"; //! Importing BlogLanding component
import Navbar from "../CommonComponents/Header/Navbar/Navbar"; //! Importing Navbar component
import BlogPost from "./BlogPost/BlogPost"; //! Importing BlogPost component
import ShopBenefits from "../Shop/ShopBenefits/ShopBenefits"; //! Importing ShopBenefits component
import Footer from "../CommonComponents/Footer/Footer"; //! Importing Footer component

function Blog() {
  //!  useEffect to fetch blog posts when the component mounts
  useEffect(() => {
    fetch("https://66372b1a288fedf6937f9fdc.mockapi.io/Articles")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data); //! Setting fetched data to state
      });
  }, []); //! Empty dependency array means this effect runs once after the initial render

  //! State to hold blog posts data
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <div className="blog">
      {/*  Navbar component */}
      <Navbar />
      {/* BlogLanding component */}
      <BlogLanding />
      <div className="blog__wrapper">
        {/* Mapping through blogPosts and rendering BlogPost components */}
        {blogPosts.map((blogPost) => (
          <BlogPost {...blogPost} key={blogPost.id} />
        ))}
      </div>
      {/* ShopBenefits component */}
      <ShopBenefits />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Blog;
