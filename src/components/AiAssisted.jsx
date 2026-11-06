import React from 'react';

export default function AiAssisted({ philosophy }) {
  return (
    <section id="ai-assisted" className="section ai-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">04 // Engineering Methodology</span>
          <h2 className="section-title">AI-Assisted Development</h2>
          <p className="section-subtitle">
            How I employ AI coding assistants as productivity force multipliers while maintaining strict human ownership of architecture, debugging, and verification.
          </p>
        </div>

        <p className="ai-intro-lead">
          {philosophy.lead}
        </p>

        <div className="ai-pillars-grid">
          {philosophy.pillars.map((pillar, idx) => (
            <div key={pillar.title} className="ai-pillar-card">
              <span className="ai-pillar-num">P-0{idx + 1}</span>
              <h3 className="ai-pillar-title">{pillar.title}</h3>
              <p className="ai-pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
