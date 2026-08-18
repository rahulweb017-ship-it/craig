import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOffice } from '../context/OfficeContext';

const Home = () => {
  const { details } = useOffice();
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Specific 15 testimonials images that match the wordpress homepage exactly
  const homepageTestimonials = [
    '/assets/2024/11/n155-engineer-2.jpg',
    '/assets/2024/11/n156-2.jpg',
    '/assets/2024/11/n157-posted-2.jpg',
    '/assets/2024/11/n158-posted-nursing-2.jpg',
    '/assets/2024/11/n159-2.jpg',
    '/assets/2024/11/n160-posted-2.jpg',
    '/assets/2024/11/n161-posted-2.jpg',
    '/assets/2024/11/n162-POSTED-2.jpg',
    '/assets/2024/11/n163-2.jpg',
    '/assets/2024/11/n167-2.jpg',
    '/assets/2024/11/n168-2.jpg',
    '/assets/2024/11/n169-2.jpg',
    '/assets/2024/11/n170-posted-2.jpg',
    '/assets/2024/11/n180-2.jpg',
    '/assets/2024/11/n181-posted-2.jpg'
  ];

  // Dynamic responsive slider items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setItemsPerView(4);
      } else if (window.innerWidth > 576) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto scroll testimonials slider
  useEffect(() => {
    const maxIndex = homepageTestimonials.length - itemsPerView;
    if (maxIndex <= 0) return;
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 4500);
    return () => clearInterval(interval);
  }, [itemsPerView, homepageTestimonials.length]);

  const handlePrev = () => {
    const maxIndex = homepageTestimonials.length - itemsPerView;
    setSliderIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    const maxIndex = homepageTestimonials.length - itemsPerView;
    setSliderIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const sectors = [
    {
      title: "Engineering",
      desc: "Mechanical engineering, electrical engineering, civil engineering, structural engineering, chemical and sound engineering and more."
    },
    {
      title: "Information Technology",
      desc: "Helpdesk, software testing, software development, networking, telecommunication, IT support and more."
    },
    {
      title: "Accounting",
      desc: "Accounting, finance, bookkeeping, auditing, graduate accounting, accounts and more."
    },
    {
      title: "Medical",
      desc: "All jobs in the aged care, nursing, dental or any other medical fields."
    },
    {
      title: "Law",
      desc: "Lawyer, solicitor, law graduate, legal assistant, paralegal or any other job in the legal profession."
    },
    {
      title: "Project management",
      desc: "Project management, data analyst, project coordinator, asset management, IT, engineering jobs"
    },
    {
      title: "Architecture",
      desc: "Architect, drafting, town planning, building, project manager, surveyor"
    },
    {
      title: "Sponsored jobs",
      desc: "We have been able to find employers that offer sponsorship jobs for clients in New Zealand in a wide range of industries."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container">
          <span className="hero-subtitle">Finding Jobs Before They Are Advertised</span>
          <h1>The fastest and easiest<br />way to find a job</h1>
          
          <div className="hero-text-block">
            <p>
              Want to be the only person who is interviewed for a job? Want to skip the queue? Want an effective and proven cover letter and resume at an affordable price? Need interview training to help you ace an interview?
            </p>
            <p>
              Our successful clients often secure jobs within days. The Job Factory takes the stress out of looking for professional work. We help job seekers skip the queue by sending your resume to hundreds of employers in search of a position before it is advertised – before anyone else knows it exists.
            </p>
          </div>
          
          <Link to="/contact-us" className="btn-yellow">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Skip the Queue Section (Aligned Center Vertically) */}
      <section className="section">
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="text-section-title" style={{ marginTop: '0', marginBottom: '0' }}>
              Skip the <span className="highlight-text">queue</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: '500' }}>
              When you are the only person who is interviewed, you only have to convince the employer that you can do the job, not that you are better than 100 other applicants. The Job Factory offers an easy and fast way to look for a job.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We measure our success in days, not weeks. For proof, the first step is to check out the hundreds of screenshot messages from happy clients on our Testimonials page. We can find virtually any professional job anywhere in New Zealand or Australia including accounting, engineering, IT, aged care and nursing jobs.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Our success is due to the fact that we find jobs before they are advertised. Once a job is advertised it is too late. Your chances are low. That's why people take months to get a job.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We are the opposite of traditional recruitment companies. We care about our clients and work to maximise your chance of getting work fast. Our clients are often the only people interviewed for jobs. You do not have to compete with hundreds of other job seekers any more.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              We will help you find a job before anyone else even knows it exists.
            </p>
            <Link to="/contact-us" className="btn-yellow">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* The Cost Section */}
      <section className="section section-dark" style={{ padding: '4rem 0' }}>
        <div className="container split-layout">
          <div>
            <h2 style={{ fontSize: '3.25rem', margin: '0' }}>
              The <span className="highlight-text">cost</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem', height: '100%' }}>
            <p style={{ fontSize: '1.25rem', margin: '0', color: 'var(--text-light)', opacity: '0.95', lineHeight: '1.7' }}>
              Our fee is {details.costs.search}. Our resumes and cover letters cost {details.costs.resume}. Interview training is available for {details.costs.training}.
            </p>
            <div>
              <Link to="/costs" className="btn-yellow">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* We can help with any professional jobs Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-section-title" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            We can help with any professional jobs
          </h2>
          
          <div className="sectors-grid">
            {sectors.map((sec, i) => (
              <div key={i} className="sector-box">
                <h3>{sec.title}</h3>
                <p>{sec.desc}</p>
              </div>
            ))}
          </div>

          <div className="sector-warning-bar">
            We cannot help with government or unskilled jobs.
          </div>
        </div>
      </section>

      {/* How we do it / Zigzag Cards Section */}
      <section className="how-we-do-it-container">
        <div className="container">
          <div className="flex-header">
            <div>
              <span className="hero-subtitle">How we do it</span>
              <h2 className="text-section-title" style={{ color: 'var(--text-light)', margin: '0' }}>
                We are committed<br />to <span className="highlight-text">Your Success</span>
              </h2>
            </div>
            <div>
              <Link to="/testimonials" className="btn-yellow">
                Check out our testimonials
              </Link>
            </div>
          </div>

          {/* Staggered Zigzag Cards */}
          <div className="zigzag-card-list">
            
            {/* Card 1: Wooden blocks spelling JOB with toy workers */}
            <div className="zigzag-card" >
              <div>
                <img 
                  src="/assets/2024/11/miniature-people-or-small-figure-worker-on-wood-bl-2023-11-27-05-33-25-utc-1.jpg" 
                  alt="Tiny wooden blocks spelling JOB with toy workers" 
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0', display: 'block' }}
                />
              </div>
              <div>
                <h3>FIND A JOB FAST</h3>
                <p>
                  We will send your resume and cover letter to hundreds of companies in search of a vacancy for you. Just tell us the type of job that you want (accounting, engineering, nursing, IT, law, architecture or any other professional job). You can pick the city that you want to work in so that we can target your preferred locations or we can try the whole country.
                </p>
                <Link to="/how-it-works" className="btn-yellow">
                  Find out more
                </Link>
              </div>
            </div>

            {/* Card 2: Handshake with a resume document */}
            <div className="zigzag-card zigzag-card-right" >
              <div>
                <h3>Resumes</h3>
                <p>
                  We can help you prepare a cover letter and resume that works. Our cover letters make employers notice our clients and have helped hundreds of our clients get jobs.
                </p>
                <Link to="/resumes-interview-training" className="btn-yellow">
                  Find out more
                </Link>
              </div>
              <div>
                <img 
                  src="/assets/2024/11/job-interviewers-are-shaking-hands-to-congratulate-2023-11-27-05-16-30-utc-1.jpg" 
                  alt="Resume and handshake agreement" 
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0', display: 'block' }}
                />
              </div>
            </div>

            {/* Card 3: Business meeting group */}
            <div className="zigzag-card" >
              <div>
                <img 
                  src="/assets/2024/11/business-women-2023-11-27-05-21-53-utc-1.jpg" 
                  alt="Business meeting and training session" 
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0', display: 'block' }}
                />
              </div>
              <div>
                <h3>Interview Training</h3>
                <p>
                  Interview training can give you an edge over other job seekers by helping you formulate answers to the most likely questions. We can also teach you how to use some simple psychology to make interviewers choose you over other applicants. And, most importantly, we can discuss how to negotiate the best salary during wage negotiations.
                </p>
                <Link to="/resumes-interview-training" className="btn-yellow">
                  Find out more
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials preview section with Interactive Testimonial Slider */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="flex-header" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '1.15rem' }}>Testimonials</span>
              <h2 className="text-section-title" style={{ margin: '0.5rem 0 0.75rem' }}>
                See Our <span className="highlight-text" style={{ color: '#ffb300' }}>Results</span>
              </h2>
              <p className="text-body-large" style={{ color: 'var(--text-muted)', margin: '0' }}>
                Check out hundreds of success stories
              </p>
            </div>
            <div>
              <Link to="/testimonials" className="btn-yellow">
                See our testimonials
              </Link>
            </div>
          </div>

          {/* Testimonial Slider Container */}
          <div className="testimonial-slider-container">
            <div 
              className="testimonial-slider-track"
              style={{
                transform: `translateX(-${sliderIndex * (100 / homepageTestimonials.length)}%)`,
                width: `${(homepageTestimonials.length * 100) / itemsPerView}%`,
                margin: '0 -0.75rem'
              }}
            >
              {homepageTestimonials.map((url, index) => (
                <div 
                  key={index} 
                  className="testimonial-slider-item"
                  style={{
                    flex: `0 0 ${100 / homepageTestimonials.length}%`,
                    padding: '0 0.75rem'
                  }}
                >
                  <div className="testimonial-slider-card">
                    <img 
                      src={url} 
                      alt={`Testimonial screenshot ${index + 1}`} 
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '250px',
                        objectFit: 'contain',
                        borderRadius: '2px'
                      }}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next controls */}
            <button 
              onClick={handlePrev}
              className="testimonial-slider-btn prev"
              aria-label="Previous testimonials"
            >
              ❮
            </button>
            <button 
              onClick={handleNext}
              className="testimonial-slider-btn next"
              aria-label="Next testimonials"
            >
              ❯
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
