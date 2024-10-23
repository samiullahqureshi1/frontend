import React from 'react';
import './Category.css'; // Ensure to import updated CSS file

const NewNavbar = () => {
  return (
    <nav className="new-navbar">
      <ul className="nav-items">
        <li className="nav-item">Women</li>
        <li className="nav-item">Men</li>
        <li className="nav-item">Boys</li>
        <li className="nav-item">Girls</li>
        <li className="nav-item">Home</li>
        <li className="nav-item highlight">Christmas</li> {/* Highlighted item */}
        <li className="nav-item">Baby</li>
        <li className="nav-item">Autumn</li>
        <li className="nav-item">Brands</li>
        <li className="nav-item">Furniture</li>
        <li className="nav-item">Gifts</li>
        <li className="nav-item">Beauty</li>
        <li className="nav-item">Sports</li>
        <li className="nav-item clearance">Clearance</li> {/* Clearance with different color */}
      </ul>
    </nav>
  );
};

export default NewNavbar;
