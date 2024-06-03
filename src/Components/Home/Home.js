import React from 'react'; // Importing the React library
import './Home.css'; // Importing the CSS file for the Home component

// Importing child components used within the Home component
import Header from '../CommonComponents/Header/Header';
import Landing from './Landing/Landing';
import Category from './Category/Category';
import OurProducts from './OurProducts/OurProducts';
import ShareStyles from './ShareStyles/ShareStyles';
import Footer from '../CommonComponents/Footer/Footer';

// The Home component serves as the main container for the home page
function Home() {
  return (
    <div>
      {/* Rendering the Header component */}
      <Header/>
      {/* Rendering the Landing component */}
      <Landing/>
      {/* Rendering the Category component */}
      <Category/>
      {/* Rendering the OurProducts component */}
      <OurProducts/>
      {/* Rendering the ShareStyles component */}
      <ShareStyles/>
      {/* Rendering the Footer component */}
      <Footer/>
    </div>
  );
}

// Exporting the Home component as the default export of this module
export default Home;
