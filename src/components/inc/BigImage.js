import React from 'react';
import './BigImage.css'; // Import your CSS file for styling

const BigImage = () => {
  return (
    <div className="bigimage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="overlay mt-5">
              <h6 className="text-muted" style={{ fontSize: '17px' }}>
                JUST LANDED
              </h6>
              <h2 className="text-muted">
                WOMEN'S NEW IN
              </h2>
              <a className="text-muted" href="/shop">
                shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigImage;
