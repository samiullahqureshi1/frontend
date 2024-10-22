import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaTiktok, FaUser, FaGlobe, FaStore, FaComments } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-networks">
        <div className="icons cursor-pointer">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaTiktok size={24} />
          <FaInstagram size={24} />
          <FaPinterest size={24} />
          <FaYoutube size={24} />
        </div>
      </div>

      <div className="footer-top">
        <div className="account-section">
          <FaUser size={24} />
          <div>
            <h4>My Account</h4>
            <p className='p-2'>Sign-in to your account</p>
          </div>
        </div>
        <div className="account-section">
          <FaGlobe size={24} />
          <div>
            <h4>Change Country</h4>
            <p className='p-2'>Choose your shopping location</p>
          </div>
        </div>
        <div className="account-section">
          <FaStore size={24} />
          <div>
            <h4>Store Locator</h4>
            <p className='p-2'>Find your nearest store</p>
          </div>
        </div>
        <div className="account-section">
          <FaComments size={24} />
          <div>
            <h4>Start a Chat</h4>
            <p className='p-2'>For general enquiries</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-section">
          <h4>Help</h4>
          <p>Frequently Asked Questions</p>
          <p>Delivery Information</p>
          <p>Arrange A Return</p>
          <p>Product Recall</p>
          <p>Customer Services - 0333 777 8000</p>
          <small>Check your service provider for charges</small>
        </div>
        <div className="footer-section">
          <h4>Shopping With Us</h4>
          <p>Next Unlimited</p>
          <p>Next Credit Options</p>
          <p>eGift Cards</p>
          <p>Gift Cards</p>
          <p>Gift Experiences</p>
          <p>Flowers, Plants & Wine</p>
        </div>
        <div className="footer-section">
          <h4>Departments</h4>
          <p>Womens</p>
          <p>Mens</p>
          <p>Boys</p>
          <p>Girls</p>
          <p>Home</p>
          <p>Furniture</p>
        </div>
        <div className="footer-section">
          <h4>More From Next</h4>
          <p>Next App</p>
          <p>The Company</p>
          <p>Media & Press</p>
          <p>Business 2 Business</p>
          <p>Careers @ Next</p>
          <p>View Our Modern Slavery Statement</p>
        </div>
      </div>
      <div className='flex justify-center'>
          <a className=''>View Mobile Site</a>
        </div>
        <div className='flex justify-center p-2'>
        <p>© 2024 Mark Retail Ltd. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
