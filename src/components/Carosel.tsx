'use client';
import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>

      <div className="button-group">
        <button onClick={prevSlide}>&lt;</button>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
        <button onClick={nextSlide}>&gt;</button>
      </div>

      <button className="pause-resume-btn" onClick={togglePause}>
        {isPaused ? '▶' : '⏸'}
      </button>
    </div>
  );
};

export default Carousel;
