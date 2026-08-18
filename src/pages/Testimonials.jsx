import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import testimonialList from '../data/testimonials.json';

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(24);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialList);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 24, testimonials.length));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '4.5rem 0' }}>
        <div className="container split-layout-half" style={{ textAlign: 'left', alignItems: 'center' }}>
          <div>
            <h1 className="text-hero" style={{ margin: '0' }}>Testimonials</h1>
            <p style={{ margin: '1rem 0 0 0', opacity: '0.85', fontSize: '1.15rem', lineHeight: '1.6' }}>
              Discover how our services have helped job seekers land interviews and secure their dream jobs. Read their success stories here!
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <img 
              src="/assets/2024/11/group-of-diverse-group-of-business-people-having-a-2023-11-27-04-53-56-utc-1.jpg" 
              alt="Happy team with speech bubbles placeholder" 
              style={{ width: '100%', maxWidth: '420px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-section-title" style={{ marginTop: '0', marginBottom: '0.5rem' }}>
            What Our <span className="highlight-text" style={{ color: '#ffb300' }}>Clients Say</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '4rem' }}>
            These are unfiltered messages from clients who have found jobs with our help.
          </p>

          {/* Testimonial Images Grid */}
          <div className="testimonials-grid">
            {testimonials.slice(0, visibleCount).map((url, index) => (
              <div key={index} className="testimonial-page-card">
                <img 
                  src={url} 
                  alt={`Client success message screenshot ${index + 1}`} 
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '2px'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < testimonials.length && (
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <button 
                onClick={handleLoadMore} 
                className="btn-yellow"
                style={{ padding: '1rem 3.5rem', fontSize: '1.1rem' }}
              >
                Load More Testimonials
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
