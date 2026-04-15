import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Hero.css';

const videoSlides = [
  {
    id: 1,
    url: './assets/drone-shot-video.mp4',
    title: "American Dream Exterior",
    subtitle: "AERIAL DRONE CINEMATICS"
  },
  {
    id: 2,
    url: '/assets/hero-video.mp4',
    title: "DreamWorks Water Park",
    subtitle: "LARGEST INDOOR THEME PARK"
  },
  {
    id: 3,
    url: '/assets/Avenue_Luxury_Court_Video.mp4',
    title: "The Avenue & Luxury Court",
    subtitle: "WORLD-CLASS RETAIL EXPERIENCE"
  }
];
const Hero = ({ onExplore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === videoSlides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1));
  };

  // Auto-scroll logic: 8 seconds per video
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="hero-container reveal">
      {/* FIX 1: Render ALL videos inside the slider. 
         The 'translateX' moves this entire long div.
      */}
      <div
        className="video-slider"
      >
        <div className="video-slide" key={videoSlides[currentIndex].id}>
          <video autoPlay muted loop playsInline className="hero-video">
            <source src={videoSlides[currentIndex].url} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="hero-overlay">
        <div className="hero-content">
          {/* Use the currentIndex to pull the text from the array */}
          <p className="hero-subtitle fade-in-text" key={`sub-${currentIndex}`}>
            {videoSlides[currentIndex].subtitle}
          </p>
          <h1 className="hero-title fade-in-text" key={`title-${currentIndex}`}>
            {videoSlides[currentIndex].title}
          </h1>
          <button className="explore-btn" onClick={onExplore}>BEGIN EXPLORATION</button>
        </div>
      </div>

      <div className="slider-controls">
        <button className="nav-arrow prev" onClick={prevSlide}>&lt;</button>
        <button className="nav-arrow next" onClick={nextSlide}>&gt;</button>
      </div>

      <div className="slide-indicators">
        {videoSlides.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;