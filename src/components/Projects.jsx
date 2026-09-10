import React, { useState } from 'react';

export default function Projects({ openTrizenModal, openSphereModal, showToast }) {
  // Simulator active tabs
  const [trizenTab, setTrizenTab] = useState('pin'); // 'pin' | 'gallery' | 'api'
  const [sphereTab, setSphereTab] = useState('student'); // 'student' | 'teacher' | 'admin'

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Production Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Two live, full-stack web platforms independently engineered using AI-assisted workflows,
            clean prompt design, and thorough code verification.
          </p>
          <div className="section-divider" />
        </div>

        <div className="projects-stack">
          {/* ==========================================================
              PROJECT 1: TrizenPhotos
              ========================================================== */}
          <div id="project-trizen" className="spotlight-card project-showcase-card">
            <div className="card-spotlight-overlay" />

            {/* Left: Project Details */}
            <div className="project-details">
              <div className="project-top-row">
                <span className="featured-badge new-badge">⭐ Latest Production Release</span>
                <a
                  href="https://trizenphotos.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-status-badge"
                  title="Visit live production site"
                >
                  <span className="live-dot" />
                  <span>trizenphotos.vercel.app</span>
                </a>
              </div>

              <h3 className="project-name">TrizenPhotos</h3>
              <p className="project-tagline">
                Full-Stack Event Photography &amp; Gallery Delivery Platform
              </p>

              {/* Technologies */}
              <div className="tech-tags-list">
                {['React 19', 'TypeScript', 'FastAPI', 'Python', 'MongoDB Atlas', 'JWT', 'Pillow', 'Vercel', 'Render'].map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="project-features-list">
                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>Full-Stack Architecture: </strong>
                    Directed AI-assisted development tools to implement an event photo delivery platform featuring
                    real-time photo upload, photographer curation, and client-facing delivery.
                  </div>
                </div>

                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>Frictionless Client PIN Access: </strong>
                    Engineered secure 6-digit PIN-protected client portals with slug-based routing
                    (<code>/gallery/:slug</code>), allowing guests to view private photos instantly without creating accounts.
                    <span style={{ display: 'inline-block', marginLeft: '0.4rem', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '0.1rem 0.45rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600 }}>
                      Live Demo Password/PIN: 482917
                    </span>
                  </div>
                </div>

                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>Async Python REST API: </strong>
                    Built async REST endpoints with FastAPI, covering JWT authentication, role guards, and automated
                    Python Pillow image resizing to generate lightning-fast web thumbnails.
                  </div>
                </div>

                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>Production Deployment: </strong>
                    Automated deployment across Vercel (frontend) and Render (backend API), systematically debugging
                    CORS, environmental secrets, and passing 100% of integration checks.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href="https://trizenphotos.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Launch Live App</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={openTrizenModal}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Architecture &amp; Flow
                </button>
              </div>
            </div>

            {/* Right: Interactive Trizen Simulator */}
            <div className="project-mockup">
              <div className="mockup-frame">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup-url">trizenphotos.vercel.app/gallery/anand-annual-2026</div>
                </div>

                <div className="mockup-screen">
                  <div className="mockup-app-header">
                    <span className="app-logo">📸 TrizenPhotos Live</span>
                    <div className="portal-indicators">
                      <button
                        type="button"
                        className={`trizen-pill ${trizenTab === 'pin' ? 'active' : ''}`}
                        onClick={() => setTrizenTab('pin')}
                      >
                        PIN Access
                      </button>
                      <button
                        type="button"
                        className={`trizen-pill ${trizenTab === 'gallery' ? 'active' : ''}`}
                        onClick={() => setTrizenTab('gallery')}
                      >
                        Client Gallery
                      </button>
                      <button
                        type="button"
                        className={`trizen-pill ${trizenTab === 'api' ? 'active' : ''}`}
                        onClick={() => setTrizenTab('api')}
                      >
                        FastAPI Routes
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: PIN Access Portal */}
                  <div className={`trizen-view-panel ${trizenTab === 'pin' ? 'active' : ''}`}>
                    <div className="pin-portal-box">
                      <div className="pin-shield-icon">🔒</div>
                      <div className="pin-title">Private Event Gallery</div>
                      <div className="pin-subtitle">Enter the 6-digit PIN / password provided by your event host</div>
                      <div className="pin-input-row" style={{ gap: '0.45rem' }}>
                        <div className="pin-dot">4</div>
                        <div className="pin-dot">8</div>
                        <div className="pin-dot">2</div>
                        <div className="pin-dot">9</div>
                        <div className="pin-dot">1</div>
                        <div className="pin-dot">7</div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        <span className="pin-badge-success">✔ Access Granted • Welcome Guest</span>
                        <button
                          type="button"
                          className="btn btn-outline btn-sm"
                          style={{ minHeight: '28px', padding: '0.2rem 0.6rem', fontSize: '0.72rem' }}
                          onClick={() => {
                            navigator.clipboard.writeText('482917');
                            showToast('PIN / Password 482917 copied to clipboard!');
                          }}
                        >
                          Copy PIN (482917)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tab 2: Client Gallery View */}
                  <div className={`trizen-view-panel ${trizenTab === 'gallery' ? 'active' : ''}`}>
                    <div className="mockup-cards">
                      <div className="mini-card">
                        <div className="photo-placeholder">📷 Stage Inauguration</div>
                        <div className="mini-card-title">IMG_8492.webp</div>
                        <div className="mini-line-item">Pillow Thumbnail: 42 KB</div>
                      </div>
                      <div className="mini-card">
                        <div className="photo-placeholder">📷 Award Ceremony</div>
                        <div className="mini-card-title">IMG_8493.webp</div>
                        <div className="mini-line-item">Pillow Thumbnail: 38 KB</div>
                      </div>
                      <div className="mini-card full">
                        <div className="mini-card-stat">
                          ⚡ 142 Photos Loaded Seamlessly • JWT Session Verified
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 3: FastAPI Endpoints */}
                  <div className={`trizen-view-panel ${trizenTab === 'api' ? 'active' : ''}`}>
                    <div className="api-preview-box">
                      <div className="api-endpoint">
                        <span className="method get">GET</span>
                        <span>/api/v1/gallery/anand-2026</span>
                      </div>
                      <div className="api-endpoint">
                        <span className="method post">POST</span>
                        <span>/api/v1/gallery/verify-pin</span>
                        <span className="jwt-badge">PIN Guard</span>
                      </div>
                      <div className="api-endpoint">
                        <span className="method post">POST</span>
                        <span>/api/v1/photos/upload</span>
                        <span className="jwt-badge">FastAPI Async</span>
                      </div>
                    </div>
                  </div>

                  <div className="portal-hint-row">
                    Interactive Preview • Click tabs above to explore architectural features
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
              PROJECT 2: StudentSphere
              ========================================================== */}
          <div id="project-studentsphere" className="spotlight-card project-showcase-card">
            <div className="card-spotlight-overlay" />

            {/* Left: Project Details */}
            <div className="project-details">
              <div className="project-top-row">
                <span className="featured-badge">⭐ Institutional Platform</span>
                <a
                  href="https://web-service-lake.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-status-badge"
                  title="Visit live production site"
                >
                  <span className="live-dot" />
                  <span>web-service-lake.vercel.app</span>
                </a>
              </div>

              <h3 className="project-name">StudentSphere</h3>
              <p className="project-tagline">
                College Management Website with Triple Role-Based Portals
              </p>

              {/* Technologies */}
              <div className="tech-tags-list">
                {['React.js', 'Python', 'MongoDB', 'Role-Based Access', 'REST API', 'Git', 'Vercel'].map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="project-features-list">
                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>Triple-Role Architecture: </strong>
                    Independently designed and developed a comprehensive college management website featuring 3
                    distinct role-based portals: <strong>Admin</strong>, <strong>Teacher</strong>, and <strong>Student</strong>.
                  </div>
                </div>

                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>AI-Assisted Full-Stack Construction: </strong>
                    Formulated structured, context-rich prompts to direct AI coding tools to implement the React.js
                    frontend, Python backend services, and MongoDB database collections.
                  </div>
                </div>

                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>Academic Workflow Modules: </strong>
                    Structured automated attendance calculation, internal assessment mark entry, and campus-wide notice
                    board announcements across all three portals.
                  </div>
                </div>

                <div className="feature-bullet">
                  <span className="bullet-icon">✓</span>
                  <div>
                    <strong>Debugging &amp; End-to-End Delivery: </strong>
                    Rigorously verified, refactored, and debugged AI-generated code prior to deployment, managing version
                    control via Git and delivering a live hosted prototype.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href="https://web-service-lake.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Launch Live App</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={openSphereModal}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Role Architecture
                </button>
              </div>
            </div>

            {/* Right: Interactive StudentSphere Simulator */}
            <div className="project-mockup">
              <div className="mockup-frame">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup-url">web-service-lake.vercel.app/portal</div>
                </div>

                <div className="mockup-screen">
                  <div className="mockup-app-header">
                    <span className="app-logo">🎓 StudentSphere</span>
                    <div className="portal-indicators">
                      <button
                        type="button"
                        className={`portal-pill ${sphereTab === 'admin' ? 'active' : ''}`}
                        onClick={() => setSphereTab('admin')}
                      >
                        Admin
                      </button>
                      <button
                        type="button"
                        className={`portal-pill ${sphereTab === 'teacher' ? 'active' : ''}`}
                        onClick={() => setSphereTab('teacher')}
                      >
                        Teacher
                      </button>
                      <button
                        type="button"
                        className={`portal-pill ${sphereTab === 'student' ? 'active' : ''}`}
                        onClick={() => setSphereTab('student')}
                      >
                        Student
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Admin Portal */}
                  <div className={`portal-view-panel ${sphereTab === 'admin' ? 'active' : ''}`}>
                    <div className="mockup-cards">
                      <div className="mini-card">
                        <div className="mini-card-title">Enrolled Students</div>
                        <div className="mini-card-stat" style={{ fontSize: '1.25rem' }}>1,240</div>
                        <div className="mini-line-item">Across 5 Departments</div>
                      </div>
                      <div className="mini-card">
                        <div className="mini-card-title">Faculty Staff</div>
                        <div className="mini-card-stat" style={{ fontSize: '1.25rem' }}>86 Active</div>
                        <div className="mini-line-item">24 Courses Running</div>
                      </div>
                      <div className="mini-card full">
                        <div className="mini-card-title">Campus Announcements</div>
                        <div className="mini-notice">📢 Dispatched circular: "Campus Placement Drives Commence Oct 2026"</div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 2: Teacher Portal */}
                  <div className={`portal-view-panel ${sphereTab === 'teacher' ? 'active' : ''}`}>
                    <div className="mockup-cards">
                      <div className="mini-card">
                        <div className="mini-card-title">Today's Class</div>
                        <div className="mini-line-item">CSE Year IV - Section B</div>
                        <div className="mini-card-stat">Attendance: 58 Present, 2 Absent</div>
                      </div>
                      <div className="mini-card">
                        <div className="mini-card-title">Internal Marks</div>
                        <div className="mini-line-item">Python Lab Exam 2</div>
                        <div className="mini-card-stat">Status: Evaluated &amp; Submitted</div>
                      </div>
                      <div className="mini-card full">
                        <div className="mini-line-item">✔ Notice Board sync active across all student portals.</div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 3: Student Portal */}
                  <div className={`portal-view-panel ${sphereTab === 'student' ? 'active' : ''}`}>
                    <div className="mockup-cards">
                      <div className="mini-card">
                        <div className="mini-card-title">Overall Attendance</div>
                        <div className="progress-ring-box">
                          <span className="mini-percent-big">92.4%</span>
                          <span className="safe-tag">Safe (Min 75%)</span>
                        </div>
                        <div className="mini-line-item">Total Hours: 320 / 346</div>
                      </div>
                      <div className="mini-card">
                        <div className="mini-card-title">Internal Assessment</div>
                        <div className="metric-mini-row">
                          <span>Python &amp; OOP</span>
                          <strong>48 / 50</strong>
                        </div>
                        <div className="metric-mini-row">
                          <span>Database Systems</span>
                          <strong>46 / 50</strong>
                        </div>
                      </div>
                      <div className="mini-card full">
                        <div className="mini-card-title">Recent Notice</div>
                        <div className="mini-notice">📅 Semester Practical Examination Schedule Published by Dean's Office</div>
                      </div>
                    </div>
                  </div>

                  <div className="portal-hint-row">
                    Interactive Role Switcher • Click Admin, Teacher, or Student tabs above
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
