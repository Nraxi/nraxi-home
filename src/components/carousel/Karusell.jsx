import React, { useState, useEffect, useCallback } from "react";
import "../../css/carousel-image.css";

function Karusell() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = React.useMemo(() => [
    require('../images/WebGallery/underconstruct.png'),
    require('../images/WebGallery/underconstruct.png'),
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [nextSlide]);

  return (
    <div className="carousel1">
      <span className="bi bi-caret-right-fill carousel-control1" onClick={nextSlide}></span>
      <span className="bi bi-caret-left-fill carousel-control1" onClick={prevSlide}></span>
      <img className="carousel-image1" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="carousel-indicators1">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator1 ${index === currentIndex ? 'active1' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Karusell;
