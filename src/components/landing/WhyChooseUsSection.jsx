import React from 'react';

export default function WhyChooseUsSection() {
  const points = [
    { title: "Direct Origin Sourcing", desc: "We eliminate middlemen, securing commodities directly from plantations, mines, and factories to ensure authenticity and margin control." },
    { title: "Stringent QA/QC", desc: "Every shipment undergoes rigorous multi-point inspection before it reaches the port, backed by international SGS certifications." },
    { title: "End-to-End Logistics", desc: "From inland transport to sea freight and final customs clearance, we handle the entire supply chain complexity." }
  ];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)', borderTop: '1px solid var(--color-hairline-dark)', borderBottom: '1px solid var(--color-hairline-dark)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-huge)', alignItems: 'center' }}>
        <div>
          <h2 className="display-lg" style={{ marginBottom: 'var(--spacing-huge)' }}>
            Why enterprise buyers trust our infrastructure.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-xxl)' }}>
            {points.map((p, idx) => (
              <div key={idx}>
                <h3 className="heading-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>{p.title}</h3>
                <p className="body-md" style={{ color: 'var(--color-shade-40)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', height: '100%', minHeight: '500px', borderRadius: 'var(--rounded-xl)', overflow: 'hidden' }}>
          <img src="/qa_inspection.png" alt="QA Inspection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
