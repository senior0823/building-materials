'use client';
import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';


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
    <div className="flex justify-center mx-auto my-5">
      <div className="carousel-container relative">
        <div className="carousel-slide md:w-[1090px] md:h-[475px] sm:w-[890px] sm:h-[380px]" >
          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className='md:w-[1090px] md:h-[475px] sm:w-[890px] sm:h-[380px]' />
        </div>
        <div className='flex justify-center items-center carousel-button-group'>
          <div className="button-group">
            <button onClick={prevSlide}><img src='icons/preview_arrow.png' className='w-4' /></button>
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
            <button onClick={nextSlide}><img src='icons/next_arrow.png' className='w-4' /></button>
          </div>

          <button className="pause-resume-btn" onClick={togglePause}>
            {isPaused ? <img src='icons/resume_icon.png' className='w-4 ' /> : <img src='/icons/pause_icon.png' className='w-4' />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
