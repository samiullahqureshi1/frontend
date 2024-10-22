import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa'; // Importing icons from react-icons
import './Search.css'; // Import the CSS file
import logo from '../../img/mark.jpg'; // Adjust the path to your logo image

const SearchBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="containers">
      <a href='/'><img src={logo} alt="Logo" className="logo" /></a> {/* Logo */}
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
        <a href='login'><FaUser className="icon" /></a>
        <FaHeart className="icon" />
        <FaShoppingBag className="icon" onClick={toggleDropdown} />

        {/* Checkout Button */}
        <button className="checkout-button">Checkout</button>

        {/* Dropdown Dialog for Shopping Bag */}
        {isDropdownOpen && (
          <div className="dropdown-dialog">
            <div className="bag-header">
              <p>0 Items In Bag</p>
            </div>
            <div className="bag-content">
              <p>Your shopping bag is empty</p>
            </div>
            <div className="bag-footer">
              <div className="total">
                <span>Total</span>
                <span>£0.00</span>
              </div>
              <div className="buttons">
                <button className="view-bag">View Bag</button>
                <button className="checkout" disabled>Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
