import React, { useState, useEffect } from 'react';
import slider1 from "/images/services-img/2.jpg";
import slider2 from "/images/services-img/7.jpg";
import slider3 from "/images/services-img/9.jpg"; // Add more images as needed

const Slider = () => {
  const images = [slider1, slider2, slider3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the slide automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Change to the next image
    }, 3000); // Auto change every 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container relative w-full h-64 overflow-hidden">
      <img src={images[currentIndex]} alt="Slider Image" className="w-full h-full object-cover" />
      
      {/* Next button */}
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded"
      >
       {">"}
      </button>

      {/* Previous button */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded"
      >
       {"<"}
      </button>
    </div>
  );
};

export default Slider;
