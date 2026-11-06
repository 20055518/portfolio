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

import { portfolioData } from './data/portfolioData.js';
import './styles/editorial.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const { personal, education, skills, projects, internships, aiPhilosophy } = portfolioData;

  return (
    <div className="editorial-app">
      {/* Top running masthead & Navigation */}
      <Navbar personal={personal} />

      <main>
        {/* Editorial Hero Specimen */}
        <Hero personal={personal} />

        {/* About Section & Academic Profile */}
        <About personal={personal} education={education} />

        {/* Technical Competencies Matrix */}
        <Skills skillsData={skills} />

        {/* Featured Case Studies (CARE+, StudentSphere, TrizenPhotos) */}
        <Projects projects={projects} onSelectProject={setSelectedProject} />

        {/* AI-Assisted Engineering Methodology */}
        <AiAssisted philosophy={aiPhilosophy} />

        {/* Professional Experience Chronicle */}
        <Experience internships={internships} />

        {/* Education & Academic Profile */}
        <Education education={education} />

        {/* Direct Correspondence & Inquiries */}
        <Contact personal={personal} />
      </main>

      {/* Editorial Colophon & Index */}
      <Footer personal={personal} />

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
