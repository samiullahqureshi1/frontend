import React from 'react';
import './RecentlyViewed.css'; // Add your CSS styles here

const RecentlyViewed = () => {
  return (
    <div className="recently-viewed-container">
      <div className="recently-viewed-header">
        <h2>Recently Viewed</h2>
        <button className="clear-history-button">Clear History</button>
      </div>
      <div className="recently-viewed-content">
        <div className="placeholder-box">
          <p className="placeholder-text-bold">
            There are no Recently Viewed items to show.
          </p>
          <p className="placeholder-text">
            Items will appear here as you view them. You can then select <br/>the images to revisit the items.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
