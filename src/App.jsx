import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main Application Root
 * Orchestrates the luxury one-page layout for Noyan Plumbing.
 */
export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="app-root">
      {/* Sticky Top Bar Contract */}
      <Navbar />

      <main id="main-content">
        {/* Full-Height Hero */}
        <Hero />

        {/* Elevated Services Grid */}
        <Services onSelectService={handleSelectService} />

        {/* Craft & Origin Story */}
        <About />

        {/* Factual Trust Indicators */}
        <WhyChooseUs />

        {/* Testimonials (Cleanly rendered only if testimonials exist in config) */}
        <Testimonials />

        {/* Genuine Homeowner FAQs */}
        <Faq />

        {/* Direct Contact & Quote Form */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
