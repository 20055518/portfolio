import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export default function Skills({ skillsData = portfolioData.skills }) {
  return (
    <section id="skills" className="section section-bordered">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 // Technical System</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Structured skill architecture categorized by practical application domain without unverified percentage scores.
          </p>
        </div>

        <div className="skills-editorial-grid">
          {skillsData.groups.map((group, idx) => (
            <div key={group.category} className="skill-category-block">
              <div className="skill-category-top">
                <span className="skill-category-num">CAT 0{idx + 1}</span>
                <h3 className="skill-category-title">{group.category}</h3>
                <p className="skill-category-desc">{group.description}</p>
              </div>

              <div className="skill-tags-group">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-item-row">
                    <span className="skill-item-name">{item.name}</span>
                    <span className="skill-item-detail">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
