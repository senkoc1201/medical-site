import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
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
    },
    {
      question: 'How long does it take to integrate the platform in my practice?',
      answer: 'Implementation is fast and efficient. After filling the contact form, our team will contact you for a brief configuration process that usually takes only a few hours.'
    },
    {
      question: 'Can the platform be customized to meet specific needs?',
      answer: 'Definitely! We understand that every practice is unique. We offer customization services to ensure that our solution fits perfectly to your specific needs, whether by adjusting existing templates or creating new ones.'
    },
    {
      question: 'What kind of technical support do you offer?',
      answer: 'We offer comprehensive technical support via phone, email, and live chat. Our team is available to help resolve any technical or operational issues you may have, ensuring that our platform runs smoothly in your practice.'
    },
    {
      question: 'Is the platform compatible with mobile devices?',
      answer: 'Yes, our platform is a web-based solution that is compatible with all mobile devices, allowing doctors to access and use the platform anywhere, anytime, without the need to install any additional software.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedElement animation="fadeInUp" className="mb-12">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our platform, technology, and services."
            centered={true}
          />
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
                  className="flex justify-between items-center w-full p-5 text-left bg-gray-900 hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="font-medium text-lg text-gray-100">{item.question}</h3>
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
                  <div className="p-5 pt-0 text-gray-400 border-t border-gray-800">
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