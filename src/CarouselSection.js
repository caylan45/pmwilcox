import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = ({ activeSection, setActiveSection, colors }) => {
  const settings = {
    // ...your settings
    afterChange: current => {
      const section = `section${current + 1}`;
      setActiveSection(section);
    },
  };

  return (
    <Slider {...settings}>
      {colors.map((color, index) => (
        <div key={index} id={`section${index + 1}`} style={{ backgroundColor: color }}>
          Section {index + 1} Content
        </div>
      ))}
    </Slider>
  );
};
export default CarouselSection;