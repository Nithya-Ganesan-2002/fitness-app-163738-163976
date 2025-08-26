import React from 'react';

// PUBLIC_INTERFACE
export const Card: React.FC<React.PropsWithChildren<{ title?: string; ariaLabel?: string }>> = ({ title, ariaLabel, children }) => {
  /** Accessible card container used across pages. */
  return (
    <section className="card" aria-label={ariaLabel ?? title}>
      {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
      {children}
    </section>
  );
};
