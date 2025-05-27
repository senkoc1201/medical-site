import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface NavbarProps {
  openContactModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <AnimatedElement animation="fadeInLeft" delay={100}>
            <div className="flex items-center">
              <span className="text-2xl font-light text-white">
                Medgical
              </span>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fadeInRight" delay={200}>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                About us
              </button>
              <button 
                onClick={() => scrollToSection('app')}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                App
              </button>
              <div className="flex items-center space-x-4">
                <select className="bg-transparent text-sm text-gray-300 hover:text-white transition-colors">
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                  <option value="es">ES</option>
                  <option value="pt">PT</option>
                </select>
                <button
                  onClick={openContactModal}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Try for free
                </button>
              </div>
            </div>
          </AnimatedElement>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm absolute w-full">
          <div className="px-4 py-5 space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              About us
            </button>
            <button
              onClick={() => scrollToSection('app')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              App
            </button>
            <select className="block w-full px-3 py-2 bg-transparent text-gray-300">
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="es">ES</option>
              <option value="pt">PT</option>
            </select>
            <button
              onClick={openContactModal}
              className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Try for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;