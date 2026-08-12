import React from 'react';
import { useOffice } from '../context/OfficeContext';

const Costs = () => {
  const { details, country } = useOffice();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '5.5rem 0' }}>
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          {/* Hero Image on Left */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/2025/02/close-up-torn-paper-with-cost-text-calculator-table_1048944-949511_enhanced-1.jpg" 
              alt="Cost Calculator" 
              style={{ width: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          
          {/* Hero Content on Right */}
          <div style={{ textAlign: 'left' }}>
            <span style={{ color: '#fff', fontSize: '2.25rem', fontWeight: '700', display: 'block', marginBottom: '0.25rem' }}>
              Start Your Career
            </span>
            <h1 className="highlight-text text-hero" style={{ marginBottom: '2rem', marginTop: '0' }}>
              Apply, Impress, and Succeed!
            </h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span className="highlight-text" style={{ fontSize: '1.5rem' }}>▶</span>
                <span>Sending your resume to hundreds of companies - {details.costs.search}</span>
              </li>
              <li style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span className="highlight-text" style={{ fontSize: '1.5rem' }}>▶</span>
                <span>Fixing your resume and cover letter - {details.costs.resume}</span>
              </li>
              <li style={{ fontSize: '1.25rem', color: '#fff', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span className="highlight-text" style={{ fontSize: '1.5rem' }}>▶</span>
                <span>Interview training {details.costs.training}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Cards Header Section */}
      <section className="section">
        <div className="container">
          <div className="split-layout" style={{ marginBottom: '3.5rem' }}>
            <div>
              <h2 className="text-section-title" style={{ margin: '0' }}>
                Affordable Pricing<br />
                <span className="highlight-text" style={{ color: '#ffb300' }}>Powerful Results!</span>
              </h2>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: '0', lineHeight: '1.7' }}>
                The Job Factory offers a new way to find a job fast. You are taking a risk, but can you afford not to? Every day that you are out of a job is costing you money and setting you back in life.
              </p>
            </div>
          </div>

          {/* 3 Columns Pricing Cards */}
          <div className="grid-3col">
            
            {/* Card 1 */}
            <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '4px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
              <img 
                src="/assets/2025/02/a-man-is-holding-a-dollar-money-bag-over-a-group-o-2023-12-13-23-22-50-utc-1.jpg" 
                alt="The Job Search Dollar Bag" 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '2px', marginBottom: '1.5rem' }}
              />
              <div style={{ padding: '0 1rem 2rem 1rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                  The Job Search - {details.costs.search}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  We will send your resume to hundreds of companies to ask if they have got any vacancies that are suitable for you.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  We will do all the work. You just need to tell us what type of job you want and in which city you want to work.
                </p>
                <p style={{ color: 'var(--text-dark)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.5rem', marginTop: 'auto' }}>
                  Trying again
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0', lineHeight: '1.6' }}>
                  If it doesn't work out and if you want to try the same companies a few weeks later, different companies, or in another state.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '4px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
              <img 
                src="/assets/2025/02/people-are-filling-out-their-resume-on-the-job-app-2025-02-12-18-32-06-utc-1.jpg" 
                alt="Top view people filling resume" 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '2px', marginBottom: '1.5rem' }}
              />
              <div style={{ padding: '0 1rem 2rem 1rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                  The resume fix - {details.costs.resume}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  We will proofread and fix your resume so that the structure and grammar are perfect.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                  We will fix or write a tailored cover letter that perfectly describes you and gives you the best chance of being considered.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#0056b3', fontWeight: '700', fontSize: '0.95rem', marginTop: 'auto' }}>
                  <span style={{ fontSize: '1.25rem' }}>•</span>
                  <span>EXPRESS (24 hours) resume and cover letter - {country === 'NZ' ? '$240' : '$240 AUD'}</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '4px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}>
              <img 
                src="/assets/2025/02/happy-businessman-talking-to-female-colleague-duri-2024-12-13-21-34-27-utc-1.jpg" 
                alt="Job interview preparation" 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '2px', marginBottom: '1.5rem' }}
              />
              <div style={{ padding: '0 1rem 2rem 1rem', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}>
                  Interview training - {details.costs.training}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  We offer interview training that works. Learn how to ace your interview. Topics include:
                </p>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <li style={{ marginBottom: '0.25rem' }}>The most effective way to answer vital questions</li>
                  <li style={{ marginBottom: '0.25rem' }}>How to give yourself an edge</li>
                  <li>How to get the wages you deserve</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How To Pay Section */}
      <section className="how-we-do-it-container">
        <div className="container">
          <h2 className="text-section-title" style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem' }}>
            How To Pay
          </h2>

          <div className="payment-block-container">
            {/* Block 1: Image Left, Text Right */}
            <div className="payment-block-row">
              <img 
                src="/assets/2025/02/tired-businesswoman-in-suit-looking-away-while-wai-2024-11-19-13-47-53-utc-1.jpg" 
                alt="Unemployed tired businesswoman" 
                className="payment-block-image"
              />
              <div className="payment-block-text">
                <h3>Every day that you remain unemployed you are losing money</h3>
                <p>
                  so our aim is to find jobs for clients as quickly as possible by skipping them to the front of the queue.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Keep in mind that we do not have any relationship or any contact with any employers ever. Our aim is to work for you to try to find you a vacancy that has not been advertised to maximise your chances of getting a job. We put our clients first, unlike job agencies. It is also important to note that we do not guarantee that clients will get a job by using our services.
                </p>
              </div>
            </div>

            {/* Block 2: Text Left, Image Right */}
            <div className="payment-block-row reverse-mobile">
              <div className="payment-block-text">
                <h3>Getting started.</h3>
                <p>
                  Transfer your payment to the account below, email us your resume and cover letter (<a href={`mailto:${details.email}`} style={{ textDecoration: 'underline', color: 'var(--secondary)', fontWeight: '600' }}>{details.email}</a>) and send us your payment confirmation on WhatsApp.
                </p>
                <div style={{ marginTop: '1.5rem', color: 'var(--secondary)', lineHeight: '1.6' }}>
                  {country === 'NZ' ? (
                    <>
                      <p><strong>The Job Factory Group Pty Ltd</strong></p>
                      <p><strong>ANZ Bank</strong></p>
                      <p><strong>Account: 06-0730-0322300-00</strong></p>
                    </>
                  ) : (
                    <>
                      <p><strong>The Job Factory Group Pty Ltd</strong></p>
                      <p><strong>ABN: 94 165 350 710</strong></p>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Email us for Australian bank transfer details or invoices.</p>
                    </>
                  )}
                </div>
              </div>
              <img 
                src="/assets/2024/11/people-hands-and-credit-card-with-pos-in-payment-2023-11-27-05-04-22-utc-1.jpg" 
                alt="POS payment terminal credit card" 
                className="payment-block-image"
              />
            </div>

            {/* Block 3: Image Left, Text Right */}
            <div className="payment-block-row">
              <img 
                src="/assets/2025/02/DeWatermarkai_1739792673144_enhance.jpeg" 
                alt="Smartphone holds with application" 
                className="payment-block-image"
              />
              <div className="payment-block-text">
                <h3>Other possible costs</h3>
                <p>
                  If you decide to switch over the cover letter or resume you want us to use once the mailout has started there is a small administration fee of {details.costs.admin}.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  If you change your mind before we start sending out your resume, we can refund {country === 'NZ' ? '$110' : '$110 AUD'} of the {details.costs.search} payment. Once we start the mailout there can be no refunds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DO ONCE YOU HAVE PAID Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-section-title" style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>
            WHAT TO DO ONCE YOU HAVE PAID
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '4rem' }}>
            Once all of these things are complete we will deliver your resume and details to the employers you have selected.
          </p>

          <div className="grid-3col" style={{ gap: '2.5rem' }}>
            
            {/* Step 1 */}
            <div>
              <div style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>✉️</div>
              <h3 style={{ fontSize: '1.25rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                Send us a copy of your resume and your cover letter, if you have one.
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                If you have paid to have your resume and cover letter fixed then we will prepare these documents and return them to you within the agreed time (usually 24-48 hours) so that you can check them.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginTop: '1rem' }}>
                The cover letter will be in perfect English and will explain the job you want and any other requirements you have such as full-time, casual or weekend shifts.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>✏️</div>
              <h3 style={{ fontSize: '1.25rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                Type of Job
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Provide us with details of the type of job you are seeking. Please try to keep the job/s you are willing to do as broad as possible. For example it is easier to get a job if we say that you are seeking bookkeeping or administration role – two job types means double the chance.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>📋</div>
              <h3 style={{ fontSize: '1.25rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                Receipt
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Upon receipt of your payment, we will send you a list of potential employers for you to edit. You will need to delete the employers that are too far from your home and send the list back to us.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT IF I DON'T GET A JOB? Section */}
      <section className="section section-dark">
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="text-section-title" style={{ margin: '0 0 1.5rem 0' }}>
              WHAT IF I DON'T<br />
              <span className="highlight-text" style={{ color: '#FCE38A' }}>GET A JOB?</span>
            </h2>
            <div style={{ color: 'var(--text-light)', opacity: '0.95', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <p style={{ marginBottom: '1rem' }}>
                By using our service, you are taking a chance. While we have helped many hundreds of people get jobs over the past more than 10 years, we cannot guarantee that you will get a job.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Most of our successful clients hear from employers within a day or two of us sending out their resumes – although some have been contacted many months later.
              </p>
              <p style={{ margin: '0' }}>
                If your search is unsuccessful, we can try again. The cost to have another go is just {country === 'NZ' ? '$65' : '$65 AUD'}.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/assets/2025/02/businessman-covering-face-with-card-with-question-2024-11-17-19-55-17-utc-1.jpg" 
              alt="Candidates waiting with question mark card" 
              style={{ width: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Costs;
