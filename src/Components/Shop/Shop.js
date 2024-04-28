import React, { useState } from 'react';
import './Shop.css';
import Header from '../CommonComponents/Header/Header';
import ShopLanding from './ShopLanding/ShopLanding';
import Products from './Products/Products';
import ShopBenefits from './ShopBenefits/ShopBenefits';
import Footer from '../CommonComponents/Footer/Footer';

function Shop() {
  const [displayMode, setDisplayMode] = useState('grid');

  return (
    <div className='shop'>
      <Header/>
      <ShopLanding/>
      <Products displayMode={displayMode} setDisplayMode={setDisplayMode}/>
      <ShopBenefits/>
      <Footer/>
    </div>
  );
}

export default Shop;
