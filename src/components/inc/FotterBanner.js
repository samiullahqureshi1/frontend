import React from 'react';
import './FooterBanner.css'; // Make sure to create a CSS file for styling

const FooterBanner = () => {
  return (
    <div className="footer-banner">
        <h1 className='flex justify-center font-bold'>Be In The Know</h1>
      <p className="footer-text">
      Keep up to date with the latest Next news, including exclusive offers and not to be missed
      </p>
      <p>sale and store events.</p>
      <p>Enter your email address below to opt in to email marketing.</p>
      <div className="subscribe-container">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default FooterBanner;
