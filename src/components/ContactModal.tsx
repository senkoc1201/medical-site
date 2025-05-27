import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    newsletter: false
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in-up">
        <div className="p-6">
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <AnimatedElement animation="fadeInDown" delay={100} className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Try our platform</h2>
            <p className="text-gray-600">
              Be one of the first to try our platform for free and receive a 50% lifetime discount.
            </p>
            <p className="text-gray-600">
              Leave your contact for our sales team to assist you.
            </p>
          </AnimatedElement>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatedElement animation="fadeInLeft" delay={200}>
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </AnimatedElement>

            <AnimatedElement animation="fadeInRight" delay={300}>
              <input
                type="email"
                placeholder="Email address*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </AnimatedElement>

            <AnimatedElement animation="fadeInLeft" delay={400}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-gray-500">🇬🇧</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeInRight" delay={500}>
              <input
                type="text"
                placeholder="Organization name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})}
              />
            </AnimatedElement>

            <AnimatedElement animation="fadeInUp" delay={600}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <label htmlFor="newsletter" className="ml-2 text-gray-600">
                  Subscribe to Medical newsletter.
                </label>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeInUp" delay={700}>
              <button
                type="submit"
                className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
              >
                Send data
              </button>

              <p className="text-xs text-gray-500 mt-4">
                *Required fields. By continuing you are accepting our{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </AnimatedElement>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;