import React from 'react';
import bannerImage from '../../src/assets/banner.png'; 

const Banner = () => {
  return (
    <div className="banner">
      <figure className="header">
        <img src={bannerImage}alt="." />
      </figure>
    </div>
  );
};

export default Banner;

