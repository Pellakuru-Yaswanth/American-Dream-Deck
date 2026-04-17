import React from 'react';
import '../styles/Dining.css';

const Dining = () => {
  const diningHighlights = [
    { title: "Fine Dining", desc: "Award-winning concepts from Michelin-starred chefs.", icon: "✧" },
    { title: "The Food Hall", desc: "A global curation of street-food and fast-casual favorites.", icon: "◈" },
    { title: "Entertainment Dining", desc: "Dinner theater and interactive culinary experiences.", icon: "✺" }
  ];

  return (
    <section className="dining-container">
      <div className="dining-split">
        {/* Left Side: Large Visual with Overlay */}
        <div className="dining-visual">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/dining.png`}
            alt="Luxury Dining" 
            className="dining-img"
          />
          <div className="dining-stat-overlay">
            <span className="stat-big">100+</span>
            <span className="stat-sub">DINING CONCEPTS</span>
          </div>
        </div>

        {/* Right Side: Informative Text */}
        <div className="dining-info">
          <span className="section-label">05 / HOSPITALITY</span>
          <h2 className="premium-h2">Global <br />Palates</h2>
          <p className="dining-intro">
            From Michelin-starred excellence to casual family favorites, our culinary 
            portfolio is designed to maximize visitor retention and dwell time.
          </p>

          <div className="dining-grid">
            {diningHighlights.map((item, i) => (
              <div key={i} className="dining-card">
                <span className="dining-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;