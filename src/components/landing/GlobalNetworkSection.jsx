import React from 'react';

export default function GlobalNetworkSection() {
  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="display-xl" style={{ marginBottom: 'var(--spacing-md)' }}>Global Reach.</h2>
        <p className="body-lg" style={{ color: 'var(--color-shade-40)', maxWidth: '600px', margin: '0 auto var(--spacing-huge)' }}>
          Connecting Southeast Asia's finest resources with markets in Europe, the Americas, and the Middle East.
        </p>
        
        {/* Photorealistic Stylized Map */}
        <div style={{ 
          position: 'relative', 
          height: '500px', 
          backgroundColor: 'var(--color-canvas-night-elevated)', 
          borderRadius: 'var(--rounded-xl)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--color-hairline-dark)'
        }}>
          <img src="/global_map_dark.png" alt="Global Shipping Routes" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
        </div>
      </div>
    </section>
  );
}
