import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
     <a>Store Locator</a>
      <span className="separator">|</span> {/* Separator */}
      <a>Help</a>
    </div>
  );
};

export default Navbar;
