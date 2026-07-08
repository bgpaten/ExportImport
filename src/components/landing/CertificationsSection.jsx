import React from 'react';

export default function CertificationsSection() {
  const certs = ["ISO 9001:2015", "HACCP Certified", "FSC Wood Compliance", "FSSC 22000", "Export License Registered"];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)', borderTop: '1px solid var(--color-hairline-dark)', borderBottom: '1px solid var(--color-hairline-dark)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-huge)', alignItems: 'center' }}>
        <div>
          <h3 className="display-lg" style={{ marginBottom: 'var(--spacing-xl)' }}>Uncompromised<br/>Compliance.</h3>
          <p className="body-lg" style={{ color: 'var(--color-shade-40)', marginBottom: 'var(--spacing-xxl)' }}>Every shipment is backed by internationally recognized quality and safety standards.</p>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
            {certs.map((c, i) => (
              <span key={i} style={{ 
                padding: '8px 16px', 
                border: '1px solid var(--color-shade-60)', 
                borderRadius: 'var(--rounded-pill)',
                fontFamily: 'var(--font-family-body)',
                fontSize: 'var(--typography-caption-fontSize)'
              }}>{c}</span>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--rounded-lg)', overflow: 'hidden' }}>
          <img src="/certificate_doc.png" alt="ISO Certification" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)' }}></div>
        </div>
      </div>
    </section>
  );
}
