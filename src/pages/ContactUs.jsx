import React, { useState } from 'react';
import { useOffice } from '../context/OfficeContext';

const ContactUs = () => {
  const { details } = useOffice();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    job: '',
    referrer: '',
    additionalInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        job: '',
        referrer: '',
        additionalInfo: ''
      });
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <h1 className="text-hero" style={{ margin: '0' }}>Contact us</h1>
        </div>
      </section>

      {/* Contact Form / Info Grid */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '5rem', alignItems: 'start' }}>
          
          {/* Form Column */}
          <div>
            <h2 className="text-section-title" style={{ marginTop: '0', marginBottom: '1rem' }}>
              Want us to <span className="highlight-text" style={{ color: '#ffb300' }}>call you?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
              If you want us to call you to explain how we can help you find a job simply fill in the contact form below.
            </p>

            {submitted ? (
              <div style={{ padding: '3rem 2rem', backgroundColor: '#f0f4f8', border: '1px solid #e2e8f0', borderRadius: '4px', textAlign: 'center' }}>
                <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>🎉</span>
                <h3 className="text-card-title" style={{ color: 'var(--secondary)', marginBottom: '0.75rem' }}>Thank You!</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  We have received your details. Craig or one of our team members will contact you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-yellow">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid" style={{ marginBottom: '1.5rem' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" style={{ fontWeight: '700', color: 'var(--secondary)' }}>Your Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', border: '1px solid #ccd6e2', borderRadius: '4px', backgroundColor: '#f8fafc', outline: 'none', fontSize: '1rem' }}
                      required
                      placeholder="Your Name"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="phone" style={{ fontWeight: '700', color: 'var(--secondary)' }}>Phone *</label>
                    {/* Fixed standard 'tel' input allows normal typing and country codes, resolving WordPress validation errors */}
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', border: '1px solid #ccd6e2', borderRadius: '4px', backgroundColor: '#f8fafc', outline: 'none', fontSize: '1rem' }}
                      required
                      placeholder="Phone Number"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="email" style={{ fontWeight: '700', color: 'var(--secondary)' }}>Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', border: '1px solid #ccd6e2', borderRadius: '4px', backgroundColor: '#f8fafc', outline: 'none', fontSize: '1rem' }}
                      required
                      placeholder="Add email"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="city" style={{ fontWeight: '700', color: 'var(--secondary)' }}>City you want to work in *</label>
                    <input 
                      type="text" 
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', border: '1px solid #ccd6e2', borderRadius: '4px', backgroundColor: '#f8fafc', outline: 'none', fontSize: '1rem' }}
                      required
                      placeholder="City"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="job" style={{ fontWeight: '700', color: 'var(--secondary)' }}>Job you want *</label>
                    <input 
                      type="text" 
                      id="job"
                      name="job"
                      value={formData.job}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', border: '1px solid #ccd6e2', borderRadius: '4px', backgroundColor: '#f8fafc', outline: 'none', fontSize: '1rem' }}
                      required
                      placeholder="Job"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="referrer" style={{ fontWeight: '700', color: 'var(--secondary)' }}>How did you hear about us</label>
                    <input 
                      type="text" 
                      id="referrer"
                      name="referrer"
                      value={formData.referrer}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', border: '1px solid #ccd6e2', borderRadius: '4px', backgroundColor: '#f8fafc', outline: 'none', fontSize: '1rem' }}
                      placeholder="How did you hear about us"
                    />
                  </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
                  <label htmlFor="additionalInfo" style={{ fontWeight: '700', color: 'var(--secondary)' }}>Is there anything else we need to know about you?</label>
                  <textarea 
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows="6"
                    style={{ padding: '0.8rem 1rem', border: '1px solid #ccd6e2', borderRadius: '4px', backgroundColor: '#f8fafc', outline: 'none', fontSize: '1rem', resize: 'vertical' }}
                    placeholder="Comments"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-yellow"
                  style={{ padding: '0.8rem 3rem' }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div style={{ paddingLeft: '1rem' }}>
            <h2 className="text-section-subtitle" style={{ marginTop: '0', marginBottom: '2rem' }}>Contact Info</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Phone:</strong> {details.phone}
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Email:</strong> <a href={`mailto:${details.email}`} style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>{details.email}</a>
              </li>
              <li>
                <strong>WhatsApp:</strong> <a href={details.whatsappRaw} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>{details.whatsapp}</a>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
