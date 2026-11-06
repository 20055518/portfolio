import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="editorial-back-to-top"
      onClick={scrollToTop}
      aria-label="Return to top of page"
      title="Return to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: 'var(--c-ink)',
        color: 'var(--c-ivory)',
        border: '1px solid var(--c-stone)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(32, 35, 33, 0.16)',
        zIndex: 90,
        transition: 'all 0.25s ease'
      }}
    >
      <ArrowUp size={18} strokeWidth={2.2} />
    </button>
  );
}
