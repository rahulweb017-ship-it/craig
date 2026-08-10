import React from 'react';
import { Link } from 'react-router-dom';
import { useOffice } from '../context/OfficeContext';

const CTA = ({ title, subtitle, buttonText = "Contact Us", buttonLink = "/contact-us" }) => {
  const { details } = useOffice();
  
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>{title || "Find a Job Fast"}</h2>
        <p>
          {subtitle || `We want all of our clients who are looking for a job to get a job fast, so we will do everything we can to increase their chances. If you need a job fast, contact us today.`}
        </p>
        <div style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '500' }}>
          <strong>Email:</strong> <a href={`mailto:${details.email}`} style={{ textDecoration: 'underline', color: '#fff' }}>{details.email}</a>
          <span style={{ margin: '0 1rem' }}>|</span>
          <strong>Phone:</strong> <a href={details.phoneRaw} style={{ textDecoration: 'underline', color: '#fff' }}>{details.phone}</a>
        </div>
        <Link to={buttonLink} className="btn-secondary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
