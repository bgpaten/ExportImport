import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ track = 'dark' }) {
  const footerClass = track === 'dark' ? 'footer-dark' : 'footer-light';
  const linkClass = track === 'dark' ? 'var(--color-link-cool-2)' : 'var(--color-shade-50)';
  const borderTopColor = track === 'dark' ? 'var(--color-shade-70)' : 'var(--color-hairline-light)';
  
  return (
    <footer className={footerClass} style={{ borderTop: track === 'light' ? `1px solid ${borderTopColor}` : 'none' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-huge)' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <h4 className="heading-sm" style={{ marginBottom: 'var(--spacing-md)' }}>Global Export.</h4>
          <p className="caption" style={{ color: linkClass, marginBottom: 'var(--spacing-xl)', maxWidth: '300px' }}>
            Enterprise supply chain solutions connecting the world's finest commodities with global markets.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
            {/* Newsletter input from DESIGN.md style */}
            <input type="email" placeholder="Email address" style={{ 
              background: 'transparent', 
              border: `1px solid ${linkClass}`, 
              color: 'inherit',
              padding: '10px 12px',
              borderRadius: 'var(--rounded-md)',
              fontFamily: 'var(--font-family-body)',
              outline: 'none'
            }} />
            <button className={track === 'dark' ? 'button-outline-on-dark' : 'button-outline-on-light'} style={{ padding: '10px 16px', borderRadius: 'var(--rounded-pill)', border: `1px solid ${track === 'dark' ? 'var(--color-on-primary)' : 'var(--color-ink)'}`, background: 'transparent', color: 'inherit', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
        <div>
          <h4 className="heading-sm" style={{ marginBottom: 'var(--spacing-md)' }}>Commodities</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <li><Link to="/catalog" style={{ color: linkClass }}>Briquettes</Link></li>
            <li><Link to="/catalog" style={{ color: linkClass }}>Spices</Link></li>
            <li><Link to="/catalog" style={{ color: linkClass }}>Coffee</Link></li>
            <li><Link to="/catalog" style={{ color: linkClass }}>Raw Materials</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="heading-sm" style={{ marginBottom: 'var(--spacing-md)' }}>Industries</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <li><a href="#" style={{ color: linkClass }}>Manufacturing</a></li>
            <li><a href="#" style={{ color: linkClass }}>Retail</a></li>
            <li><a href="#" style={{ color: linkClass }}>Food & Beverage</a></li>
            <li><a href="#" style={{ color: linkClass }}>Energy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="heading-sm" style={{ marginBottom: 'var(--spacing-md)' }}>Company</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <li><a href="#" style={{ color: linkClass }}>About Us</a></li>
            <li><a href="#" style={{ color: linkClass }}>Certifications</a></li>
            <li><a href="#" style={{ color: linkClass }}>Careers</a></li>
            <li><a href="#" style={{ color: linkClass }}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: '1440px', margin: 'var(--spacing-huge) auto 0', borderTop: `1px solid ${borderTopColor}`, paddingTop: 'var(--spacing-xl)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
        <p className="caption" style={{ color: linkClass }}>&copy; 2026 Global Export Co. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
          <a href="#" className="caption" style={{ color: linkClass }}>Privacy Policy</a>
          <a href="#" className="caption" style={{ color: linkClass }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
