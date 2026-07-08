import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isDark = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navClass = isDark ? 'nav-bar-dark' : 'nav-bar-light';
  const linkColor = isDark ? 'var(--color-on-primary)' : 'var(--color-ink)';
  const buttonClassPrimary = isDark ? 'button button-outline-on-dark' : 'button button-primary-pill';
  
  return (
    <>
      <nav className={navClass} style={{ zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link to="/" style={{ fontWeight: 600, fontSize: '20px', color: linkColor }}>
            Global Export.
          </Link>
          
          {/* Desktop Links */}
          <div className="desktop-only" style={{ gap: '24px' }}>
            <Link to="/catalog" style={{ color: linkColor }}>Catalog</Link>
            <a href="#about" style={{ color: linkColor }}>About</a>
            <a href="#network" style={{ color: linkColor }}>Network</a>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="desktop-only">
          <Link to="/catalog" className={buttonClassPrimary}>
            Browse Goods
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-only" style={{ cursor: 'pointer', color: linkColor }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: isDark ? 'var(--color-canvas-night-elevated)' : 'var(--color-canvas-light)',
          color: linkColor,
          zIndex: 40,
          padding: 'var(--spacing-huge) var(--spacing-xl)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xl)'
        }}>
          <div style={{ marginTop: 'var(--spacing-xxl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)', fontSize: 'var(--typography-heading-lg-fontSize)' }}>
            <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)}>Catalog</Link>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="#network" onClick={() => setIsMobileMenuOpen(false)}>Global Network</a>
          </div>
          <div style={{ marginTop: 'auto', marginBottom: 'var(--spacing-xl)' }}>
            <Link to="/catalog" className={buttonClassPrimary} style={{ width: '100%' }} onClick={() => setIsMobileMenuOpen(false)}>
              Browse Goods
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
