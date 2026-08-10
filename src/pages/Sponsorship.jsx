import React from 'react';
import { Link } from 'react-router-dom';
import { useOffice } from '../context/OfficeContext';

const Sponsorship = () => {
  const { details } = useOffice();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '5rem 0' }}>
        <div className="container">
          <h1 className="highlight-text" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Sponsorship Jobs</h1>
          <p style={{ margin: '0', opacity: '0.9', fontSize: '1.2rem' }}>
            We help clients find employers capable of offering visa sponsorships in New Zealand & Australia.
          </p>
        </div>
      </section>

      {/* Main details */}
      <section className="section">
        <div className="container split-layout">
          <div>
            <h2 style={{ fontSize: '3rem', marginTop: '0' }}>
              Bypass portal filters and get <span className="highlight-text" style={{ color: '#ffb300' }}>direct sponsorships</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              We have been able to find employers that offer sponsorship jobs for clients in New Zealand & Australia in a wide range of industries.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Standard job boards automatically filter out applicants who do not currently hold working visas. This makes online applications nearly impossible for overseas candidates.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              Our direct placement service bypasses these filters. By sending your resume and custom cover letter directly to the executives of companies that have the capability to sponsor, we get you noticed by the people who have the authority to make visa decisions.
            </p>
            
            <div style={{ backgroundColor: '#f8fafc', padding: '2.5rem', borderRadius: '4px', border: '1px solid #e2e8f0', marginTop: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1.25rem' }}>
                Direct Placement Sponsorship Search
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                We can write a tailored request on your behalf and email it directly to several thousand employers in New Zealand or Australia to check for sponsorship positions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span>✓</span>
                  <span><strong>Targeted Lists:</strong> Focus only on companies capable of sponsor status.</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span>✓</span>
                  <span><strong>Tailored Pitch:</strong> Custom-written sponsorship request highlighting your value.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span>✓</span>
                  <span><strong>Direct Action:</strong> Put your CV on the desks of decision-makers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section section-dark" style={{ padding: '4.5rem 0' }}>
        <div className="container split-layout">
          <div>
            <h2 style={{ fontSize: '3rem', margin: '0' }}>
              Still Have Questions?<br />
              <span className="highlight-text">Get in touch with us</span>
            </h2>
            <p style={{ marginTop: '1.5rem', color: '#fff', opacity: '0.85', fontSize: '1.1rem', lineHeight: '1.6' }}>
              We're here to assist you with any questions, feedback, or inquiries you might have. Reach out to us, and our team will respond promptly to ensure you get the support you need!
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
            <Link to="/contact-us" className="btn-yellow" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;
