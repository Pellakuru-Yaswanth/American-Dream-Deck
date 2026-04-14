import React from 'react';
import '../styles/Luxury.css';
import brochurePDF from '../assets/brochure.pdf';
import luxury1 from '../assets/luxury-1.png';
import luxury2 from '../assets/luxury-2.png';
import luxury3 from '../assets/luxury-3.png';
import luxury4 from '../assets/luxury-4.png';
import luxury_bg from '../assets/luxury-background.png';
const Luxury = ({onLeaseClick}) => {
  const brands = ["HERMÈS", "LOUIS VUITTON", "GUCCI", "SAINT LAURENT", "TIFFANY & CO.", "PRADA", "ROLEX"];

  const portfolio = [
    { title: "The Avenue", img: luxury1 },
    { title: "A Private Suite at DreamWorks Water Park", img: luxury2 },
    { title: "The VIP Cinema Experience", img: luxury3 },
    { title: "Luxury Dining", img: luxury4 },
  ];

  return (
    <section className="luxury-container reveal">
      {/* Cinematic Background */}
      <div className="luxury-video-bg">
        <div className="video-dimmer"></div>
        <img 
          src={luxury_bg} 
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
            <a href={brochurePDF} download="American Dream User Guide.pdf" className="luxury-cta-gold">
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