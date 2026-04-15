import React from 'react';
import '../styles/Luxury.css';

const Luxury = ({ onLeaseClick }) => {
  const brands = ["HERMÈS", "LOUIS VUITTON", "GUCCI", "SAINT LAURENT", "TIFFANY & CO.", "PRADA", "ROLEX"];

  const portfolio = [
    { title: "The Avenue", img: 'assets/luxury-1.png' },
    { title: "A Private Suite at DreamWorks Water Park", img: 'assets/luxury-2.png' },
    { title: "The VIP Cinema Experience", img: 'assets/luxury-3.png' },
    { title: "Luxury Dining", img: 'assets/luxury-4.png' },
  ];

  return (
    <section className="luxury-container reveal">
      {/* Cinematic Background */}
      <div className="luxury-video-bg">
        <div className="video-dimmer"></div>
        <img
          src={'assets/luxury-background.png'}
          alt="Luxury Interior"
          className="parallax-img"
        />
      </div>

      <div className="luxury-wrapper">
        <div className="luxury-text-content">
          <span className="section-label-light">THE GOLD STANDARD</span>
          <h2 className="luxury-title">The <span className="italic-text">Avenue</span></h2>
          <p className="luxury-description">
            Where the world's most storied fashion houses converge. A sanctuary of
            soaring glass architecture, white-glove service, and the ultimate
            expression of retail prestige.
          </p>

          <div className="luxury-brand-marquee">
            <div className="marquee-content">
              {[...brands, ...brands].map((brand, i) => (
                <span key={i} className="marquee-item">{brand}</span>
              ))}
            </div>
          </div>

          <div className="luxury-actions">
            <a onClick={onLeaseClick} className="luxury-cta-gold">
              REQUEST DOSSIER
            </a>
            <a href={'assets/brochure.pdf'} download="American Dream User Guide.pdf" className="luxury-cta-gold">
              USER GUIDE
            </a>
          </div>
        </div>

        {/* Floating Portfolio Grid */}
        <div className="luxury-portfolio-grid">
          {portfolio.map((item, index) => (
            <div key={index} className={`portfolio-card card-${index}`}>
              <div className="card-image-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-label">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Luxury;