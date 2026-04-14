import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhyProperty from './sections/WhyProperty';
import Luxury from './sections/Luxury';
import Attractions from './sections/Attractions';
import EventsContact from './sections/EventsContact';
import useReveal from './hooks/useReveal';
import './App.css';

function App() {
  // 1. Create references for each section
  useReveal();
  const sectionRefs = {
    Overview: useRef(null),
    Retail: useRef(null),
    Luxury: useRef(null),
    Attractions: useRef(null),
    Events: useRef(null),
    Inquire: useRef(null),
  };

  // 2. The function that handles the "Jump"
  const scrollToSection = (sectionName) => {
    const targetRef = sectionRefs[sectionName];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* 3. Pass the function to the Navbar */}
      <Navbar onNavClick={scrollToSection} />
      
      <main>
        <div ref={sectionRefs.Overview}><Hero onExplore={() => scrollToSection('Retail')} /></div>
        <div ref={sectionRefs.Retail}><WhyProperty /></div>
        <div ref={sectionRefs.Luxury}><Luxury onLeaseClick={() => scrollToSection('Events')}/></div>
        <div ref={sectionRefs.Attractions}><Attractions onPartnerClick={() => scrollToSection('Events')}/></div>
        {/* We map Events and Inquire to the same final section or split them */}
        <div ref={sectionRefs.Events}><EventsContact /></div>
        <div ref={sectionRefs.Inquire} style={{height: '1px'}}></div> 
      </main>
    </div>
  );
}

export default App;