import React from 'react';

export default function TrustedBySection() {
  const logos = [
    "MAERSK", "MSC", "HAPAG-LLOYD", "COSCO", "ONE", "EVERGREEN", "CMA CGM",
    // Duplicate for seamless scroll
    "MAERSK", "MSC", "HAPAG-LLOYD", "COSCO", "ONE", "EVERGREEN", "CMA CGM"
  ];

  return (
    <section style={{ padding: 'var(--spacing-xl) 0', borderBottom: '1px solid var(--color-hairline-dark)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: 'var(--spacing-xxl)', padding: '0 var(--spacing-xxl)' }}>
        <p className="eyebrow-cap" style={{ color: 'var(--color-shade-50)', minWidth: 'max-content', zIndex: 2, backgroundColor: 'var(--color-canvas-night)', paddingRight: 'var(--spacing-md)' }}>
          TRUSTED BY GLOBAL PARTNERS
        </p>
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {/* Fading edges */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--color-canvas-night), transparent)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--color-canvas-night), transparent)', zIndex: 1 }}></div>
          
          <div className="carousel-track" style={{ opacity: 0.4, alignItems: 'center' }}>
            {logos.map((logo, idx) => (
              <span key={idx} className="heading-sm" style={{ whiteSpace: 'nowrap' }}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
