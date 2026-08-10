import React from 'react';
import { Link } from 'react-router-dom';
import { useOffice } from '../context/OfficeContext';

const Footer = () => {
  const { details } = useOffice();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid-4">
          
          {/* Col 1: About */}
          <div className="footer-col">
            <img 
              src="/assets/2024/10/jobfactorylogo.jpg" 
              alt="The Job Factory Logo" 
              style={{ height: '48px', marginBottom: '1.5rem', borderRadius: '2px', filter: 'brightness(0.95)' }} 
            />
            <p style={{ lineHeight: '1.6', fontSize: '0.925rem' }}>
              Finding job is easy and it is never a bad time to be looking for work. We offer one of the fastest ways to find a job – we measure our success in days, not weeks.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Link</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/costs">Costs</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="footer-col">
            <h3>Contact Details</h3>
            <ul className="footer-contact-list">
              <li style={{ color: '#fff', fontWeight: 'bold' }}>Craig Binnie</li>
              <li>
                <a href={`mailto:${details.email}`}>{details.email}</a>
              </li>
              <li>
                <a href={details.phoneRaw}>{details.phone}</a>
              </li>
              {details.whatsapp && (
                <li>
                  WhatsApp <a href={details.whatsappRaw} target="_blank" rel="noopener noreferrer">{details.whatsapp}</a>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: Socials */}
          <div className="footer-col">
            <h3>Socials</h3>
            <div className="footer-social-icons">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link" 
                aria-label="Facebook"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link" 
                aria-label="Instagram"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="footer-bottom-bar">
          <p style={{ margin: '0 0 0.5rem 0', color: '#fff', fontWeight: '600' }}>The Job Factory © 2026</p>
          <p style={{ margin: '0', fontSize: '0.8rem', opacity: '0.7' }}>ABN: 94 165 350 710</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
