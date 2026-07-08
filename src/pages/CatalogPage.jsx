import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CatalogPage() {
  const dummyProducts = [
    {
      id: 1,
      name: "Premium Coconut Briquettes",
      category: "Energy",
      description: "High-heat, long-lasting charcoal briquettes ideal for BBQ and Shisha.",
      price: "$1.20 / kg",
      featured: true,
      image: "/briquettes_product.png"
    },
    {
      id: 2,
      name: "Indonesian Cinnamon",
      category: "Spices",
      description: "Aromatic and sweet cinnamon sticks, hand-harvested.",
      price: "$8.50 / kg",
      featured: false,
      image: "/spices_product.png"
    },
    {
      id: 3,
      name: "Robusta Coffee Beans",
      category: "Agriculture",
      description: "Strong, full-bodied coffee beans from volcanic soil.",
      price: "$4.00 / kg",
      featured: false,
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Teak Wood Furniture",
      category: "Crafts",
      description: "Handcrafted outdoor furniture made from Grade A teak wood.",
      price: "Request Quote",
      featured: false,
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-canvas-light)', minHeight: '100vh', color: 'var(--color-ink)' }}>
      <Navbar />
      
      <main style={{ padding: 'calc(var(--spacing-huge) + 80px) var(--spacing-xl) var(--spacing-huge)', maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: 'var(--spacing-huge)' }}>
          <h1 className="display-lg" style={{ marginBottom: 'var(--spacing-md)' }}>Product Catalog</h1>
          <p className="body-lg" style={{ color: 'var(--color-shade-50)', maxWidth: '600px' }}>
            Explore our diverse range of export commodities. From premium briquettes to raw agricultural goods, we supply the world.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--spacing-xxl)' }}>
          {dummyProducts.map(product => (
            <div key={product.id} className={product.featured ? 'card-pricing-featured' : 'card-pricing'} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ borderRadius: 'var(--rounded-md)', overflow: 'hidden', marginBottom: 'var(--spacing-lg)', height: '200px' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <span className="pill-tag-mint" style={{ marginBottom: 'var(--spacing-sm)' }}>{product.category}</span>
                <h3 className="heading-lg" style={{ marginTop: 'var(--spacing-sm)' }}>{product.name}</h3>
              </div>
              <p className="body-md" style={{ color: 'var(--color-shade-60)', flexGrow: 1 }}>{product.description}</p>
              <div style={{ marginTop: 'var(--spacing-xl)', borderTop: '1px solid var(--color-hairline-light)', paddingTop: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="heading-md">{product.price}</span>
                <button className={product.featured ? 'button button-primary-pill' : 'button button-outline-on-light'} style={{ padding: '8px 16px', fontSize: '14px' }}>
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer track="light" />
    </div>
  );
}
