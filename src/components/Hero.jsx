import React, { useState, useEffect } from 'react';

export default function Hero({ resumeData, openResume, showToast }) {
  const [codeExecuted, setCodeExecuted] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Aspiring Software Developer',
    'Python & SQL Developer',
    'AI-Assisted Web Builder',
    'TrizenPhotos & StudentSphere Creator'
  ];

  useEffect(() => {
    const fullText = roles[typewriterIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typewriterIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    showToast('Email copied to clipboard: ' + resumeData.personal.email);
  };

  const handleRunCode = () => {
    setCodeExecuted(true);
    showToast('Code executed! Profile instantiated successfully.');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Introduction & CTA */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Available for Entry-Level Software Roles • Final Year CSE</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Jebilin D.M</span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="typewriter-container" aria-live="polite">
            <span className="typewriter-prefix">&gt;</span>
            <span>{currentText}</span>
            <span className="cursor">|</span>
          </div>

          {/* Description */}
          <p className="hero-description">
            Final-year Computer Science undergraduate (2023–2027) with a solid foundation in
            <strong> Python</strong>, <strong>SQL</strong>, and modern web styling. Independently built two live
            full-stack web platforms—<strong>TrizenPhotos</strong> and <strong>StudentSphere</strong>—leveraging
            AI-assisted development tools to accelerate implementation, debugging, and cloud integration. Completed
            dual Python developer internships with proven problem-solving discipline.
          </p>

          {/* Call-to-Action Group */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Explore Live Projects
            </a>
            <button type="button" className="btn btn-secondary" onClick={openResume}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              View Full Resume
            </button>
            <a
              href="/Jebilin_DM_Resume.pdf"
              download="Jebilin_DM_Resume.pdf"
              className="btn btn-outline"
              title="Download official PDF resume directly"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
          </div>

          {/* Quick Contact & Location Meta Pills */}
          <div className="hero-meta-pills">
            <span className="meta-pill">
              <span>📍</span>
              <span>Chennai, India</span>
            </span>
            <a href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`} className="meta-pill meta-link">
              <span>📞</span>
              <span>{resumeData.personal.phone}</span>
            </a>
            <button
              type="button"
              className="meta-pill meta-copy-btn"
              onClick={handleCopyEmail}
              title="Click to copy email address"
            >
              <span>✉️</span>
              <span>{resumeData.personal.email}</span>
              <span className="copy-badge">Copy</span>
            </button>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="meta-pill meta-link"
            >
              <span>🔗</span>
              <span>{resumeData.personal.linkedinDisplay}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Profile Stage */}
        <div className="hero-visual">
          <div className="profile-stage">
            {/* Orbiting Badges (Desktop) */}
            <div className="orbit-badge badge-python">
              <span className="badge-icon">🐍</span>
              <span>Python &amp; OOP</span>
            </div>
            <div className="orbit-badge badge-sql">
              <span className="badge-icon">🗄️</span>
              <span>SQL (DDL • DML • DQL)</span>
            </div>
            <div className="orbit-badge badge-html">
              <span className="badge-icon">🎨</span>
              <span>HTML5 &amp; CSS3</span>
            </div>
            <div className="orbit-badge badge-git">
              <span className="badge-icon">🌿</span>
              <span>Git &amp; GitHub</span>
            </div>
            <div className="orbit-badge badge-ai">
              <span className="badge-icon">🤖</span>
              <span>AI-Assisted Dev</span>
            </div>

            {/* Glass Profile Card */}
            <div className="spotlight-card profile-card-glass">
              <div className="card-spotlight-overlay" />
              
              <div className="profile-header">
                <div className="profile-avatar">
                  <div className="avatar-ring" />
                  <span className="avatar-initials">JM</span>
                </div>
                <div className="profile-title-block">
                  <h3 className="profile-name">{resumeData.personal.name}</h3>
                  <div className="profile-sub">B.E. Computer Science (2023–2027)</div>
                  <div className="profile-inst">{resumeData.personal.college}</div>
                </div>
              </div>

              {/* Code Preview & Live Runner */}
              <div className="profile-code-preview">
                <div className="code-header">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-filename">developer_profile.py</span>
                  <button
                    type="button"
                    className="run-btn"
                    onClick={handleRunCode}
                    title="Click to run Python snippet"
                  >
                    <span>▶</span> Run
                  </button>
                </div>

                <pre className="code-body">
                  <code>
                    <span className="c-keyword">class</span> <span className="c-class">Developer</span>:<br />
                    &nbsp;&nbsp;<span className="c-keyword">def</span> <span className="c-func">__init__</span>(self):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="c-string">"{resumeData.personal.name}"</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.languages = [<span className="c-string">"Python"</span>, <span className="c-string">"SQL"</span>, <span className="c-string">"HTML5"</span>, <span className="c-string">"CSS3"</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.methodology = <span className="c-string">"AI-Assisted Full-Stack Engineering"</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.flagships = [<span className="c-string">"TrizenPhotos"</span>, <span className="c-string">"StudentSphere"</span>]<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.status = <span className="c-string">"Ready to create impact"</span>
                  </code>
                </pre>

                {/* Animated output console */}
                <div className={`code-output-pane ${codeExecuted ? 'active' : ''}`}>
                  <span className="output-prefix">&gt;&gt;&gt; python3 developer_profile.py</span>
                  <span className="output-result">
                    ✔ [OK] Profile instantiated successfully. Ready for hire in Chennai / Remote!
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="profile-tags">
                <span className="tag">Python</span>
                <span className="tag">SQL</span>
                <span className="tag">FastAPI</span>
                <span className="tag">React 19</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Prompt Workflow</span>
                <span className="tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
