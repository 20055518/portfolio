import React, { useState } from 'react';

export default function Skills({ resumeData }) {
  const [activeTab, setActiveTab] = useState('all');

  const { categories, items, softSkills } = resumeData.skills;

  // Filter skills based on tab
  const filteredItems = activeTab === 'all'
    ? items
    : items.filter((item) => item.category === activeTab);

  const showSoftSkills = activeTab === 'all' || activeTab === 'soft';

  // Group items by category for structured presentation
  const groupedCategories = [
    {
      id: 'core',
      title: 'Languages & Core Programming',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      items: filteredItems.filter((i) => i.category === 'core')
    },
    {
      id: 'ai-dev',
      title: 'AI-Assisted Full-Stack Development',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      ),
      items: filteredItems.filter((i) => i.category === 'ai-dev')
    },
    {
      id: 'workflow',
      title: 'Workflow, Tooling & DevOps',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      items: filteredItems.filter((i) => i.category === 'workflow')
    }
  ].filter((cat) => cat.items.length > 0);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Capabilities</h2>
          <p className="section-subtitle">
            Core language fundamentals coupled with prompt engineering, code verification, and modern tooling.
          </p>
          <div className="section-divider" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="skills-filter-nav" role="tablist">
          {categories.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`skill-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Technical Skills Category Cards */}
        {groupedCategories.length > 0 && (
          <div className="skills-category-grid" style={{ marginBottom: showSoftSkills ? '2rem' : '0' }}>
            {groupedCategories.map((group) => (
              <div key={group.id} className="spotlight-card skill-category-card">
                <div className="card-spotlight-overlay" />
                <div className="category-header">
                  <div className="category-icon-box">{group.icon}</div>
                  <h3 className="category-title">{group.title}</h3>
                </div>

                <div className="skill-items-list">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-tag-pill">{skill.tag}</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                          title={`${skill.level}% proficiency`}
                        />
                      </div>
                      <p className="skill-subtext">{skill.subtext}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills Section */}
        {showSoftSkills && (
          <div className="spotlight-card skill-category-card" style={{ marginTop: '1.5rem' }}>
            <div className="card-spotlight-overlay" />
            <div className="category-header">
              <div className="category-icon-box">
                <span style={{ fontSize: '1.25rem' }}>🤝</span>
              </div>
              <h3 className="category-title">Professional &amp; Soft Skills</h3>
            </div>

            <div className="soft-skills-grid">
              {softSkills.map((skill) => (
                <div key={skill.name} className="soft-skill-chip">
                  <span className="chip-icon">{skill.icon}</span>
                  <div className="chip-content">
                    <span className="chip-label">{skill.name}</span>
                    <span className="chip-sub">{skill.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
