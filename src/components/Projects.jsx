import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Code2, GitBranch, Shield, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Projects({ projects = portfolioData.projects, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'healthcare', label: 'Healthcare & ML' },
    { id: 'education', label: 'Education Tech' },
    { id: 'web', label: 'Web Applications' }
  ];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'healthcare') return proj.id === 'care-plus';
    if (activeFilter === 'education') return proj.id === 'studentsphere';
    if (activeFilter === 'web') return proj.id === 'trizenphotos';
    return true;
  });

  return (
    <section id="projects" className="section section-bordered">
      <div className="container">
        <div className="section-header">
          <span className="section-label">03 // Portfolio Case Studies</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Engineered software systems presented as deep case studies covering architecture, machine learning integration, and verified implementations.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Stack */}
        <div className="projects-stack">
          {filteredProjects.map((project) => {
            const isCarePlus = project.id === 'care-plus';
            const isTrizen = project.id === 'trizenphotos';

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className={`project-case-study ${isCarePlus ? 'flagship' : ''}`}
              >
                <div className="case-study-inner">
                  {/* Narrative Column */}
                  <div className="project-narrative-col">
                    <div className="project-header-row">
                      <span className="project-num-badge">{project.number}</span>
                      <span className="project-category-meta">{project.category}</span>
                    </div>

                    <h3 className="project-title-editorial">{project.title}</h3>
                    <div className="project-subtitle-editorial">{project.subtitle}</div>

                    {/* Tech Stack Chips */}
                    <div className="project-tags-list">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tag tag-accent">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="project-desc-editorial">{project.description}</p>

                    {/* Bullet Highlights */}
                    <div className="project-key-bullets">
                      {project.contributions.map((bullet, idx) => (
                        <div key={idx} className="project-bullet-item">
                          <span className="bullet-dash">—</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="project-actions-row">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="btn btn-primary btn-sm"
                      >
                        <span>Case Study Details</span>
                        <ArrowUpRight size={14} />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                        >
                          <span>Live Project</span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="editorial-link"
                        >
                          <GithubIcon size={14} />
                          <span>Repository</span>
                        </a>
                      )}

                      {isTrizen && project.accessPin && (
                        <span className="tag tag-olive" title="Demo Guest PIN">
                          PIN: {project.accessPin}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technical & Workflow Column */}
                  <div className="project-technical-col">
                    <div className="technical-col-header">
                      <span className="technical-heading">SYSTEM WORKFLOW &amp; PIPELINE</span>
                      <span className="technical-status-badge">{project.status}</span>
                    </div>

                    {/* StudentSphere Screenshot Gallery Preview */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <div className="project-gallery-preview">
                        <div className="gallery-preview-label">APPLICATION INTERFACE PREVIEWS</div>
                        <div className="gallery-preview-grid">
                          {project.screenshots.map((shot, sIdx) => (
                            <div
                              key={sIdx}
                              className="gallery-preview-card"
                              onClick={() => onSelectProject(project)}
                              title={`${shot.title} - Click for case study`}
                            >
                              <img src={shot.url} alt={shot.title} loading="lazy" />
                              <div className="gallery-preview-overlay">
                                <span>{shot.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technical Flow Diagram */}
                    <div className="technical-diagram">
                      {project.workflowDiagram.map((step, idx) => (
                        <React.Fragment key={step.step}>
                          <div className="diagram-step-box">
                            <span className="diagram-step-num">{step.step}</span>
                            <div className="diagram-step-content">
                              <h5>{step.label}</h5>
                              <p>{step.detail}</p>
                            </div>
                          </div>
                          {idx < project.workflowDiagram.length - 1 && (
                            <div className="diagram-flow-arrow">↓</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <p className="technical-architecture-note">
                      <strong>Architecture Summary: </strong>
                      {project.architectureSummary}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
