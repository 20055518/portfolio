import React, { useState } from 'react';

export default function Contact({ resumeData, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const subjectText = formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`;
    const mailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // Try Formspree free form submission endpoint
    try {
      const response = await fetch(`https://formspree.io/f/mqaeewge`, {
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
          message: formData.message,
          to: resumeData.personal.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        showToast('Message sent successfully! Thank you for reaching out.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.log('Formspree dispatch error, falling back to email client...', err);
    }

    // Fallback 1: mailto link activation
    const mailtoUrl = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(mailBody)}`;
    
    // Create invisible anchor to reliably trigger default mail app without popup blocker
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_self';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitStatus('success');
    showToast('Opening your email client to send message...');
    setIsSubmitting(false);
  };

  // Dedicated Gmail Direct Web Compose helper
  const handleOpenGmail = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || 'Visitor'}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${resumeData.personal.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Actively seeking entry-level Software Developer roles. Have an opportunity or question? Let's connect!
          </p>
          <div className="section-divider" />
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Direct Inquiries</h3>
            <p className="contact-col-desc">
              Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
            </p>

            <div className="contact-cards-stack">
              {/* Email Card */}
              <div className="spotlight-card contact-action-card">
                <div className="card-spotlight-overlay" />
                <div className="contact-card-icon">✉️</div>
                <div className="contact-card-text">
                  <span className="contact-label">Email Address</span>
                  <a href={`mailto:${resumeData.personal.email}`} className="contact-val">
                    {resumeData.personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => handleCopy(resumeData.personal.email, 'Email')}
                >
                  Copy
                </button>
              </div>

              {/* Phone Card */}
              <div className="spotlight-card contact-action-card">
                <div className="card-spotlight-overlay" />
                <div className="contact-card-icon">📞</div>
                <div className="contact-card-text">
                  <span className="contact-label">Phone / WhatsApp</span>
                  <a href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`} className="contact-val">
                    {resumeData.personal.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => handleCopy(resumeData.personal.phone, 'Phone number')}
                >
                  Copy
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="spotlight-card contact-action-card">
                <div className="card-spotlight-overlay" />
                <div className="contact-card-icon">🔗</div>
                <div className="contact-card-text">
                  <span className="contact-label">LinkedIn Profile</span>
                  <a
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    {resumeData.personal.linkedinDisplay}
                  </a>
                </div>
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Visit ↗
                </a>
              </div>

              {/* Location Card */}
              <div className="spotlight-card contact-action-card">
                <div className="card-spotlight-overlay" />
                <div className="contact-card-icon">📍</div>
                <div className="contact-card-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-val">{resumeData.personal.location}</span>
                </div>
                <span className="cert-status-pill" style={{ margin: 0 }}>Open to Relocation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Form */}
          <div className="contact-form-col">
            <div className="spotlight-card form-wrapper-card">
              <div className="card-spotlight-overlay" />
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-desc">
                Fill in the details below to dispatch a message directly to my inbox.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Entry-Level Developer Role"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Jebilin, we came across your projects (TrizenPhotos / StudentSphere)..."
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary btn-full"
                    onClick={handleOpenGmail}
                    title="Open draft directly in Gmail in browser"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Compose in Gmail (Browser)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
