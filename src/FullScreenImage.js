import React from 'react';
import './FullScreenImage.css';

const Grid = () => {
  // Create a 3x3 grid component
  return (
    <div className="grid">
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="grid-square"></div>
      ))}
    </div>
  );
};

const FullScreenImage = ({ src }) => {
  return (
    <div className="landing">
      <Grid />
      <div className="image-container">
        <img src={src} alt="Central" className="fullscreen-image" />
      </div>
      <Grid />
    </div>
  );
};

export default FullScreenImage;
