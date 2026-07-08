import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedProductsSection() {
  const products = [
    {
      id: 1,
      name: "Premium Coconut Briquettes",
      origin: "Indonesia",
      moq: "1x20ft Container",
      image: "/briquettes_product.png"
    },
    {
      id: 2,
      name: "Indonesian Spices",
      origin: "Indonesia",
      moq: "500kg",
      image: "/spices_product.png"
    }
  ];

  return (
    <section style={{ padding: 'var(--spacing-huge) var(--spacing-xxl)', maxWidth: '1440px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-huge)', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
        <div>
          <h2 className="display-xl" style={{ marginBottom: 'var(--spacing-md)' }}>Featured Commodities.</h2>
          <p className="body-lg" style={{ color: 'var(--color-shade-40)', maxWidth: '500px' }}>
            We source directly from origin to ensure uncompromised quality and highly competitive bulk pricing.
          </p>
        </div>
        <Link to="/catalog" className="button button-outline-on-dark">
          View Full Catalog
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-xxl)' }}>
        {products.map(product => (
          <div key={product.id} className="card-feature-cinematic" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <div style={{ borderRadius: 'var(--rounded-md)', overflow: 'hidden', height: '300px' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 className="heading-xl" style={{ marginBottom: 'var(--spacing-xs)' }}>{product.name}</h3>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', color: 'var(--color-shade-40)', borderTop: '1px solid var(--color-hairline-dark)', paddingTop: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)' }}>
                <span className="caption">Origin: <strong style={{ color: 'var(--color-on-primary)' }}>{product.origin}</strong></span>
                <span className="caption">MOQ: <strong style={{ color: 'var(--color-on-primary)' }}>{product.moq}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
