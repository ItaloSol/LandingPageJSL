import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhyChoose from './components/WhyChoose';
import ProductGallery from './components/ProductGallery';
import Customization from './components/Customization';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  const { trackSectionView } = useAnalytics();

  useEffect(() => {
    // Track sections as they come into view
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            trackSectionView(sectionName);
          }
        }
      });
    }, observerOptions);

    // Add data-section attributes and observe sections
    const sections = [
      { selector: 'section:first-child', name: 'hero' },
      { selector: '[data-section="benefits"]', name: 'benefits' },
      { selector: '[data-section="why-choose"]', name: 'why-choose' },
      { selector: '#products', name: 'products' },
      { selector: '[data-section="customization"]', name: 'customization' },
      { selector: '[data-section="testimonials"]', name: 'testimonials' },
      { selector: '[data-section="cta"]', name: 'cta' }
    ];

    sections.forEach(({ selector, name }) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('data-section', name);
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [trackSectionView]);

  return (
    <div className="font-inter">
      <Hero />
      <div data-section="benefits">
        <Benefits />
      </div>
      <div data-section="why-choose">
        <WhyChoose />
      </div>
      <ProductGallery />
      <div data-section="customization">
        <Customization />
      </div>
      <div data-section="testimonials">
        <Testimonials />
      </div>
      <div data-section="cta">
        <CTA />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;