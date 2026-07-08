import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isDark = location.pathname === '/'; // Dark track for landing page

  const navClass = isDark ? 'nav-bar-dark' : 'nav-bar-light';
  const linkColor = isDark ? 'var(--color-on-primary)' : 'var(--color-ink)';
  const buttonClassPrimary = isDark ? 'button button-outline-on-dark' : 'button button-primary-pill';
  
  return (
    <nav className={navClass}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link to="/" style={{ fontWeight: 600, fontSize: '20px', color: linkColor }}>
          Global Export.
        </Link>
        <div style={{ display: 'flex', gap: '24px' }} className="body-md">
          <Link to="/catalog">Catalog</Link>
          <a href="#about">About</a>
          <a href="#network">Network</a>
        </div>
      </div>
      <div>
        <Link to="/catalog" className={buttonClassPrimary}>
          Browse Goods
        </Link>
      </div>
    </nav>
  );
}
