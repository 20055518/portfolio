import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Experience({ internships = portfolioData.internships }) {
  return (
    <section id="experience" className="section section-bordered">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05 // Industry Training</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Hands-on software development internships in Python programming, strengthening core algorithmic design, code maintainability, and delivery discipline.
          </p>
        </div>

        <div className="timeline-editorial">
          {internships.map((intern) => (
            <div key={intern.company} className="timeline-entry">
              <div className="timeline-node" />

              <div className="timeline-card-editorial">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role-title">{intern.role}</h3>
                    <div className="timeline-company-line">{intern.company}</div>
                  </div>
                  <div className="timeline-period-badge">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: '-1px' }} />
                    <span>{intern.period}</span>
                  </div>
                </div>

                {intern.award && (
                  <div className="timeline-award-bar">
                    <Award size={14} />
                    <span>{intern.award}</span>
                  </div>
                )}

                <p className="timeline-summary">{intern.summary}</p>

                <ul className="timeline-bullets-list">
                  {intern.contributions.map((b, idx) => (
                    <li key={idx} className="timeline-bullet">
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="timeline-tags-row">
                  {intern.technologies.map((t) => (
                    <span key={t} className="tag">
                      {t}
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
