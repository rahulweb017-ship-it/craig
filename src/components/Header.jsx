import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useOffice } from '../context/OfficeContext';

const Header = () => {
  const { details, country, setCountry } = useOffice();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const isHowItWorksActive = 
    location.pathname === '/how-it-works' || 
    location.pathname === '/resumes-interview-training' || 
    location.pathname === '/faq';

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/assets/2024/10/jobfactorylogo.jpg" alt="The Job Factory Logo" />
        </Link>

        {/* Navigation */}
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>

          {/* How It Works Dropdown */}
          <div 
            className="nav-dropdown-parent"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink
              to="/how-it-works"
              className={`nav-link ${isHowItWorksActive ? 'active' : ''}`}
              onClick={(e) => {
                // If on mobile (<=768px), toggle dropdown toggle on first tap
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                } else {
                  setMobileMenuOpen(false);
                }
              }}
            >
              How It Works <span className="dropdown-arrow">+</span>
            </NavLink>
            <div className={`nav-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <NavLink
                to="/resumes-interview-training"
                className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Resumes & Interview Training
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                FAQ
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/testimonials"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </NavLink>

          <NavLink
            to="/costs"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Costs
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </NavLink>

          {/* Mobile-only CTA and switcher */}
          <div className="mobile-only-header-actions">
            <a href={details.phoneRaw} className="header-phone-btn" style={{ textAlign: 'center', display: 'block' }}>
              {details.phone}
            </a>
            <select 
              value={country} 
              onChange={handleCountryChange} 
              className="header-country-select"
              aria-label="Select region"
              style={{ width: '100%' }}
            >
              <option value="NZ">New Zealand</option>
              <option value="AU">Australia</option>
            </select>
          </div>
        </nav>

        {/* Header Right Actions */}
        <div className="header-right">
          {/* Phone Number CTA */}
          <a href={details.phoneRaw} className="header-phone-btn">
            {details.phone}
          </a>

          {/* Office Context Switcher */}
          <select 
            value={country} 
            onChange={handleCountryChange} 
            className="header-country-select"
            aria-label="Select region"
          >
            <option value="NZ">New Zealand</option>
            <option value="AU">Australia</option>
          </select>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ fontSize: '1.5rem', color: 'var(--secondary)' }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
