import React from 'react';
import '../styles/Loader.css';
import { useState, useEffect } from 'react';

const Loader = ({onStart}) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Match this timer to your 3.5s animation
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="logo-section">
          <h1 className="loader-logo">AMERICAN <span>DREAM</span></h1>
          <div className="loader-line-track">
            <div className="loader-line-fill"></div>
          </div>
        </div>
        <div className="loader-footer">
          {!isFinished ? (
            <>
              <p className="loading-text">INITIALIZING IMMERSIVE DECK</p>
              <span>EST. 2026</span>
            </>
          ) : (
            <button className="enter-btn fade-in" onClick={onStart}>
              BEGIN EXPERIENCE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;