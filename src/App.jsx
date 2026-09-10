import React, { useState, useEffect } from 'react';
import { resumeData } from './data/resumeData.js';
import BackgroundCanvas from './components/BackgroundCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Modals from './components/Modals.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  // Theme state: default dark, persists to localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('jebilin_theme') || 'dark';
  });

  // Modals state: null | 'resume' | 'trizen' | 'studentsphere'
  const [activeModal, setActiveModal] = useState(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState('');

  // Sync theme with HTML data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jebilin_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  return (
    <div className="portfolio-root">
      {/* Dynamic Background Canvas & Ambient Orbs */}
      <BackgroundCanvas />

      {/* Sticky Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openResume={() => setActiveModal('resume')}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          resumeData={resumeData}
          openResume={() => setActiveModal('resume')}
          showToast={showToast}
        />
        <About resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Projects
          openTrizenModal={() => setActiveModal('trizen')}
          openSphereModal={() => setActiveModal('studentsphere')}
          showToast={showToast}
        />
        <Experience resumeData={resumeData} />
        <Education resumeData={resumeData} />
        <Contact resumeData={resumeData} showToast={showToast} />
      </main>

      {/* Site Footer */}
      <Footer
        resumeData={resumeData}
        openResume={() => setActiveModal('resume')}
      />

      {/* Interactive Modals */}
      <Modals
        activeModal={activeModal}
        closeModal={() => setActiveModal(null)}
        resumeData={resumeData}
      />

      {/* Circular Progress Scroll-To-Top Button */}
      <BackToTop />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
