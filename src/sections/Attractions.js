import React from 'react';
import '../styles/Attractions.css';

const attractionData = [
  { id: 'nickelodeon', title: 'Nickelodeon Universe', desc: 'The largest indoor theme park in the Western Hemisphere.', stat: '35+ Rides', color: '#ff5c00' },
  { id: 'dreamworks', title: 'DreamWorks Water Park', desc: 'The largest indoor water park in North America.', stat: '1.5M Gallons', color: '#00a9e0' },
  { id: 'bigsnow', title: 'Big SNOW', desc: 'North America’s first and only indoor real-snow ski center.', stat: '5,500 Tons of Snow', color: '#ffffff' },
  { id: 'sealife', title: 'SEA LIFE Aquarium', desc: 'An immersive "City Under the Sea" featuring a massive underwater tunnel.', stat: '3,000+ Creatures', color: '#0054a6' },
  { id: 'legoland', title: 'LEGOLAND Discovery Center', desc: 'The ultimate indoor LEGO playground with 4D cinema and MINILAND.', stat: '12+ Attractions', color: '#d41010' },
  { id: 'therink', title: 'The Rink', desc: 'An NHL-regulation sized ice skating rink for open skating and events.', stat: 'Regulation Size', color: '#a5d1e1' }
];

// Receive activeIndex and setActiveIndex from Main.js
const Attractions = ({ activeIndex, setActiveIndex }) => {
  
  // Use the prop from Main.js to determine which attraction to show
  const activeTab = attractionData[activeIndex] || attractionData[0];

  return (
    <section className="attractions-container">
      {/* Background responds to the shared activeIndex */}
      <div className={`attractions-bg ${activeTab.id}`}>
        <div className="vignette"></div>
      </div>

      <div className="attractions-ui">
        <div className="attractions-sidebar">
          <span className="section-label">WORLD-CLASS ADVENTURE</span>
          <h2 className="premium-h2">The <br />Experience</h2>
          
          <div className="tab-menu">
            {attractionData.map((item, index) => (
              <button 
                key={item.id}
                className={`tab-btn ${activeIndex === index ? 'active' : ''}`}
                // Updating this state updates the Main.js counter
                onClick={() => setActiveIndex(index)}
              >
                <span className="tab-number">0{index + 1}</span> {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="attractions-detail">
          {/* The key ensures the fade-in animation re-triggers on every NEXT click */}
          <div className="detail-card" key={activeTab.id}>
            <span className="stat-badge" style={{color: activeTab.color}}>
              {activeTab.stat}
            </span>
            <h3 className="detail-title">{activeTab.title}</h3>
            <p className="detail-desc">{activeTab.desc}</p>
            
            <div className="sub-nav-hint">
              {activeIndex + 1} / {attractionData.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;