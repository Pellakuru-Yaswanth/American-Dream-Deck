import React, { useState } from 'react';
import '../styles/Attractions.css';

const attractionData = [
  {
    id: 'nickelodeon',
    title: 'Nickelodeon Universe',
    desc: 'The largest indoor theme park in the Western Hemisphere.',
    stat: '35+ Rides',
    color: '#ff5c00'
  },
  {
    id: 'dreamworks',
    title: 'DreamWorks Water Park',
    desc: 'The largest indoor water park in North America.',
    stat: '1.5M Gallons',
    color: '#00a9e0'
  },
  {
    id: 'bigsnow',
    title: 'Big SNOW',
    desc: 'North America’s first and only indoor real-snow ski center.',
    stat: '5,500 Tons of Snow',
    color: '#ffffff'
  },
  {
    id: 'sealife',
    title: 'SEA LIFE Aquarium',
    desc: 'An immersive "City Under the Sea" featuring a massive underwater tunnel.',
    stat: '3,000+ Creatures',
    color: '#0054a6'
  },
  {
    id: 'legoland',
    title: 'LEGOLAND Discovery Center',
    desc: 'The ultimate indoor LEGO playground with 4D cinema and MINILAND.',
    stat: '12+ Attractions',
    color: '#d41010'
  },
  {
    id: 'therink',
    title: 'The Rink',
    desc: 'An NHL-regulation sized ice skating rink for open skating and events.',
    stat: 'Regulation Size',
    color: '#a5d1e1'
  }
];

const Attractions = ({onPartnerClick}) => {
  const [activeTab, setActiveTab] = useState(attractionData[0]);

  return (
    <section className="attractions-container reveal">
      {/* Background changes based on state */}
      <div className={`attractions-bg ${activeTab.id}`}>
        <div className="vignette"></div>
      </div>

      <div className="attractions-ui">
        <div className="attractions-sidebar">
          <span className="section-label">03 / WORLD-CLASS ADVENTURE</span>
          <h2>The <br />Experience</h2>
          <div className="tab-menu">
            {attractionData.map((item) => (
              <button 
                key={item.id}
                className={`tab-btn ${activeTab.id === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="attractions-detail">
          <div className="detail-card">
            <h3 className="fade-in" key={`${activeTab.id}-h3`}>{activeTab.title}</h3>
            <p className="fade-in" key={`${activeTab.id}-p`}>{activeTab.desc}</p>
            <div className="detail-stat">
              <span className="stat-value">{activeTab.stat}</span>
            </div>
            <div className="progress-container">
                <div key={activeTab.id} className="progress-bar"></div>
            </div>
            <button className="attractions-cta" onClick={onPartnerClick}>VIEW PARTNERSHIP OPS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;