import React from 'react';
import { ArrowDownRight, FileDown, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Hero({ personal = portfolioData.personal }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Introduction */}
          <div className="hero-content">
            <div className="hero-meta-kicker">
              <span className="status-dot-editorial" />
              <span>{personal.status}</span>
            </div>

            <h1 className="hero-title">
              Building Digital Experiences Through <em>Code</em> &amp; Problem Solving.
            </h1>

            <div className="hero-identity">
              <span>{personal.name} — {personal.role}</span>
            </div>

            <p className="hero-lead">
              {personal.subheadline}
            </p>

            <div className="hero-actions">
              <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
                <span>View My Work</span>
                <ArrowDownRight size={16} />
              </a>

              <a
                href={personal.resumeUrl}
                download="Jebilin_DM_Resume.pdf"
                className="btn btn-secondary"
                title="Download verified official PDF resume"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero-links-bar">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-pill"
                title="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>{personal.githubDisplay}</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-pill"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span>{personal.linkedinDisplay}</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="hero-contact-pill"
                title="Direct Email"
              >
                <Mail size={15} />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Typographic Specimen & Architect Plate */}
          <div className="hero-visual">
            <div className="hero-specimen-plate">
              <div className="specimen-header">
                <span className="specimen-id">ARCHITECTURAL PROFILE // 2023–2027</span>
                <span className="specimen-status">STATUS: OPEN FOR ROLES</span>
              </div>

              <h2 className="specimen-headline">
                Full-Stack Systems &amp; Practical Machine Learning.
              </h2>

              <div className="specimen-meta-table">
                <div className="specimen-meta-row">
                  <span className="specimen-key">Primary Stack</span>
                  <span className="specimen-val">Python • FastAPI • React.js • MongoDB</span>
                </div>
                <div className="specimen-meta-row">
                  <span className="specimen-key">Focus Area</span>
                  <span className="specimen-val">Queue Prediction, Role Portals &amp; API Systems</span>
                </div>
                <div className="specimen-meta-row">
                  <span className="specimen-key">Institution</span>
                  <span className="specimen-val">Anand Institute of Higher Technology</span>
                </div>
                <div className="specimen-meta-row">
                  <span className="specimen-key">Location</span>
                  <span className="specimen-val">Chennai, Tamil Nadu, India</span>
                </div>
                <div className="specimen-meta-row">
                  <span className="specimen-key">Methodology</span>
                  <span className="specimen-val">Prompt-Driven Engineering + Manual Verification</span>
                </div>
              </div>

              <blockquote className="specimen-quote">
                "Disciplined problem solver combining core computer science fundamentals with modern AI-accelerated workflows to ship verifiable, production-ready software."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
