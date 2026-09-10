import React from 'react';

export default function Experience({ resumeData }) {
  const { internships } = resumeData;

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Two virtual software development internships in Python programming, strengthening core coding discipline,
            problem-solving, and deadline management.
          </p>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          {internships.map((internship) => (
            <div key={internship.company} className="timeline-item">
              <div className="timeline-dot" />

              <div className="spotlight-card timeline-card">
                <div className="card-spotlight-overlay" />

                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{internship.role}</h3>
                    <div className="company-name">
                      <span>{internship.company}</span>
                      <span className="badge-internship">{internship.type}</span>
                      {internship.highlight && (
                        <span className="badge-highlight">{internship.highlight}</span>
                      )}
                    </div>
                  </div>
                  <div className="timeline-period">
                    <span>📅</span>
                    <span>{internship.period}</span>
                  </div>
                </div>

                <div className="timeline-body">
                  <p>{internship.summary}</p>
                  <ul className="timeline-achievements">
                    {internship.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-footer">
                  {internship.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
