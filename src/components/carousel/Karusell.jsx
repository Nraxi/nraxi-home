import React, { useState, useEffect, useCallback } from "react";
import "../../css/carousel-image.css";

function Karusell() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = React.useMemo(() => [
    { image: require('../images/WebGallery/Screenshot-Homepage.png'), link: 'https://nraxi.github.io/nraxi-home', text: 'Homepage' },
    { image: require('../images/WebGallery/Screenshot-snowmedia.png'), link: 'https://nraxi.github.io/snowmedia/', text: 'Snow Media' },
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides]);

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
      <img className="carousel-image1" src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
      <div className="carousel-indicators1">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator1 ${index === currentIndex ? 'active1' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <p className="linkforsite">
        <a href={slides[currentIndex].link} target="_blank" rel="noopener noreferrer">
          {slides[currentIndex].text}
        </a>
      </p>

    </div>
  );
}

export default Karusell;
