import React from 'react';
import { GraduationCap, BookOpen, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Education({ education = portfolioData.education }) {
  return (
    <section id="education" className="section section-bordered">
      <div className="container">
        <div className="section-header">
          <span className="section-label">06 // Academic Background</span>
          <h2 className="section-title">Education &amp; Credentials</h2>
          <p className="section-subtitle">
            Formal undergraduate studies in Computer Science and Engineering, foundational coursework, and linguistic proficiencies.
          </p>
        </div>

        <div className="education-grid">
          {/* Left Column: Degree Plate */}
          <div className="degree-card-editorial">
            <div className="degree-meta-top">
              <span className="degree-meta-tag">UNDERGRADUATE CANDIDACY</span>
              <span className="degree-period">{education.period}</span>
            </div>

            <h3 className="degree-title">{education.degree}</h3>
            <div className="degree-field">{education.field}</div>
            <div className="degree-institution">{education.institution}</div>
            <div className="degree-location">{education.location}</div>

            <div className="coursework-heading">
              <BookOpen size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: '-2px' }} />
              Key Academic Coursework
            </div>

            <div className="coursework-chips">
              {education.coursework.map((course) => (
                <div key={course} className="coursework-chip">
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages & Institutional Details */}
          <div className="education-aside-stack">
            <div className="education-aside-card">
              <h4 className="aside-card-title">
                <Globe size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: '-3px', color: 'var(--c-burgundy)' }} />
                Linguistic Competencies
              </h4>
              <div className="languages-list">
                {education.languages.map((lang) => (
                  <div key={lang.name} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-aside-card">
              <h4 className="aside-card-title">
                <GraduationCap size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: '-3px', color: 'var(--c-burgundy)' }} />
                Academic Overview
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--c-ink-soft)', lineHeight: '1.65' }}>
                Currently in the final year of the four-year Bachelor of Engineering program at Anand Institute of Higher Technology, actively preparing for entry-level Software Development, Backend Engineering, and Full-Stack roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
