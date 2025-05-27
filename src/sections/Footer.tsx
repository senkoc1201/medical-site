import React from 'react';
import { Star, Sparkles, Brain, Shield } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

interface FooterProps {
  openContactModal: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  
  const pages = [
    'A¹ Sense',
    'B¹ Eye',
    'A¹ Neuro',
    'Programs',
    'Science'
  ];

  const social = [
    { name: 'LinkedIn', url: '#' },
    { name: 'X', url: '#' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Use', url: '#' },
    { name: 'Cookie Policy', url: '#' }
  ];

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Logo and Pages */}
          <div className="lg:col-span-3">
            <AnimatedElement animation="fadeInLeft" delay={100}>
              <h2 className="text-2xl font-light mb-12">augen</h2>
            </AnimatedElement>
          </div>

          {/* Pages */}
          <div className="lg:col-span-3">
            <AnimatedElement animation="fadeInUp" delay={200}>
              <div className="text-sm text-gray-400 mb-4">1.0 Pages</div>
              <ul className="space-y-3">
                {pages.map((page, index) => (
                  <li key={index}>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <AnimatedElement animation="fadeInUp" delay={300}>
              <div className="text-sm text-gray-400 mb-4">2.0 Follow</div>
              <ul className="space-y-3">
                {social.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="text-white hover:text-gray-300 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </div>

          {/* Star Icon */}
          <div className="lg:col-span-3 flex items-end">
            <AnimatedElement animation="fadeInRight" delay={400}>
              <Star className="w-8 h-8 text-white opacity-20" />
            </AnimatedElement>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            {legal.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;