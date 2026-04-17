import React from 'react';
import '../styles/Events.css';

const Events = () => {
  const eventCapabilities = [
    { title: "STADIUM ACTIVATIONS", detail: "MetLife Stadium corridor, handling capacities for 50,000+ brand experiences.", stat: "50k+" },
    { title: "LUXURY SHOWCASES", detail: "The Avenue: bespoke fashion show & gala environments with high-end visibility.", stat: "10k FT²" },
    { title: "DIGITAL DOMINATION", detail: "Integrated network of 1,000+ synchronized LED screens for total brand takeovers.", stat: "1000+" },
    { title: "ACCESS & LOGISTICS", detail: "Direct NJ Transit rail access and dedicated private heliport for VIP integration.", stat: "20 min" }
  ];

  return (
    <section className="events-container">
      {/* 1. Cinematic Background Image */}
      <div className="events-visual-bg">
        <div className="bg-vignette"></div>
        <img 
          src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070" 
          alt="Live Concert Scale" 
          className="bg-img"
        />
      </div>

      <div className="events-content-deck">
        <div className="events-split">
          
          {/* 2. Left Side: Narrative and Capabilities Grid */}
          <div className="events-info-data">
            <span className="section-label">GLOBAL PLATFORM</span>
            <h2 className="premium-h2">Host Your <br />Next <span className="gold-text">Moment</span></h2>
            <p className="events-intro">
              From stadium-sized activations to intimate luxury launches, American Dream 
              offers an unparalleled canvas for global brands.
            </p>
            
            <div className="capabilities-grid-deck">
              {eventCapabilities.map((item, index) => (
                <div key={index} className="capability-card-deck">
                  <span className="cap-val-gold">{item.stat}</span>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Right Side: Visual Data Card */}
          <div className="events-summary-cards">
            {/* Direct Contact info becomes a data block instead of an inquiry portal */}
            <div className="deck-info-block">
              <h3>Partnership Access</h3>
              <p>Download the full technical specifications and venue brochures.</p>
              <span className="gold-text-data">PARTNERSHIP_DOSSIER_v3.pdf</span>
              <span className="gold-text-data">EVENT_SPECS_2026.pdf</span>
            </div>
            
            <div className="event-stat-card-deck">
              <span className="stat-value">3M+</span>
              <span className="stat-label">SQ. FT. OF POSSIBILITY</span>
              <div className="bar-gold"></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="deck-footer-compact">
        <p>© 2026 AMERICAN DREAM | THE GLOBAL DESTINATION</p>
        <p>40.8115° N, 74.0688° W</p>
      </footer>
    </section>
  );
};

export default Events;