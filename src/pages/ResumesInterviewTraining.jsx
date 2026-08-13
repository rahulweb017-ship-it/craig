import React from 'react';
import { Link } from 'react-router-dom';
import { useOffice } from '../context/OfficeContext';

const ResumesInterviewTraining = () => {
  const { details } = useOffice();

  const achievements = [
    "Build rapport with interviewers.",
    "Learn to successfully respond to difficult questions with ease.",
    "Know how to discuss employment gaps",
    "Create a plan to discuss salary and your value",
    "Create smart questions to ask on your interview"
  ];

  const commonQuestions = [
    "Tell me a little about yourself",
    "What made you apply for this role?",
    "Why should we hire you?",
    "What are your strengths?",
    "What can you bring to our organization?",
    "Why do you want this job?",
    "Tell me about your biggest professional achievement",
    "What do you consider to be your biggest weaknesses?",
    "Describe a time you handled a challenging situation",
    "Tell me about a time you disagreed with a decision",
    "What type of accomplishments are you most proud of?",
    "How do you think others would describe you?",
    "Tell me about a mistake you made and how you handled it"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'left' }}>
          <h1 className="text-hero" style={{ marginBottom: '1rem', lineHeight: '1.15' }}>
            Our resumes have<br />helped hundreds of<br />clients get jobs
          </h1>
          <p style={{ margin: '0', opacity: '0.9', fontSize: '1.2rem' }}>
            We write the resumes and cover letters that will help you succeed.
          </p>
        </div>
      </section>

      {/* Resumes and cover letters that work Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-section-subtitle" style={{ marginBottom: '0.75rem' }}>Resumes and cover letters that work</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: '0' }}>The Job Factory takes the stress out of looking for a job.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Panel 1 */}
            <div className="training-grid">
              <div>
                <img 
                  src="/assets/2024/11/group-of-diverse-group-of-business-people-having-a-2023-11-27-04-53-56-utc-1.jpg" 
                  alt="Resume analysis" 
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="text-card-title" style={{ marginBottom: '1.25rem' }}>Why a Good Resume Matters</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: '0', lineHeight: '1.7' }}>
                  A good resume and cover letter will dramatically improve your chances of getting a job interview. On the other hand, a bad cover letter and resume will be deleted, and you will remain unemployed.
                </p>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="training-grid">
              <div style={{ backgroundColor: '#f8fafc', padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="text-card-title" style={{ marginBottom: '1.25rem' }}>Affordable and Effective Services</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: '0', lineHeight: '1.7' }}>
                  There is simply no need to spend hundreds of dollars on a resume. The Job Factory ensures that all of our cover letters and resumes are designed to give you the best chance of getting a job.
                </p>
              </div>
              <div>
                <img 
                  src="/assets/2024/11/sticky-note-with-word-work-it-office-workplace-2023-11-27-05-03-19-utc-1.jpg" 
                  alt="Work place details checklist" 
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing & Packages Section */}
      <section className="how-we-do-it-container">
        <div className="container split-layout-half">
          <div className="package-card" style={{ backgroundColor: '#fff', borderRadius: '4px', color: 'var(--text-dark)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 className="text-section-subtitle" style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Pricing & Packages</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              We offer a cover letter and resume package. If you only want us to create a cover letter and resume that will help you get a job, we can do that too.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span>⭐</span>
                <span>Resume & Cover Letter Package: {details.costs.resume}</span>
              </li>
              <li style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span>⭐</span>
                <span>Cover Letter Only: {details.costs.admin === '$10' ? '$75' : '$75 AUD'}</span>
              </li>
              <li style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span>⭐</span>
                <span>Express Service (24-hour turnaround): {details.costs.admin === '$10' ? '$200' : '$200 AUD'}</span>
              </li>
            </ul>
          </div>
          <div></div> {/* Empty right column */}
        </div>
      </section>

      {/* About Our Writers Section */}
      <section className="section">
        <div className="container split-layout">
          <div>
            <h2 className="text-section-title" style={{ marginTop: '0' }}>
              About Our <span className="highlight-text" style={{ color: '#ffb300' }}>Writers</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.7' }}>
              The Job Factory employs professional writers and language experts. Our top writers have written thousands of resumes and have helped hundreds of clients to get a job.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: '0', lineHeight: '1.75' }}>
              Despite their expertise, we offer one of the cheapest resume-writing services in Australia & New Zealand because we believe in helping job seekers.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <h2 className="text-section-subtitle" style={{ marginBottom: '2rem' }}>Introduction</h2>
          
          <div className="intro-card" style={{ backgroundColor: 'var(--secondary)', color: '#fff', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }}>
            <h3 className="text-card-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Interview Training that Actually works
            </h3>
            <p style={{ color: '#fff', opacity: '0.9', fontSize: '1.25rem', lineHeight: '1.75', margin: '0' }}>
              In just one hour, you'll feel more confident, better prepared, and significantly increase your chances of landing the job. Every single person who completes this training comes out more equipped as a job seeker.
            </p>
          </div>
        </div>
      </section>

      {/* What You Will Achieve Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-section-title" style={{ marginBottom: '0.75rem' }}>
              What You Will <span className="highlight-text" style={{ color: '#ffb300' }}>Achieve</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
              By the end of the session, you will have gained more confidence and reduced anxiety regarding interviews. Practice and perfect high-level responses to common interviewing questions.
            </p>
          </div>

          <div className="grid-3col" style={{ gap: '1.5rem' }}>
            {achievements.map((ach, i) => (
              <div key={i} className="teach-card" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px', minHeight: '160px', display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: '0', fontSize: '1.15rem', fontWeight: '700', color: 'var(--secondary)', lineHeight: '1.4' }}>
                  {ach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Interview Prep Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container split-layout">
          <div>
            <h2 className="text-section-subtitle" style={{ marginTop: '0', color: 'var(--secondary)' }}>
              Personalized Interview Preparation
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              Let us help you articulate your skills and experience confidently. We will work together on crafting your responses for many of the most common interview questions.
            </p>
            <Link to="/contact-us" className="btn-yellow" style={{ padding: '0.8rem 2.5rem' }}>
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Common Interview Questions Covered Section */}
      <section className="how-we-do-it-container">
        <div className="container split-layout-half">
          <div className="package-card" style={{ backgroundColor: '#fff', borderRadius: '4px', color: 'var(--text-dark)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 className="text-card-title" style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
              Common Interview Questions Covered
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              We shall cover how to confidently answer the following in the session:
            </p>
            
            <div style={{ maxHeight: '350px', overflowY: 'auto', paddingRight: '1rem' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {commonQuestions.map((q, i) => (
                  <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span>❓</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div></div> {/* Empty right column */}
        </div>
      </section>

      {/* Ready to Nail that Interview Section */}
      <section className="section section-dark" style={{ padding: '4.5rem 0' }}>
        <div className="container split-layout">
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.1rem', textTransform: 'uppercase' }}>Contact Us</span>
            <h2 className="text-section-title" style={{ marginTop: '0.5rem', margin: '0' }}>
              Ready to Nail that<br />Interview?
            </h2>
            <p style={{ marginTop: '1.5rem', color: '#fff', opacity: '0.85', fontSize: '1.15rem' }}>
              Call us to book in your session at {details.email} or {details.phone}.
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

export default ResumesInterviewTraining;
