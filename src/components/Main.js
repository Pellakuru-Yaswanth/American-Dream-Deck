import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from '../sections/Hero';
import WhyProperty from '../sections/WhyProperty';
import Luxury from '../sections/Luxury';
import Attractions from '../sections/Attractions';
import Dining from '../sections/Dining';
import Events from '../sections/Events';
import '../App.css';

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track internal steps within a slide (e.g., Attractions)
  const [subStepIndex, setSubStepIndex] = useState(0);

  // The total number of attractions in your AttractionsData is 6
  const TOTAL_ATTRACTIONS = 6;

  const nextSlide = () => {
    // Logic: If on Attractions slide (Index 3), check sub-steps first
    if (currentIndex === 3 && subStepIndex < TOTAL_ATTRACTIONS - 1) {
      setSubStepIndex(prev => prev + 1);
    } else if (currentIndex < slides.length - 1) {
      // Move to next main slide and reset sub-steps
      setCurrentIndex(currentIndex + 1);
      setSubStepIndex(0);
    }
  };

  const prevSlide = () => {
    // Logic: If on Attractions, go back through sub-steps first
    if (currentIndex === 3 && subStepIndex > 0) {
      setSubStepIndex(prev => prev - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      // If going back TO attractions, start at the last sub-step
      if (currentIndex - 1 === 3) setSubStepIndex(TOTAL_ATTRACTIONS - 1);
      else setSubStepIndex(0);
    }
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index);
      setSubStepIndex(0);
    }
  };

  const slides = [
    { id: 'Overview', component: <Hero /> },
    { id: 'Retail', component: <WhyProperty /> },
    { id: 'Luxury', component: <Luxury /> },
    // Pass the sub-step state to Attractions
    { id: 'Attractions', component: <Attractions activeIndex={subStepIndex} setActiveIndex={setSubStepIndex} /> },
    { id: 'Dining', component: <Dining /> },
    { id: 'Events', component: <Events /> }
  ];

  return (
    <div className="App deck-mode">
      <Navbar onNavClick={goToSlide} />
      
      <main className="slide-engine">
        {/* We add subStepIndex to the key so the slide updates when sub-navigation happens */}
        <div key={`${currentIndex}-${subStepIndex}`} className="active-slide-wrapper">
          {slides[currentIndex].component}
        </div>
      </main>

      <div className="deck-controls">
        <button className="control-btn" onClick={prevSlide} disabled={currentIndex === 0 && subStepIndex === 0}>
          PREV
        </button>
        
        <div className="slide-counter">
          {/* Show the sub-step if we are on the Attractions slide */}
          <span>{currentIndex + 1}{currentIndex === 3 ? `.${subStepIndex + 1}` : ''}</span> / {slides.length}
        </div>

        <button className="control-btn" onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Main;