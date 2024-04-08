import React from 'react'
import './Shop.css'
import Header from '../CommonComponents/Header/Header'
import ShopLanding from './ShopLanding/ShopLanding'
import ShopOption from './ShopOption/ShopOption'
import Products from './Products/Products'
import Pagination from './Pagination/Pagination'
 function Shop() {
  return (
    <div className='shop'>
      <Header/>
      <ShopLanding/>
      <ShopOption/>
      <Products/>
      <Pagination/>
      
    </div>
  )
}

export default Shop