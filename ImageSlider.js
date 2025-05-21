import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000, showControls = true, width = '600px', height = '400px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        margin: 'auto',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      }}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '50%',
            }}
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '50%',
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
