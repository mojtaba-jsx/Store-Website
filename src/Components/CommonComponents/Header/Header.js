// !Imports
import React from "react";
import "./Header.css";

// !Components
import Navbar from "./Navbar/Navbar";
import Basket from "./Basket/Basket";
function Header() {
  return (
    <div>
      <Navbar />
      <Basket />
    </div>
  );
}

export default Header;
