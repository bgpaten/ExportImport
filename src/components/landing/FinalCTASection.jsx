import React from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTASection() {
  return (
    <section style={{ padding: 'calc(var(--spacing-huge) * 2) var(--spacing-xxl)', textAlign: 'center' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 className="display-xl" style={{ marginBottom: 'var(--spacing-xl)' }}>Ready to scale your supply chain?</h2>
        <p className="body-lg" style={{ color: 'var(--color-shade-40)', marginBottom: 'var(--spacing-huge)' }}>
          Contact our sales team today to request a quotation, request samples, or download our full company profile.
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="button button-outline-on-dark">
            Contact Sales
          </a>
          <Link to="/catalog" className="button" style={{ color: 'var(--color-on-primary)', border: '2px solid transparent' }}>
            Request Quotation
          </Link>
        </div>
      </div>
    </section>
  );
}
