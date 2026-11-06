import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons.jsx';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-backdrop-editorial"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog-editorial">
        {/* Header */}
        <div className="modal-header-editorial">
          <div>
            <span className="modal-subtitle-editorial">{project.category}</span>
            <h3 className="modal-title-editorial">{project.title} — Technical Deep Dive</h3>
          </div>
          <button
            type="button"
            className="modal-close-editorial"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body-editorial">
          <p style={{ fontSize: '1.05rem', color: 'var(--c-ink)', lineHeight: '1.7', marginBottom: '20px' }}>
            {project.description}
          </p>

          {/* Architecture Summary */}
          <h4 className="modal-section-title">Architectural Structure</h4>
          <p style={{ fontSize: '0.9375rem', color: 'var(--c-ink-soft)', marginBottom: '16px' }}>
            {project.architectureSummary}
          </p>

          {/* Key Features Breakdown */}
          <h4 className="modal-section-title">Core Engineering Modules</h4>
          <div className="modal-features-list">
            {project.keyFeatures.map((feat) => (
              <div key={feat.title} className="modal-feature-card">
                <h5 className="modal-feature-title">{feat.title}</h5>
                <p className="modal-feature-desc">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Developer Contributions */}
          <h4 className="modal-section-title">Author Contributions</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            {project.contributions.map((c, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.875rem',
                  color: 'var(--c-ink-soft)',
                  lineHeight: '1.6'
                }}
              >
                <span style={{ color: 'var(--c-burgundy)', fontWeight: '700' }}>✔</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          {/* Technologies Used */}
          <h4 className="modal-section-title">Technology Stack</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
            {project.technologies.map((t) => (
              <span key={t} className="tag tag-accent">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer-editorial">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Launch Live Project</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={14} />
                <span>Source Repository</span>
              </a>
            )}

            {project.accessPin && (
              <span className="tag tag-olive" style={{ display: 'inline-flex', alignItems: 'center' }}>
                Guest PIN: {project.accessPin}
              </span>
            )}
          </div>

          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
