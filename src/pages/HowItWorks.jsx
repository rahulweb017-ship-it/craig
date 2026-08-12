import React from 'react';
import { Link } from 'react-router-dom';
import { useOffice } from '../context/OfficeContext';

const HowItWorks = () => {
  const { details } = useOffice();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '5.5rem 0' }}>
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          {/* Hero Content on Left */}
          <div style={{ textAlign: 'left' }}>
            <h1 className="highlight-text text-hero" style={{ marginBottom: '1.5rem', marginTop: '0' }}>
              How It Works
            </h1>
            <div className="hero-text-block text-body-large" style={{ marginBottom: '0', lineHeight: '1.6' }}>
              <p style={{ fontWeight: '700', marginBottom: '0.75rem' }}>
                The Job Factory finds jobs before they are advertised or given to recruitment companies.
              </p>
              <p style={{ opacity: '0.9' }}>
                Our clients are usually the only person who is interviewed for the jobs we find.
              </p>
            </div>
          </div>
          
          {/* Hero Image on Right */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/2024/11/sticky-note-with-word-work-it-office-workplace-2023-11-27-05-03-19-utc-1.jpg" 
              alt="Sticky note with word work it" 
              style={{ width: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Can you help me find a job Section */}
      <section className="section">
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          {/* Text and list on Left */}
          <div>
            <h2 className="text-section-title" style={{ marginTop: '0', marginBottom: '1.5rem' }}>
              Can you help me <span className="highlight-text" style={{ color: '#ffb300' }}>find a job in New Zealand?</span>
            </h2>
            <p className="text-body-large" style={{ fontWeight: '500', color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
              Odds are that we are your quickest way to get a job.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              If you are applying for jobs after they appear on job sites, you will probably be competing with more than 100 other applicants. How likely is it that you will be the top choice when there are so many other applicants? You're wasting your time applying for jobs after they are advertised. We aim to find our clients jobs before they are advertised so that you do not have to compete against anyone else. If you have the right skills and qualifications for the job, you have the chance to get it before anyone else even knows the job exists.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              Our clients want to get to give themselves an edge.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: '500', lineHeight: '1.75' }}>
              And best of all, it's fast.
            </p>

            <h4 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--secondary)' }}>
              To boost your chances, we can also:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span>
                <span>Give your resume a once-over to ensure proper English grammar and formatting</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span>
                <span>Craft a perfectly-written cover letter for you, so that employers see your application stands out</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span>
                <span>Help you prepare for your interview with our 1-hour interview class</span>
              </li>
            </ul>
          </div>
          
          {/* Auckland Image on Right */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/2025/02/aerial-view-over-auckland-city-center-2023-11-27-05-36-18-utc-1.jpg" 
              alt="Aerial view over Auckland city center" 
              style={{ width: '100%', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Get Hired Fast Section */}
      <section className="section section-dark" style={{ padding: '4.5rem 0' }}>
        <div className="container split-layout">
          <div>
            <h2 className="text-section-subtitle" style={{ margin: '0' }}>
              Get Hired Fast<br />
              <span className="highlight-text" style={{ color: '#FCE38A' }}>Employers Call You!</span>
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className="text-body-large" style={{ color: 'var(--text-light)', opacity: '0.95', margin: '0', lineHeight: '1.75' }}>
              Our clients are often called by employers in just a couple of days – sometimes in only hours. We have had clients who received calls and started work the next day. Our service is different because employers will be the ones calling you.
            </p>
          </div>
        </div>
      </section>

      {/* Can you find me a job Section */}
      <section className="section">
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          {/* Text content on Left */}
          <div>
            <h2 className="text-section-title" style={{ marginTop: '0', marginBottom: '1.5rem' }}>
              Can you <span className="highlight-text" style={{ color: '#ffb300' }}>find me a job?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              The Job Factory was established as an affordable and fair way to try to get jobs for job-seekers. Our aim is to find jobs for people fast – we talk in hours and days. Not weeks or months.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              Of course you can search for a job on your own. But every extra day you are jobless will cost you more than our fee in wages. Finding a job within days can change your life and we can help.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0', lineHeight: '1.75' }}>
              Getting a job is simple. There are thousands of jobs advertised. New ones appear daily. The only problem is that there are too many people looking for work.
            </p>
          </div>
          
          {/* Hiring Image on Right */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/2025/02/woman-pointing-and-hiring-sign-laptop-and-human-2023-11-27-05-28-37-utc-1.jpeg" 
              alt="Hiring sign on laptop screen" 
              style={{ width: '100%', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Why can't I find a job Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="split-layout" style={{ marginBottom: '2.5rem' }}>
            <div>
              <h2 className="text-section-title" style={{ marginTop: '0' }}>
                Why can't <span className="highlight-text" style={{ color: '#ffb300' }}>I find a job?</span>
              </h2>
            </div>
            <div>
              <p className="text-body-large" style={{ color: 'var(--text-muted)', margin: '0', lineHeight: '1.7' }}>
                There are two main reasons getting a job is difficult.
              </p>
            </div>
          </div>

          <div className="grid-2col">
            <div style={{ backgroundColor: '#f8fafc', padding: '2.5rem', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '1rem' }}>Bad cover letters</h3>
              <p style={{ color: 'var(--text-muted)', margin: '0', fontSize: '1rem', lineHeight: '1.75' }}>
                Your cover letter is bad. If the English in your cover letter is poor you will be deleted instantly. It's simple. If your cover letter is not perfect there is a chance that you will never be employed in the job that you want. If you have been hunting for a job for more than a couple of weeks then this may be your problem.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', padding: '2.5rem', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '1rem' }}>Too many job seekers</h3>
              <p style={{ color: 'var(--text-muted)', margin: '0', fontSize: '1rem', lineHeight: '1.75' }}>
                There are too many people competing for the jobs that you are applying for. If you wait for a job to be advertised then you will have very little chance of getting it. There could easily be 100 or more applicants going for the same job. The easiest way to get a job is to reach the employer before the job is advertised. This is what we do. Our clients are often the only ones interviewed. That is why our clients can get a job so easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How confident are you Section: Image Left, Text Right */}
      <section className="section">
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          {/* Businessman Image on Left */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/2025/02/portrait-of-a-smiling-businessman-sitting-in-an-of-2023-11-27-05-04-53-utc-1.jpg" 
              alt="Portrait of a smiling businessman" 
              style={{ width: '100%', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>

          {/* Text content on Right */}
          <div>
            <h2 className="text-section-subtitle" style={{ marginTop: '0', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
              How confident are you in your own ability to find a job fast?
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              If you leave this website today without engaging our services we urge you to have a careful think about your job-seeking tactics. If you are simply applying for advertised jobs, your search could take months. You need to be ahead of the pack.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              Our advice is to make sure your cover letter is perfect. If it contains poor English, grammar or punctuation it will be deleted. You have spent the past 12+ years getting an education – what you do now will affect your income for years. DO NOT take a chance with substandard documentation – you might save $100, but you might also end up in a job that pays $5000 less.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              The only way to be sure that you are the first – and perhaps only – person to be considered is to get in before the job is advertised.
            </p>
            <p className="text-body-large" style={{ color: 'var(--text-dark)', fontWeight: '700', margin: '0' }}>
              Happy job hunting!
            </p>
          </div>
        </div>
      </section>

      {/* In-depth Analysis Section */}
      <section className="section section-bg">
        <div className="container">
          <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '1.1rem', textTransform: 'uppercase' }}>Our Work</span>
          <h2 className="text-section-title" style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>
            In-depth analysis<br />of our work
          </h2>

          <div style={{ backgroundColor: '#fff', padding: '4.5rem', borderRadius: '4px', boxShadow: 'var(--shadow-lg)', border: '1px solid #e2e8f0' }}>
            <h3 className="text-section-subtitle" style={{ marginBottom: '2rem' }}>
              How Do We Find Jobs That No One Else Knows About
            </h3>
            
            <Link to="/contact-us" className="btn-yellow" style={{ marginBottom: '2.5rem' }}>
              Contact Us
            </Link>

            <div className="text-body-large" style={{ color: 'var(--text-muted)', lineHeight: '1.75' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Our process is simple. Just tell us the type of job that you want – accounting, aged care, administration, engineering, customer service, nursing, IT or any other type of job that you can think of – and we will start sending your cover letter and resume to up to 1500 companies that might have the type of job that you want.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                The employers will be as close to the area in which you live – or you can try the whole country.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                So, if you want an engineering job in Wellington, we will be sending to your resume to engineering companies in Wellington. If you want an accounting job in Auckland, we will be sending your resume to companies in Auckland. And, if you want a nursing job anywhere at all, we will send your resume to hospitals all over the country.
              </p>
              <p style={{ margin: '0' }}>
                It does not matter what type of job you want; the strategy is always the same – except that we can't help with Government, hospitality or retail jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions? Section */}
      <section className="section section-dark" style={{ padding: '4.5rem 0' }}>
        <div className="container split-layout">
          <div>
            <h2 className="text-section-title" style={{ margin: '0' }}>
              Still Have Questions?<br />
              <span className="highlight-text" style={{ color: '#FCE38A' }}>Get in touch with us</span>
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

export default HowItWorks;
