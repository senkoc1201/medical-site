import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How does our AI platform work?',
      answer: 'Our AI platform generates clinical reports and consultation notes from the audio of medical interviews, doctor dictation, or bullet points of a consultation or report.'
    },
    {
      question: 'How can I try the platform?',
      answer: 'You can try our platform for 15 days for free. Fill the contact form on our website or send us an e-mail to request a trial.'
    },
    {
      question: 'Is the platform secure?',
      answer: 'Our platform is built to be secure. We use encryption to protect your data, and we follow all the latest GDPR and HIPAA regulations.'
    },
    {
      question: 'How can I integrate the platform with my clinical management software?',
      answer: 'Our platform is a standalone solution that can be integrated with any clinical or hospital management software through the browser. You can copy or download your notes and reports at any time and insert them into another software.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedElement animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">
            Find answers to common questions about our platform, technology, and services.
          </p>
        </AnimatedElement>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AnimatedElement 
              key={index} 
              animation="fadeInUp" 
              delay={index * 100}
              className="mb-4"
            >
              <div className="border border-gray-800 hover:border-blue-500/50 rounded-lg overflow-hidden transition-colors">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full p-5 text-left bg-gray-900/50"
                >
                  <h3 className="font-light text-lg">{item.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-blue-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 text-gray-400 border-t border-gray-800">
                    {item.answer}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;