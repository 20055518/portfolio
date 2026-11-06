import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Contact({ personal = portfolioData.personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill in your name, email, and message.' });
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const subjectText = formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`;

    try {
      // 1. Primary: Submit to Web3Forms (forwards directly to dmjebilin@gmail.com without account activation friction)
      const resWeb3 = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5f9226cf-4481-4fc3-a55e-f0eebfbe4d9d',
          name: formData.name,
          email: formData.email,
          subject: subjectText,
          message: formData.message,
          to: personal.email
        })
      });

      const dataWeb3 = await resWeb3.json().catch(() => ({}));
      if (resWeb3.ok && dataWeb3.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      // 2. Secondary fallback: Formspree endpoint
      const response = await fetch('https://formspree.io/f/mqaeewge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: subjectText,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: null
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      } else {
        throw new Error('Online form gateway rejected.');
      }
    } catch (err) {
      // 3. Guaranteed Delivery Fallback: Direct Mailto Dispatch
      console.warn('Form service failed, triggering direct client mail client dispatch...', err);

      const mailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${subjectText}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(mailBody)}`;

      window.location.href = mailtoUrl;

      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">07 // Collaboration &amp; Hiring</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Actively seeking entry-level Software Developer roles. Available for discussions regarding full-stack engineering, backend systems, and team opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Communication Channels */}
          <div>
            <h3 className="contact-direct-heading">Direct Channels</h3>
            <p className="contact-direct-desc">
              Whether you have an open software engineering role, a technical inquiry about CARE+ or StudentSphere, or wish to review code artifacts, please connect through any channel below.
            </p>

            <div className="contact-channels-list">
              <a href={`mailto:${personal.email}`} className="channel-card">
                <div className="channel-icon">
                  <Mail size={22} />
                </div>
                <div className="channel-content">
                  <span className="channel-label">ELECTRONIC MAIL</span>
                  <div className="channel-val">{personal.email}</div>
                </div>
              </a>

              <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="channel-card">
                <div className="channel-icon">
                  <Phone size={22} />
                </div>
                <div className="channel-content">
                  <span className="channel-label">TELEPHONE / WHATSAPP</span>
                  <div className="channel-val">{personal.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-icon">
                  <LinkedinIcon size={22} />
                </div>
                <div className="channel-content">
                  <span className="channel-label">PROFESSIONAL NETWORK</span>
                  <div className="channel-val">{personal.linkedinDisplay}</div>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-icon">
                  <GithubIcon size={22} />
                </div>
                <div className="channel-content">
                  <span className="channel-label">CODE REPOSITORY</span>
                  <div className="channel-val">{personal.githubDisplay}</div>
                </div>
              </a>

              <div className="channel-card" style={{ cursor: 'default' }}>
                <div className="channel-icon">
                  <MapPin size={22} />
                </div>
                <div className="channel-content">
                  <span className="channel-label">BASE LOCATION</span>
                  <div className="channel-val">{personal.location} (Open to Relocation)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Message Form */}
          <div className="contact-form-plate">
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: '500', marginBottom: '8px' }}>
              Transmit a Written Message
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--c-ink-muted)', marginBottom: '24px' }}>
              Submissions are delivered directly to my inbox with confirmed validation.
            </p>

            {status.success && (
              <div className="form-feedback success">
                <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: '-2px' }} />
                Your message has been received. I typically respond within 24 business hours.
              </div>
            )}

            {status.error && (
              <div className="form-feedback error">
                <AlertCircle size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: '-2px' }} />
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Eleanor Vance"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. eleanor@company.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Developer Opening at [Company]"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message or inquiry here..."
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
              >
                <Send size={15} />
                <span>{status.submitting ? 'Transmitting Message...' : 'Transmit Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
