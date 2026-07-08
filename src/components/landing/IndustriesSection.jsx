import React from 'react';

export default function IndustriesSection() {
  const industries = [
    { name: "Manufacturing", desc: "Raw materials and components for heavy industry.", image: "/industry_manufacturing.png" },
    { name: "Retail & Supermarkets", desc: "FMCG and packaged consumer goods.", image: "/industry_retail.png" },
    { name: "Food & Beverage", desc: "Agricultural produce, spices, and processing materials.", image: "/industry_food.png" },
    { name: "Construction", desc: "Building materials and structural components.", image: "/industry_construction.png" },
    { name: "Hospitality", desc: "Premium supplies for hotels and resorts.", image: "/industry_hospitality.png" },
    { name: "Energy", desc: "Briquettes, coal, and renewable biomass.", image: "/industry_energy.png" }
  ];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)', backgroundColor: 'var(--color-canvas-night-elevated)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-huge)', flexWrap: 'wrap', gap: 'var(--spacing-lg)' }}>
          <h2 className="display-lg">Industries We Serve.</h2>
          <a href="#" className="button button-outline-on-dark" style={{ borderRadius: 'var(--rounded-pill)' }}>View All Sectors</a>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
          {industries.map((ind, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--color-canvas-night)', 
              borderRadius: 'var(--rounded-lg)', 
              padding: 'var(--spacing-xl)', 
              border: '1px solid var(--color-hairline-dark)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '350px'
            }}>
              {/* Background Image with Overlay */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img src={ind.image} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-canvas-night) 0%, rgba(0,0,0,0) 100%)' }}></div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 className="heading-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>{ind.name}</h3>
                <p className="body-md" style={{ color: 'var(--color-shade-40)' }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
