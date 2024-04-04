import React from 'react'
import './Home.css'
import Header from '../CommonComponents/Header/Header';
import Landing from './Landing/Landing';
import Category from './Category/Category'
import OurProducts from './OurProducts/OurProducts'
import ShareStyles from './ShareStyles/ShareStyles'
import Footer from '../CommonComponents/Footer/Footer';
 function Home() {
  return (
    <div>
      <Header/>
      <Landing/>
      <Category/>
      <OurProducts/>
      <ShareStyles/>
      <Footer/>
    </div>
  )
}


export default Home