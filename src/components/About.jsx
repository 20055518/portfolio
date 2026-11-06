import React from 'react';
import { Layers, Cpu, Database, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function About({ personal = portfolioData.personal, education = portfolioData.education }) {
  const pillars = [
    {
      icon: <Layers size={20} />,
      title: "Full-Stack Development",
      description: "Building responsive React client interfaces integrated with modular Python/FastAPI backends."
    },
    {
      icon: <Cpu size={20} />,
      title: "API Engineering & Integration",
      description: "Designing REST endpoints, JWT authentication workflows, and asynchronous request handling."
    },
    {
      icon: <Database size={20} />,
      title: "Database Management",
      description: "Schema design, relational SQL queries (DDL, DML, DQL), and document persistence in MongoDB Atlas."
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: "Practical Machine Learning",
      description: "Implementing predictive models with Linear Regression, Probability Analysis, and Bayesian Updating."
    }
  ];

  return (
    <section id="about" className="section section-bordered">
      <div className="container">
        <div className="section-header">
          <span className="section-label">01 // Background &amp; Philosophy</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Final-year Computer Science and Engineering student blending algorithmic problem-solving with scalable full-stack engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Professional Narrative */}
          <div className="about-prose">
            <p className="lead">
              I am a final-year Computer Science and Engineering undergraduate (2023–2027) at Anand Institute of Higher Technology in Chennai, focused on backend architecture, web engineering, and applied machine learning.
            </p>

            <p>
              My hands-on experience centers on developing complete full-stack web platforms using <strong>React.js</strong>, <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>MongoDB</strong>. Rather than treating frontend and backend in isolation, I architect software as cohesive systems—connecting intuitive role-based user interfaces to robust asynchronous API layers and well-modeled data stores.
            </p>

            <p>
              In engineering flagship systems such as <strong>CARE+</strong> (hospital queue prediction via Linear Regression and Bayesian Updating) and <strong>TrizenPhotos</strong> (media pipelines and event delivery), I combine disciplined problem-solving with modern AI coding assistants. I employ prompt-driven development for rapid requirement decomposition, followed by meticulous manual testing, profiling, and code verification before deployment.
            </p>

            {/* Core Capability Pillars */}
            <div className="about-pillars-grid">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="about-pillar-card">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Educational & Career Plate */}
          <div className="about-profile-card">
            <div className="profile-card-header">
              <h3 className="profile-card-title">Academic &amp; Career Summary</h3>
              <span className="profile-card-sub">ANAND INSTITUTE OF HIGHER TECHNOLOGY</span>
            </div>

            <div className="profile-entries-list">
              <div className="profile-entry-item">
                <span className="profile-entry-kicker">DEGREE CANDIDACY</span>
                <h4 className="profile-entry-heading">{education.degree}</h4>
                <div className="profile-entry-detail">{education.field}</div>
                <div className="profile-entry-meta">{education.period} • {education.location}</div>
              </div>

              <div className="profile-entry-item">
                <span className="profile-entry-kicker">RECENT INDUSTRY TRAINING</span>
                <h4 className="profile-entry-heading">Python Developer Intern</h4>
                <div className="profile-entry-detail">Intern Infobyte • Outstanding Performance Recognition</div>
                <div className="profile-entry-meta">June 10 – July 10, 2026</div>
              </div>

              <div className="profile-entry-item">
                <span className="profile-entry-kicker">FOUNDATIONAL INTERNSHIP</span>
                <h4 className="profile-entry-heading">Junior Python Software Developer Intern</h4>
                <div className="profile-entry-detail">Judah Code Technologies • Core Python &amp; OOP Concepts</div>
                <div className="profile-entry-meta">May 25 – June 25, 2026</div>
              </div>

              <div className="profile-entry-item">
                <span className="profile-entry-kicker">LINGUISTIC PROFICIENCY</span>
                <div className="profile-entry-detail">
                  Tamil (Native) • English (Professional Working)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
