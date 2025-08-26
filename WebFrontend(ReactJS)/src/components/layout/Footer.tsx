import React from 'react';

// PUBLIC_INTERFACE
const Footer: React.FC = () => {
  /** Footer with secondary links placeholder. */
  return (
    <footer className="footer" role="contentinfo">
      <div className="container" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', color: 'var(--muted)' }}>
        <span>&copy; {new Date().getFullYear()} Adaptive Fitness</span>
        <nav aria-label="Secondary">
          <a href="#privacy">Privacy</a>
          {' · '}
          <a href="#terms">Terms</a>
          {' · '}
          <a href="#help">Help</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
