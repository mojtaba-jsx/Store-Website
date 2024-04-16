import React from 'react'
import './About.css'
import BlogLanding from './BlogLanding/BlogLanding'
import Navbar from '../CommonComponents/Header/Navbar/Navbar'
import BlogPost from './BlogPost/BlogPost'
import SHopBenefits from '../Shop/ShopBenefits/ShopBenefits'
import Footer from '../CommonComponents/Footer/Footer'
function Blog() {
  return (
    <div className='blog'>
      <Navbar/>
      <BlogLanding/>
      <div className="blog__wrapper">
        <BlogPost/>
        <BlogPost/>
      </div>
      <SHopBenefits/>
      <Footer/>
    </div>
  )
}

export default  Blog