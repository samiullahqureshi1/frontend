import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa';
import './Search.css';
import logo from '../../img/mark.jpg';

const SearchBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false); // State for mobile search bar

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSearchBar = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className="containers">
      <a href='/'><img src={logo} alt="Logo" className="logo" /></a>
      <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />
        <FaSearch className="search-icon" onClick={toggleSearchBar} /> {/* React Search icon */}
      </div>
      <div className="icon-container">
        <a href='login'><FaUser className="icon" /></a>
        <a><FaHeart className="icon" /></a>
        <a><FaShoppingBag className="icon" onClick={toggleDropdown} /></a>
        <button className="checkout-button">Checkout</button>
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
