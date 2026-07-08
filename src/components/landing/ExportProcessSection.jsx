import React from 'react';

export default function ExportProcessSection() {
  const steps = [
    { num: '01', title: 'Inquiry & Requirements', desc: 'Detailed consultation to understand volume, specifications, and target destination.' },
    { num: '02', title: 'Quotation & Sampling', desc: 'Transparent pricing and physical sample delivery for quality verification.' },
    { num: '03', title: 'Production & Sourcing', desc: 'Execution of bulk order with strict adherence to agreed specifications.' },
    { num: '04', title: 'Quality Inspection', desc: 'Independent 3rd-party QA checks before goods are released for packing.' },
    { num: '05', title: 'Logistics & Shipping', desc: 'Container loading, customs clearance, and securing ocean freight.' },
    { num: '06', title: 'Final Delivery', desc: 'Tracking and handover at the destination port with complete documentation.' }
  ];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'var(--spacing-huge)', alignItems: 'center' }}>
        <div>
          <h2 className="display-xl" style={{ marginBottom: 'var(--spacing-huge)' }}>The Export Lifecycle.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 'var(--spacing-xl)' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ paddingBottom: 'var(--spacing-xl)', borderBottom: '1px solid var(--color-hairline-dark)' }}>
                <div className="eyebrow-cap" style={{ color: 'var(--color-link-mint)', marginBottom: 'var(--spacing-md)' }}>Phase {step.num}</div>
                <h3 className="heading-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>{step.title}</h3>
                <p className="body-md" style={{ color: 'var(--color-shade-40)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', height: '100%', minHeight: '600px', borderRadius: 'var(--rounded-xl)', overflow: 'hidden' }}>
          <img src="/process_logistics.png" alt="Logistics Process" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
