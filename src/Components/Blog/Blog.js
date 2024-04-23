import React,{useState} from 'react'
import './Blog.css'
import BlogLanding from './BlogLanding/BlogLanding'
import Navbar from '../CommonComponents/Header/Navbar/Navbar'
import BlogPost from './BlogPost/BlogPost'
import SHopBenefits from '../Shop/ShopBenefits/ShopBenefits'
import Footer from '../CommonComponents/Footer/Footer'
function Blog() {

  const [blogPosts, setBlogPosts] = useState([
    {id:1,title:'best clothses in the word',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',image:'./images/product.jpg'},
    {id:2,title:'best clothses in the word',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',image:'./images/product.jpg'},
    {id:3,title:'best clothses in the word',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',image:'./images/product.jpg'},
    {id:4,title:'best clothses in the word',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',image:'./images/product.jpg'},
  ])
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