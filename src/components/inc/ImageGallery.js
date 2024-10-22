import React from 'react';
import './ImageGallery.css'; // Import your CSS file for styling

// Import images from the img folder
import img1 from '../../img/mdl.png';
import img2 from '../../img/pexels-kha-ruxury-287153-13144285.jpg';
import img3 from '../../img/pexels-kha-ruxury-287153-13144285.jpg';

const ImageGallery = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="img">
            <img
              src={img1}
              alt="Image 1"
              className="responsive-img"
            />
          </div>
        </div>
        <div className="col">
          <div className="img">
            <img
              src={img2}
              alt="Image 2"
              className="responsive-img"
            />
          </div>
        </div>
        <div className="col">
          <div className="img">
            <img
              src={img3}
              alt="Image 3"
              className="responsive-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
