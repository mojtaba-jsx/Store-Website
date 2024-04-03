import React from 'react'
import './Home.css'

import Landing from './Landing/Landing';
import Category from './Category/Category'
import OurProducts from './OurProducts/OurProducts'
import ShareStyles from './ShareStyles/ShareStyles'
 function Home() {
  return (
    <div>
      <Landing/>
      <Category/>
      <OurProducts/>
      <ShareStyles/>
    </div>
  )
}


export default Home