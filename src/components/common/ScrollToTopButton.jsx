import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className='fixed bottom-24 right-8'
        onClick={scrollToTop}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <button className='w-12 h-12 rounded-lg bg-transparent border-2 border-black/10 shadow-md hover:bg-black/5 '>
          <img src="/icons/goup_arrow.png" className='w-full h-auto' alt="" />
        </button>
      </div>
    </>
  );
};

export default ScrollToTopButton;