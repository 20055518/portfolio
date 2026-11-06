import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

export default function Navbar({ personal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'ai-assisted', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'AI Method', href: '#ai-assisted', id: 'ai-assisted' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Brand */}
        <a href="#home" className="nav-brand" onClick={(e) => handleLinkClick(e, '#home')}>
          <span>{personal.name}</span>
          <span className="nav-brand-tag">B.E. CSE</span>
        </a>

        {/* Desktop Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a
            href={personal.resumeUrl}
            download="Jebilin_DM_Resume.pdf"
            className="btn btn-primary btn-sm"
            title="Download Official Resume PDF"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, idx) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span className="num">0{idx + 1}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href={personal.resumeUrl}
            download="Jebilin_DM_Resume.pdf"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <FileDown size={16} />
            <span>Download Official Resume (PDF)</span>
          </a>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--c-ink-muted)' }}>
            <span>{personal.email}</span>
            <span>{personal.location}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
