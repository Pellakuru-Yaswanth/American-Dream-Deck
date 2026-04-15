import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
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
          <p>INITIALIZING IMMERSIVE DECK</p>
          <span>EST. 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;