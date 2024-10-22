import React from 'react';
import './image.css'
// Import images
import aniiImg from '../../img/anii.jpg';
import kewImg from '../../img/kew.jpg';
import guestImg from '../../img/guest-img.jpg';
import boyImg from '../../img/boy.jpg';
import autumnImg from '../../img/autum.jpg';
import girlImg from '../../img/girl.jpg';

const CircleImageGrid = () => {
  const items = [
    {
      imgSrc: aniiImg,
      altText: 'Trending animal print',
    },
    {
      imgSrc: aniiImg,
      altText: 'The Kew collection',
    },
    {
      imgSrc: guestImg,
      altText: 'Wedding Guest Style',
    },
    {
      imgSrc: boyImg,
      altText: 'New: Autumn Homeware',
    },
    {
      imgSrc: autumnImg,
      altText: 'Boys varsity looks',
    },
    {
      imgSrc: girlImg,
      altText: 'Girls Sequence Edit',
    },
    
  ];

  return (
    <div className="container mt-3">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center" key={index}>
            <div className="circle">
              <img src={item.imgSrc} alt={item.altText} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleImageGrid;
