import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    { 
      quote: "The consistency in quality and their ability to handle complex customs documentation saved us countless hours.", 
      author: "Director of Sourcing, EuroRetail", 
      country: "Germany",
      image: "/testimonial_person1.png"
    },
    { 
      quote: "Our primary supplier for raw materials. Highly reliable and transparent pricing structure even during volatile market conditions.", 
      author: "Procurement Lead, GlobalMfg", 
      country: "United States",
      image: "/testimonial_person2.png"
    }
  ];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)', backgroundColor: 'var(--color-canvas-night-elevated)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <h2 className="display-lg" style={{ marginBottom: 'var(--spacing-huge)' }}>Buyer Success.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'var(--spacing-huge)' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ borderLeft: '2px solid var(--color-link-mint)', paddingLeft: 'var(--spacing-xl)' }}>
              <p className="heading-lg" style={{ marginBottom: 'var(--spacing-xl)', fontStyle: 'italic', fontWeight: 300 }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <img src={t.image} alt={t.author} style={{ width: '60px', height: '60px', borderRadius: 'var(--rounded-pill)', objectFit: 'cover' }} />
                <div>
                  <p className="body-strong">{t.author}</p>
                  <p className="caption" style={{ color: 'var(--color-shade-40)' }}>{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
