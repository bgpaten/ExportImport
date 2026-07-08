import React, { useState } from 'react';

export default function FAQSection() {
  const faqs = [
    { q: "What is your Minimum Order Quantity (MOQ)?", a: "MOQ varies by commodity, typically starting at 1x20ft container for most agricultural goods and briquettes." },
    { q: "What payment terms do you accept?", a: "We accept T/T (Telegraphic Transfer) and irrevocable L/C at sight from major international banks." },
    { q: "Do you handle export documentation?", a: "Yes, we provide full sets of documents including Bill of Lading, Certificate of Origin, Phytosanitary Certificates, and Commercial Invoices." },
    { q: "What is the typical lead time?", a: "Standard lead time from order confirmation to FOB is 14-21 days, depending on order volume and specific packaging requirements." }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)', backgroundColor: 'var(--color-canvas-night-elevated)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="display-lg" style={{ marginBottom: 'var(--spacing-huge)' }}>Frequent Questions.</h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid var(--color-hairline-dark)', padding: 'var(--spacing-lg) 0' }}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                style={{ 
                  width: '100%', display: 'flex', justifyContent: 'space-between', 
                  alignItems: 'center', background: 'none', border: 'none', 
                  color: 'var(--color-on-primary)', cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'inherit', padding: 0
                }}
              >
                <h3 className="heading-md">{faq.q}</h3>
                <span className="heading-xl">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <p className="body-md" style={{ color: 'var(--color-shade-40)', marginTop: 'var(--spacing-md)' }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
