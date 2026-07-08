import React from 'react';

export default function InsightsSection() {
  const articles = [
    { date: "AUG 15, 2026", title: "Navigating Q3 Freight Rate Fluctuations", image: "/insight_freight.png" },
    { date: "JUL 22, 2026", title: "New Sustainability Standards for Agricultural Exports", image: "/process_logistics.png" },
    { date: "JUN 05, 2026", title: "How Direct Sourcing Impacts Profit Margins", image: "/industry_manufacturing.png" }
  ];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <h2 className="display-lg" style={{ marginBottom: 'var(--spacing-huge)' }}>Market Insights.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-xl)' }}>
          {articles.map((art, idx) => (
            <div key={idx} style={{ paddingBottom: 'var(--spacing-xl)' }}>
              <div style={{ width: '100%', height: '200px', borderRadius: 'var(--rounded-lg)', overflow: 'hidden', marginBottom: 'var(--spacing-lg)' }}>
                <img src={art.image} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="eyebrow-cap" style={{ color: 'var(--color-shade-50)', marginBottom: 'var(--spacing-sm)' }}>{art.date}</div>
              <h3 className="heading-md" style={{ marginBottom: 'var(--spacing-lg)' }}>{art.title}</h3>
              <a href="#" className="body-strong" style={{ color: 'var(--color-link-mint)' }}>Read Article &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
