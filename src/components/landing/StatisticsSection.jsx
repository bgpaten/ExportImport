import React from 'react';

export default function StatisticsSection() {
  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '2M+', label: 'Tons Exported' },
    { value: '120', label: 'B2B Partners' },
    { value: '99%', label: 'On-Time Delivery' }
  ];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-huge)' }}>
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="display-xl" style={{ color: 'var(--color-on-primary)', marginBottom: 'var(--spacing-xs)' }}>{stat.value}</div>
            <div className="body-strong" style={{ color: 'var(--color-link-mint)' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
