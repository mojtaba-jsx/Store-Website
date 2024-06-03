import React, { useState } from 'react'; // Importing React library and useState hook
import './Shop.css'; // Importing CSS file for Shop component
import Header from '../CommonComponents/Header/Header'; // Importing Header component
import ShopLanding from './ShopLanding/ShopLanding'; // Importing ShopLanding component
import Products from './Products/Products'; // Importing Products component
import ShopBenefits from './ShopBenefits/ShopBenefits'; // Importing ShopBenefits component
import Footer from '../CommonComponents/Footer/Footer'; // Importing Footer component

// Shop component definition
function Shop() {
  // State to manage display mode for products
  const [displayMode, setDisplayMode] = useState('grid');

  return (
    <div className='shop'>
      {/* Rendering the Header component */}
      <Header/>
      {/* Rendering the ShopLanding component */}
      <ShopLanding/>
      {/* Rendering the Products component with display mode and setter function as props */}
      <Products displayMode={displayMode} setDisplayMode={setDisplayMode}/>
      {/* Rendering the ShopBenefits component */}
      <ShopBenefits/>
      {/* Rendering the Footer component */}
      <Footer/>
    </div>
  );
}

// Exporting the Shop component as the default export of this module
export default Shop;
