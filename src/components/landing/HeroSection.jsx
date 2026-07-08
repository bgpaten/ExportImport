import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'calc(var(--spacing-huge) * 2) var(--spacing-xxl) var(--spacing-huge)'
    }}>
      <div className="card-photo-frame" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, borderRadius: 0 }}>
        <img src="/hero_export_shipping.png" alt="Export shipping port" style={{ opacity: 0.5 }} />
      </div>
      
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <p className="eyebrow-cap" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-link-mint)' }}>Global Export Operations</p>
        <h1 className="display-xxl" style={{ marginBottom: 'var(--spacing-xl)', maxWidth: '1100px' }}>
          Bridging markets.<br/>Moving the world.
        </h1>
        <p className="body-lg" style={{ marginBottom: 'var(--spacing-xxl)', maxWidth: '600px', color: 'var(--color-shade-30)' }}>
          Enterprise-grade sourcing and logistics for premium commodities. From raw materials to finished goods, we deliver across 50+ countries with unmatched reliability.
        </p>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', marginBottom: 'var(--spacing-huge)' }}>
          <Link to="/catalog" className="button button-outline-on-dark">
            Browse Catalog
          </Link>
          <a href="#contact" className="button" style={{ color: 'var(--color-on-primary)', border: '2px solid transparent' }}>
            Request Quotation
          </a>
        </div>

        <div style={{ display: 'flex', gap: 'var(--spacing-xxl)', borderTop: '1px solid var(--color-hairline-dark)', paddingTop: 'var(--spacing-xl)' }}>
          <div>
            <div className="heading-xl">10k+</div>
            <div className="caption" style={{ color: 'var(--color-shade-40)' }}>Shipments Completed</div>
          </div>
          <div>
            <div className="heading-xl">50+</div>
            <div className="caption" style={{ color: 'var(--color-shade-40)' }}>Countries Served</div>
          </div>
          <div>
            <div className="heading-xl">100%</div>
            <div className="caption" style={{ color: 'var(--color-shade-40)' }}>Compliance Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
