import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onNavClick }) => {
  const navItems = ['Overview', 'Retail', 'Luxury', 'Attractions', 'Events'];

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => onNavClick('Overview')} style={{cursor:'pointer'}}>
        AMERICAN DREAM
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <button 
            key={item} 
            className="nav-item"
            onClick={() => onNavClick(item)} // This triggers the scroll
          >
            {item}
          </button>
        ))}
      </div>
      <button className="cta-button" onClick={() => onNavClick('Events')}>
        PARTNER WITH US
      </button>
    </nav>
  );
};

export default Navbar;