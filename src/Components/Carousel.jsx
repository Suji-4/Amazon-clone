import React, { useState } from 'react';
import slide from "../assets/images/slide.jpg"
import slide2 from "../assets/images/slide2.jpg"
import slide3 from "../assets/images/slide3.jpg"
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
function Carousel() {
  const images = [slide, slide3, slide2];  
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative ">
      {/* Image */}
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="w-full h-auto " />

      {/* Left and Right Arrow Buttons */}
      <img  src={left}  alt="left"  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 cursor-pointer" onClick={prevSlide}/>
      <img src={right}alt="right"className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 cursor-pointer"onClick={nextSlide}/>
    </div>
  );
}

export default Carousel;
