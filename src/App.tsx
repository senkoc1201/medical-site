import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Benefits from './sections/Benefits';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="font-sans bg-gray-950 text-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>
      <div className="relative">
        <Navbar openContactModal={openContactModal} />
        <Hero openContactModal={openContactModal} />
        <Features />
        <Benefits />
        <FAQ />
        <Footer openContactModal={openContactModal} />
        <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      </div>
    </div>
  );
}

export default App;