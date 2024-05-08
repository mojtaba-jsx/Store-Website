import React,{useEffect, useState} from 'react'
import './Blog.css'
import BlogLanding from './BlogLanding/BlogLanding'
import Navbar from '../CommonComponents/Header/Navbar/Navbar'
import BlogPost from './BlogPost/BlogPost'
import SHopBenefits from '../Shop/ShopBenefits/ShopBenefits'
import Footer from '../CommonComponents/Footer/Footer'
function Blog() {
useEffect(()=>{
  fetch('https://66372b1a288fedf6937f9fdc.mockapi.io/Articles')
  .then(res=>res.json())
  .then(data=>{
    setBlogPosts(data)
  })
})
  const [blogPosts, setBlogPosts] = useState([])
  return (
    <div className='blog'>
      <Navbar/>
      <BlogLanding/>
      <div className="blog__wrapper">
        {
          blogPosts.map((blogPost)=>(
            <BlogPost {...blogPost} key={blogPost.id}/>
          ))
        }


      </div>
      <SHopBenefits/>
      <Footer/>
    </div>
  )
}

export default  Blog