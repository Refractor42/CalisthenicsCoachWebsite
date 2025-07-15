import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LeadCapture from './components/LeadCapture';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <div className="flex flex-col min-h-screen m-0 p-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <LeadCapture />
        <Transformations />
        <Testimonials />
        <Pricing />
        <Schedule />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;