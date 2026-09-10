import React from 'react';

export default function Education({ resumeData }) {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic &amp; Credentials</span>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <p className="section-subtitle">
            Undergraduate degree in Computer Science and Engineering alongside verified internship credentials.
          </p>
          <div className="section-divider" />
        </div>

        {/* Education & Certifications Grid */}
        <div className="edu-cert-grid">
          {/* Education Card */}
          <div className="spotlight-card credential-card">
            <div className="card-spotlight-overlay" />
            <div className="credential-badge-icon">🎓</div>
            <div className="credential-content">
              <span className="credential-type">Degree Program</span>
              <h3 className="credential-title">{education.degree}</h3>
              <div className="credential-subtitle">{education.field}</div>
              <div className="credential-institution">{education.institution}</div>

              <div className="credential-meta">
                <span className="credential-period">📅 {education.period}</span>
                <span className="credential-location">📍 {education.location}</span>
              </div>

              <p className="credential-desc">{education.desc}</p>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="spotlight-card credential-card">
            <div className="card-spotlight-overlay" />
            <div className="credential-badge-icon">📜</div>
            <div className="credential-content">
              <span className="credential-type">Verified Credentials</span>
              <h3 className="credential-title" style={{ marginBottom: '1rem' }}>
                Internship Certifications
              </h3>

              <div className="certifications-list">
                {certifications.map((cert) => (
                  <div key={cert.issuer} className="cert-item-block">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.2rem' }}>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{cert.title}</strong>
                      <span className={`cert-status-pill ${cert.highlight ? 'highlight' : ''}`}>
                        {cert.highlight || cert.type}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {cert.issuer} • <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cert.period}</span>
                    </div>
                    <p className="credential-desc" style={{ fontSize: '0.8125rem' }}>
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
