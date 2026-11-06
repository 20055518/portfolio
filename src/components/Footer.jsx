import React from 'react';
import { ArrowUp, Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Footer({ personal = portfolioData.personal }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Top', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Method', href: '#ai-assisted' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand & Editorial Column */}
          <div>
            <div className="footer-brand">{personal.name}</div>
            <p className="footer-tagline">
              Final-year Computer Science and Engineering undergraduate focused on building reliable full-stack applications, scalable backend APIs, and applied machine learning systems.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '16px' }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="footer-nav-link"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={personal.resumeUrl}
                download="Jebilin_DM_Resume.pdf"
                className="footer-nav-link"
                title="Resume"
              >
                <FileDown size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h5>INDEX NAVIGATION</h5>
            <ul className="footer-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {currentYear} {personal.name} • Designed &amp; Engineered with React 18 &amp; Vite
          </div>
          <div>
            Chennai, Tamil Nadu, India • B.E. Computer Science and Engineering (2023–2027)
          </div>
        </div>
      </div>
    </footer>
  );
}
