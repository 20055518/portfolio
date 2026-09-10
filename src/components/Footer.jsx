import React from 'react';

export default function Footer({ resumeData, openResume }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="brand-logo">
            <span className="logo-mark">JM</span>
            <span>Jebilin D.M</span>
          </a>
          <p className="footer-bio">
            Final-Year Computer Science Undergraduate (2023–2027) • Anand Institute of Higher Technology
            <br />
            Core Python &amp; SQL • AI-Assisted Full-Stack Builder • TrizenPhotos &amp; StudentSphere
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={openResume}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            Resume Modal
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} Jebilin D.M. Crafted with React 18, Vite &amp; Modern CSS.
          </div>
          <div>
            Chennai, India • Ready for Entry-Level Software Engineering Opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}
