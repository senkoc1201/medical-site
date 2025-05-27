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
    <div className="font-sans bg-black text-white">
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