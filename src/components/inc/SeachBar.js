import React from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa'; // Importing icons from react-icons
import './Search.css'; // Import the CSS file
import logo from '../../img/mark.jpg'; // Adjust the path to your logo image

const SearchBar = () => {
  return (
    <div className="containers">
      <img src={logo} alt="Logo" className="logo" /> {/* Logo */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />
        <FaSearch className="search-icon" /> {/* React Search icon */}
      </div>
      <div className="icon-container">
        {/* Use React icons for user, wishlist, and cart */}
        <FaUser className="icon" />
        <FaHeart className="icon" />
        <FaShoppingBag className="icon" />
        {/* Checkout Button */}
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default SearchBar;
