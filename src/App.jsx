import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import AiAssisted from './components/AiAssisted.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

import './styles/editorial.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="editorial-app">
      {/* Top running masthead & Navigation */}
      <Navbar />

      <main>
        {/* Editorial Hero Specimen */}
        <Hero />

        {/* About Section & Academic Profile */}
        <About />

        {/* Technical Competencies Matrix */}
        <Skills />

        {/* Featured Case Studies (CARE+, StudentSphere, TrizenPhotos) */}
        <Projects onSelectProject={setSelectedProject} />

        {/* AI-Assisted Engineering Methodology */}
        <AiAssisted />

        {/* Professional Experience Chronicle */}
        <Experience />

        {/* Education & Academic Profile */}
        <Education />

        {/* Direct Correspondence & Inquiries */}
        <Contact />
      </main>

      {/* Editorial Colophon & Index */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Subtle Editorial Back-to-Top */}
      <BackToTop />
    </div>
  );
}
