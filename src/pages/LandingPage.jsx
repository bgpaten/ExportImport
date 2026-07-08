import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sections
import HeroSection from '../components/landing/HeroSection';
import TrustedBySection from '../components/landing/TrustedBySection';
import FeaturedProductsSection from '../components/landing/FeaturedProductsSection';
import WhyChooseUsSection from '../components/landing/WhyChooseUsSection';
import ExportProcessSection from '../components/landing/ExportProcessSection';
import IndustriesSection from '../components/landing/IndustriesSection';
import GlobalNetworkSection from '../components/landing/GlobalNetworkSection';
import CertificationsSection from '../components/landing/CertificationsSection';
import StatisticsSection from '../components/landing/StatisticsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import InsightsSection from '../components/landing/InsightsSection';
import FAQSection from '../components/landing/FAQSection';
import FinalCTASection from '../components/landing/FinalCTASection';

export default function LandingPage() {
  // Ensure we start at the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--color-canvas-night)', color: 'var(--color-on-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      
      <HeroSection />
      <TrustedBySection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <ExportProcessSection />
      <IndustriesSection />
      <GlobalNetworkSection />
      <CertificationsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <InsightsSection />
      <FAQSection />
      <FinalCTASection />

      <Footer track="dark" />
    </div>
  );
}
