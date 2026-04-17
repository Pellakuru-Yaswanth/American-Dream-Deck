import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onNavClick }) => {
  const navItems = ['Overview', 'Retail', 'Luxury', 'Attractions', 'Dining', 'Events'];

  return (
    <nav className="navbar">
      <div className="nav-links">
        {navItems.map((item, index) => (
          <button 
            key={item} 
            className="nav-item"
            onClick={() => onNavClick(index)} // This triggers the slide change
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;