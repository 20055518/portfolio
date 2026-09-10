import React from 'react';

export default function About({ resumeData }) {
  const metrics = [
    {
      icon: '🚀',
      value: '2',
      suffix: '+',
      label: 'Live Platforms',
      detail: 'TrizenPhotos & StudentSphere publicly hosted on Vercel'
    },
    {
      icon: '💼',
      value: '2',
      suffix: '',
      label: 'Python Internships',
      detail: 'Judah Code Tech & Intern Infobyte with Outstanding Performance'
    },
    {
      icon: '⏱️',
      value: '100',
      suffix: '%',
      label: 'Deadlines Met',
      detail: 'Strict delivery discipline across all academic & virtual projects'
    },
    {
      icon: '🎓',
      value: '2027',
      suffix: '',
      label: 'Graduation Year',
      detail: 'B.E. Computer Science and Engineering (AIHT Chennai)'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Background &amp; Philosophy</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Final-year Computer Science undergraduate with a practical programming foundation and a modern,
            AI-assisted development workflow.
          </p>
          <div className="section-divider" />
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-narrative">
            <p className="lead-text">
              I am a final-year Computer Science and Engineering undergraduate (2023–2027) at
              <strong> Anand Institute of Higher Technology</strong> in Chennai, India. My journey combines
              foundational programming fundamentals with a modern, prompt-driven approach to software construction.
            </p>

            <p>
              Rather than claiming manual mastery of every web framework, I embrace a clear engineering reality: I
              bring a grounded understanding of <strong>Core Python</strong>, <strong>Object-Oriented Programming</strong>,
              and <strong>SQL database operations</strong> (DDL, DML, DQL, DCL, TCL), paired with semantic HTML5 and CSS3.
            </p>

            <p>
              Where I excel is as an <strong>AI-assisted software builder</strong>. I direct AI coding tools to architect
              and scaffold full-stack features—translating complex requirements into modular components, structuring
              FastAPI REST APIs, and designing MongoDB database models. Crucially, I treat AI code as draft code: I
              rigorously inspect, debug, and verify every file, solving runtime exceptions, fixing routing issues, and
              ensuring end-to-end functionality.
            </p>

            <p>
              My hands-on experience includes two virtual Python developer internships—at <strong>Judah Code Technologies</strong> and
              <strong> Intern Infobyte</strong> (where I received an Outstanding Performance commendation). I am an adaptable,
              quick learner eager to contribute to an engineering team as an entry-level software developer.
            </p>

            {/* Languages Known */}
            <div className="about-languages">
              <span className="languages-title">Languages Known:</span>
              {resumeData.personal.languagesKnown.map((lang) => (
                <span key={lang} className="lang-badge">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Column */}
          <div className="about-metrics-grid">
            {metrics.map((item) => (
              <div key={item.label} className="spotlight-card metric-card">
                <div className="card-spotlight-overlay" />
                <div className="metric-icon">{item.icon}</div>
                <div className="metric-value-wrapper">
                  <span>{item.value}</span>
                  {item.suffix && <span className="metric-suffix">{item.suffix}</span>}
                </div>
                <div className="metric-label">{item.label}</div>
                <div className="metric-detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
