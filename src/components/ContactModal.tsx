import React, { useEffect } from 'react';
import { X, Mail, FileText } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  // Prevent body scrolling when modal is open
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fadeIn">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Get in touch with our team through any of the following options:
          </p>

          <div className="space-y-4">
            <a 
              href="mailto:contact@augenai.com" 
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all"
            >
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email Us</h3>
                <p className="text-sm text-gray-600">contact@augenai.com</p>
              </div>
            </a>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7xKTch0eDSSt58g6wbVe4gGM4xK0K5UOIaRRB-oM1Vxj1xQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all"
            >
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Contact Form</h3>
                <p className="text-sm text-gray-600">Fill out our Google Form</p>
              </div>
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;