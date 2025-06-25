import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhyChoose from './components/WhyChoose';
import ProductGallery from './components/ProductGallery';
import Customization from './components/Customization';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="font-inter">
      <Hero />
      <Benefits />
      <WhyChoose />
      <ProductGallery />
      <Customization />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;