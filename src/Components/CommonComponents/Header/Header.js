// !Imports
import React from 'react'
import './Header.css'

// !Components
import Navbar from './Navbar/Navbar'
import SearchModal from './SearchModal/SearchModal'
import Basket from './Basket/Basket'
 function Header() {
  return (
    <div>
      <Navbar/>
      <SearchModal/>
      <Basket/>
    </div>
  )
}

export default Header