import React, { useEffect } from 'react';

export default function Modals({ activeModal, closeModal, resumeData }) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, closeModal]);

  if (!activeModal) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      {/* ==========================================================
          MODAL 1: TrizenPhotos Architecture
          ========================================================== */}
      {activeModal === 'trizen' && (
        <div className="modal-dialog modal-large">
          <div className="modal-header">
            <h3 className="modal-title">TrizenPhotos — Architecture &amp; System Flow</h3>
            <div className="modal-header-actions">
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close dialog"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="modal-body">
            <div className="arch-summary">
              <p>
                <strong>TrizenPhotos</strong> is a production-grade event photography delivery platform engineered
                to eliminate end-user login friction through slug-based routing and secure PIN authentication.
              </p>

              <div className="workflow-highlight-box" style={{ marginBottom: '1.5rem' }}>
                <h4>⚙️ End-to-End Media Pipeline Workflow</h4>
                <p>
                  How photos travel from the photographer's camera to guest smartphones in under 2 seconds:
                </p>
                <div className="workflow-steps-row">
                  <div className="wf-step">
                    <span className="wf-num">1</span>
                    <span>Team Upload</span>
                  </div>
                  <span className="wf-arrow">→</span>
                  <div className="wf-step">
                    <span className="wf-num">2</span>
                    <span>FastAPI Stream</span>
                  </div>
                  <span className="wf-arrow">→</span>
                  <div className="wf-step">
                    <span className="wf-num">3</span>
                    <span>Pillow WebP</span>
                  </div>
                  <span className="wf-arrow">→</span>
                  <div className="wf-step">
                    <span className="wf-num">4</span>
                    <span>Atlas Storage</span>
                  </div>
                  <span className="wf-arrow">→</span>
                  <div className="wf-step">
                    <span className="wf-num">5</span>
                    <span>PIN Delivery</span>
                  </div>
                </div>
              </div>

              <div className="portals-breakdown-grid">
                <div className="portal-detail-card">
                  <div className="portal-icon">⚡</div>
                  <h4>Frontend (React 19)</h4>
                  <ul>
                    <li>TypeScript typing across API payloads</li>
                    <li>Clean URL routing with dynamic slugs</li>
                    <li>Responsive masonry gallery layout</li>
                    <li>Client-side image caching &amp; lazy loading</li>
                  </ul>
                </div>

                <div className="portal-detail-card">
                  <div className="portal-icon">🐍</div>
                  <h4>Backend (FastAPI)</h4>
                  <ul>
                    <li>Asynchronous non-blocking I/O routes</li>
                    <li>Automated Pillow thumbnail generation</li>
                    <li>JWT token management for photographers</li>
                    <li>CORS origin security &amp; rate limiting</li>
                  </ul>
                </div>

                <div className="portal-detail-card">
                  <div className="portal-icon">☁️</div>
                  <h4>Cloud &amp; Persistence</h4>
                  <ul>
                    <li>MongoDB Atlas cloud cluster</li>
                    <li>Frontend continuous delivery on Vercel</li>
                    <li>Backend Web Service hosted on Render</li>
                    <li>100% verified passing integration tests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <a
              href="https://trizenphotos.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Open Live Application ↗
            </a>
            <button type="button" className="btn btn-secondary btn-sm" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ==========================================================
          MODAL 2: StudentSphere Role Architecture
          ========================================================== */}
      {activeModal === 'studentsphere' && (
        <div className="modal-dialog modal-large">
          <div className="modal-header">
            <h3 className="modal-title">StudentSphere — Triple-Role Architecture</h3>
            <div className="modal-header-actions">
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close dialog"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="modal-body">
            <div className="arch-summary">
              <p>
                <strong>StudentSphere</strong> organizes complex collegiate workflows into three distinct,
                role-guarded portals, ensuring strict data segregation between administrative authorities,
                professors, and students.
              </p>

              <div className="portals-breakdown-grid">
                <div className="portal-detail-card">
                  <div className="portal-icon">🏛️</div>
                  <h4>1. Admin Portal</h4>
                  <ul>
                    <li>Campus-wide student &amp; faculty records</li>
                    <li>Department and course allocation</li>
                    <li>Broadcast institutional circulars &amp; notices</li>
                    <li>System analytics &amp; audit logging</li>
                  </ul>
                </div>

                <div className="portal-detail-card">
                  <div className="portal-icon">👨‍🏫</div>
                  <h4>2. Teacher Portal</h4>
                  <ul>
                    <li>Real-time class attendance logging</li>
                    <li>Semester internal assessment scoring</li>
                    <li>Section-specific notes &amp; syllabus progress</li>
                    <li>Direct student deficiency alerts</li>
                  </ul>
                </div>

                <div className="portal-detail-card">
                  <div className="portal-icon">🎓</div>
                  <h4>3. Student Portal</h4>
                  <ul>
                    <li>Live cumulative attendance tracking (&gt;75% safety check)</li>
                    <li>Continuous assessment marks report card</li>
                    <li>Real-time campus notice board viewer</li>
                    <li>Academic calendar &amp; exam schedule</li>
                  </ul>
                </div>
              </div>

              <div className="workflow-highlight-box">
                <h4>🤖 Prompt-Driven AI Implementation Strategy</h4>
                <p>
                  Built by formulating structured architectural prompts to scaffold React UI states, Python API
                  endpoints, and MongoDB document schemas. Every component was manually inspected, tested, and
                  debugged to eliminate state desynchronization and ensure production stability.
                </p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <a
              href="https://web-service-lake.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Open Live Prototype ↗
            </a>
            <button type="button" className="btn btn-secondary btn-sm" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ==========================================================
          MODAL 3: Full 1-to-1 Resume View (Printable)
          ========================================================== */}
      {activeModal === 'resume' && (
        <div className="modal-dialog modal-resume">
          <div className="modal-header">
            <h3 className="modal-title">Official Curriculum Vitae</h3>
            <div className="modal-header-actions">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handlePrint}
                title="Print or Save as PDF"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Print / Save PDF
              </button>
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close dialog"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="modal-body" style={{ background: '#e5e7eb' }}>
            <div id="resume-print-area">
              <div className="resume-sheet">
                {/* Header */}
                <div className="resume-sheet-header">
                  <h1 className="resume-name">{resumeData.personal.name}</h1>
                  <div className="resume-contact-bar">
                    {resumeData.personal.phone} &bull; {resumeData.personal.email} &bull;{' '}
                    <a
                      href={resumeData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#2563eb', textDecoration: 'underline' }}
                    >
                      {resumeData.personal.linkedinDisplay}
                    </a>{' '}
                    &bull; {resumeData.personal.location}
                  </div>
                </div>

                <div className="resume-divider" />

                {/* Summary */}
                <div className="resume-section">
                  <h2 className="resume-sec-title">Professional Summary</h2>
                  <p className="resume-text">{resumeData.personal.summary}</p>
                </div>

                {/* Education */}
                <div className="resume-section">
                  <h2 className="resume-sec-title">Education</h2>
                  <div className="resume-entry">
                    <div className="entry-head">
                      <strong>
                        {resumeData.education.degree}, {resumeData.education.field}
                      </strong>
                      <span className="entry-date">{resumeData.education.period}</span>
                    </div>
                    <div className="entry-sub">
                      {resumeData.education.institution} &bull; {resumeData.education.location}
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="resume-section">
                  <h2 className="resume-sec-title">Technical Skills</h2>
                  <ul className="resume-list">
                    <li>
                      <strong>Languages &amp; Core:</strong> Python (Basic, including OOP concepts), HTML, CSS, SQL
                      (Basic – DDL, DML, DQL, DCL, TCL).
                    </li>
                    <li>
                      <strong>AI-Assisted Development:</strong> Building full-stack features using AI coding tools for
                      implementation and debugging.
                    </li>
                    <li>
                      <strong>Familiarity &amp; Tools:</strong> Git, GitHub, debugging fundamentals, prompt-driven
                      development workflow, Vercel, Render.
                    </li>
                    <li>
                      <strong>Soft Skills:</strong> Problem-Solving, Communication, Time Management, Adaptability,
                      Leadership.
                    </li>
                  </ul>
                </div>

                {/* Projects */}
                <div className="resume-section">
                  <h2 className="resume-sec-title">Key Projects</h2>
                  {resumeData.projects.map((proj) => (
                    <div key={proj.id} className="resume-entry">
                      <div className="entry-head">
                        <strong>{proj.name}</strong>
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '0.8125rem' }}
                        >
                          {proj.displayUrl}
                        </a>
                      </div>
                      <div className="entry-sub">
                        <em>Tech Stack: {proj.technologies.join(', ')}</em>
                      </div>
                      <ul className="resume-list">
                        {proj.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Internships */}
                <div className="resume-section">
                  <h2 className="resume-sec-title">Internship Experience</h2>
                  {resumeData.internships.map((intern) => (
                    <div key={intern.company} className="resume-entry">
                      <div className="entry-head">
                        <strong>
                          {intern.role} &bull; {intern.company}
                        </strong>
                        <span className="entry-date">{intern.period}</span>
                      </div>
                      <div className="entry-sub">
                        {intern.type} {intern.highlight ? `(${intern.highlight})` : ''}
                      </div>
                      <ul className="resume-list">
                        {intern.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div className="resume-section">
                  <h2 className="resume-sec-title">Languages Known</h2>
                  <p className="resume-text">
                    {resumeData.personal.languagesKnown.join(' &bull; ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary btn-sm" onClick={handlePrint}>
              Print / Save as PDF
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
