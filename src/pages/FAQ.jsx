import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "How can you be so sure that you can find me a job?",
      a: "At any time in any industry there are jobs available. The trouble is that once they are advertised 100 people might apply. Unless you are the best of those 100 you won’t get the job. We provide our listed employers with your details and in many cases you are often the first or only person interviewed. The aim is to get employers to contact you before they advertise their jobs."
    },
    {
      q: "How many employers will offer me a job?",
      a: "We have no way of telling you how many employers will contact you. If you have good qualifications and/or experience you will have a greater chance of getting a job and more employers are likely to contact you."
    },
    {
      q: "Can you guarantee that I will find a job?",
      a: "Unfortunately no one can guarantee that you will be given a job. No one can force employers to hire anyone. However, if you have the right qualifications for the job you are applying for then you will have a great chance of getting a job."
    },
    {
      q: "Why is your find-me-a-job service so cheap?",
      a: "This is the strangest question we get asked. Someone actually posted a comment on one of our online ads that other job agencies charge up to $3000 to find people a job and, therefore, we must be ripping people off because we are offering something that is too good to be true. This is a difficult question to answer. We are cheap if you consider how fast we get many of our clients to find jobs, but we believe ours is a fair price. We make money and our clients have a great chance of getting a job. If you want to pay $3000 to a job agency go for it if you think they have a better chance of getting you a job."
    },
    {
      q: "Why is your job-finding service better than other job agencies?",
      a: "Some job agencies simply search job websites looking for a job for you. Others simply lie about their abilities and connections to get your money. We provide your details to hundreds of employers. We provide you with the names of these employers so that you can see who we have contacted on your behalf."
    },
    {
      q: "How fast can you find me a job?",
      a: "We do not guarantee that we will find you a job. But users of our service often start getting calls within a few hours of us sending out their resumes. The fastest an employer has called one of our clients to set up an interview after we sent out her resume is currently 15 minutes. She was stunned."
    },
    {
      q: "Can you help find jobs for people whose occupations are not listed on your site?",
      a: "Yes. We offer a customised job search. The price of a customised job searches varies from our listed price. All you have to do is tell us what type of job you are looking for and we will tell you if or how we can help."
    },
    {
      q: "What happens if I don’t get a job?",
      a: "While nearly every user of our job-finding service gets an interview it is up to you to convince the employer to hire you. If you do not get a job we can send your resume to the same employers or another list of employers for a small fee. Employers who do not have a job this week might have one next week. This is an easy way to find a job fast."
    },
    {
      q: "How can I increase my chances of getting a job?",
      a: "If you have the correct qualifications for a job then you have a good chance of getting a job by using our service. But it is vital that you have a good cover letter. Employers are busy and they do not have time to waste interviewing inferior employees. A well-written, perfect-English cover letter will give you a much better chance of getting an interview. Ask yourself what you would do if you had two cover letters in front of you – one well written and one that was badly written. You need to do everything you can to make sure that you get the interview. A good cover letter is one of the most important things."
    },
    {
      q: "Can you get an employer to sponsor me?",
      a: "We can write a request on your behalf and email it to several thousand employers. Contact us to discuss your requirements and for the cost of this service."
    },
    {
      q: "Can you help me find a job if I am overseas?",
      a: "This is very difficult. Employers usually need to interview staff in person."
    },
    {
      q: "Can you write my resume?",
      a: "Yes. We can now write your resume from scratch. We will write your resume and cover letter in a way that dramatically increases the chance of you getting an interview. You can see the details on our Resume Package page. Alternatively, we will fix an existing resume to make sure it is in perfect English and without mistakes. Our resume writers currently work as journalists who are among the best writers in Australia."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '5.5rem 0' }}>
        <div className="container split-layout" style={{ textAlign: 'left', alignItems: 'center' }}>
          {/* Hero Content on Left */}
          <div>
            <h1 className="highlight-text text-hero" style={{ margin: '0 0 1rem 0' }}>FAQ</h1>
            <p style={{ margin: '0', opacity: '0.9', fontSize: '1.25rem' }}>Common Questions</p>
          </div>
          
          {/* Hero Image on Right */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/2024/11/kyiv-ukraine-august-5-2019-cropped-view-of-bu-2024-11-09-00-41-46-utc-1.jpg" 
              alt="Businessman with question mark and smiley speech bubbles" 
              style={{ width: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1200px', width: '100%' }}>
          <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '1.05rem', textTransform: 'uppercase' }}>FAQs</span>
          <h2 className="text-section-title" style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>
            Need Help? We've Got Answers
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} style={{ border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="faq-accordion-btn"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      backgroundColor: '#f8fafc',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'var(--secondary)',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      outline: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ display: 'flex', alignItems: 'center', color: 'var(--secondary)' }}>
                      {isOpen ? (
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      ) : (
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-accordion-panel" style={{ backgroundColor: '#fff', borderTop: '1px solid #e2e8f0' }}>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.75' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions? Section */}
      <section className="section section-dark" style={{ padding: '4.5rem 0' }}>
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          <div>
            <span style={{ color: '#FCE38A', fontWeight: '700', fontSize: '1.1rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Still Have Questions?
            </span>
            <h2 className="text-section-title" style={{ margin: '0 0 1.5rem 0', color: '#fff' }}>
              Get in touch with us
            </h2>
            <p style={{ color: '#fff', opacity: '0.85', fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
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

export default FAQ;
