import React from 'react';
import './Ban.css'; // Import your CSS file for styling
import dressImage from '../../img/dress.jpg'; // Adjust the path as needed

const Ban = () => {
  return (
    <div className="banner p-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img d-flex justify-content-center">
              <img src={dressImage} alt="Dress" width="80%" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-col" style={{ marginTop: '35%' }}>
              <h6 className="text-white d-flex justify-content-center mb-3">JUST DROPPED</h6>
              <h3 className="text-white d-flex justify-content-center mb-3">THE NEW COLLECTION BY MARK</h3>
              <p className="text-white d-flex justify-content-center mb-3">From floral to fashionable foliage, say Hello to print this summer</p>
              <a href="#" className="text-white text-center d-flex justify-content-center">shop women's</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ban;
