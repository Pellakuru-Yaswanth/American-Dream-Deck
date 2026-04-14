import React, { useState } from 'react';
import '../styles/EventsContact.css';

const EventsContact = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    interest: '',
    message: ''
  });

  // 2. State for Submission Status
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate an API call delay
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus('success');
      setFormData({
                fullName: '',
                email: '',
                interest: '',
                message: ''
              });
    }, 1500);
  };

  return (
    <section className="events-container reveal">
      <div className="events-split">
        <div className="events-info">
          <span className="section-label">04 / GLOBAL PLATFORM</span>
          <h2>Host Your <br />Next <span className="gold-text">Moment</span></h2>
          <p>
            From stadium-sized activations to intimate luxury launches, American Dream 
            offers an unparalleled canvas for brands to reach millions.
          </p>
          <ul className="capabilities-list">
            <li>• Product Launches & Pop-ups</li>
            <li>• Fashion Week Showcases</li>
            <li>• Live Concerts & Performances</li>
            <li>• Tech & Auto Expositions</li>
          </ul>
        </div>

        <div className="contact-form-container">
          {status === 'success' ? (
            <div className="form-success-message">
              <div className="success-icon">✓</div>
              <h3>Dossier Requested</h3>
              <p>Thank you, {formData.fullName.split(' ')[0]}. A partnership executive will contact you shortly to discuss your vision.</p>
              <button className="reset-btn" onClick={() => setStatus('idle')}>SEND ANOTHER INQUIRY</button>
            </div>
          ) : (
            <>
              <h3>Inquiry Portal</h3>
              <p>Speak with our Partnership & Leasing Team</p>
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="FULL NAME" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="CORPORATE EMAIL" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <select 
                    name="interest" 
                    value={formData.interest} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled>INTEREST AREA</option>
                    <option value="leasing">Retail Leasing</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="events">Event Booking</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="TELL US ABOUT YOUR VISION" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`submit-btn ${status === 'loading' ? 'loading' : ''}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'TRANSMITTING...' : 'SUBMIT INQUIRY'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <footer className="deck-footer">
        <p>© 2026 AMERICAN DREAM | THE GLOBAL DESTINATION</p>
        <div className="footer-links">
          <span>PRIVACY</span>
          <span>INVESTORS</span>
          <span>PRESS KIT</span>
        </div>
      </footer>
    </section>
  );
};

export default EventsContact;