import React from 'react';
import '../styles/WhyProperty.css';

const WhyProperty = () => {
  return (
    <section className="why-container reveal">
      <div className="why-bg-overlay"></div>

      <div className="why-content">
        <div className="text-side">
          <div className="badge">MARKET INTELLIGENCE 2026</div>
          <h2 className="premium-h2">
            The Economics of <br />
            <span className="outline-text">Prestige</span>
          </h2>
          
          <div className="hero-description">
            <p>
              American Dream represents a paradigm shift in global commerce. 
              With a <strong>70/30 split</strong> between entertainment and retail, we generate a 
              "halo effect" that drives a <strong>$1,200+ PSF</strong> (Price Per Square Foot) 
              average in our luxury wing.
            </p>
          </div>

          <div className="premium-stats-row">
            <div className="p-stat">
              <span className="p-value">40M</span>
              <span className="p-label">ANNUAL VISITATION</span>
              <p className="p-detail">Capturing 25% of NYC total tourism.</p>
            </div>
            <div className="p-divider"></div>
            <div className="p-stat">
              <span className="p-value">$165K</span>
              <span className="p-label">AVG. HHI</span>
              <p className="p-detail">Median Household Income of primary visitors.</p>
            </div>
          </div>

          {/* New Informative Module: Performance Tiers */}
          <div className="performance-tiers">
            <div className="tier-box">
              <span className="tier-title">DWELL TIME</span>
              <span className="tier-data">4.5 HOURS</span>
              <p>3x the national industry average.</p>
            </div>
            <div className="tier-box">
              <span className="tier-title">CONVERSION</span>
              <span className="tier-data">12% HIGHER</span>
              <p>Increased brand engagement vs. street-level retail.</p>
            </div>
          </div>
        </div>

        <div className="visual-side">
          <div className="main-frame">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" 
              alt="Luxury Experience" 
              className="main-img"
            />
            <div className="data-glass">
              <h4>98% OCCUPANCY</h4>
              <p>The Avenue: 100% Luxury Commitment</p>
              <div className="gold-progress-bar">
                <div className="fill"></div>
              </div>
            </div>
          </div>
          
          <div className="secondary-frame">
             <div className="insight-pill">
                <strong>INSIGHT:</strong> 65% of visitors visit 2+ attractions per trip.
             </div>
             <p className="location-tag">40.8115° N, 74.0688° W</p>
             <p className="sub-text">DIRECT ACCESS VIA NJ TRANSIT & HELIPORT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProperty;