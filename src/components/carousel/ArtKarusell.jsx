import React, { useState, useEffect, useCallback } from "react";
import "../../css/ArtCarousel-images.css";

function ArtKarusell() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = React.useMemo(() => [
    require('../images/ArtGallery/vattenpaus.png'),
    require('../images/ArtGallery/gamingbg.png'),
    require('../images/ArtGallery/me2.png'),
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
    <div className="carousel-container">
      <div className="carousel">
        <span className="bi bi-caret-right-fill carousel-control" onClick={nextSlide}></span>
        <span className="bi bi-caret-left-fill carousel-control" onClick={prevSlide}></span>
        <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtKarusell;
