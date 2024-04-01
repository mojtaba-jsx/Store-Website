import React from 'react'
import './Home.css'

import Landing from './Landing/Landing';
import Category from './Category/Category'
import OurProducts from './OurProducts/OurProducts'
 function Home() {
  return (
    <div>
      <Landing/>
      <Category/>
      <OurProducts/>
    </div>
  )
}


export default Home