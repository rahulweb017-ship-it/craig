import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { OfficeProvider } from './context/OfficeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Testimonials from './pages/Testimonials';
import Costs from './pages/Costs';
import ResumesInterviewTraining from './pages/ResumesInterviewTraining';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import Sponsorship from './pages/Sponsorship';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <OfficeProvider>
      <Router>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              
              {/* Normalize the misspelled URL by redirecting to /testimonials */}
              <Route path="/testmonials" element={<Navigate to="/testimonials" replace />} />
              <Route path="/testimonials" element={<Testimonials />} />
              
              <Route path="/costs" element={<Costs />} />
              <Route path="/resumes-interview-training" element={<ResumesInterviewTraining />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/contact-us" element={<ContactUs />} />
              
              {/* Catch-all fallback redirecting to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </OfficeProvider>
  );
};

export default App;
