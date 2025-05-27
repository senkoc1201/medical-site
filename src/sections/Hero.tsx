import React from 'react';
import AnimatedCheckbox from '../components/AnimatedCheckbox';
import AnimatedElement from '../components/AnimatedElement';

interface HeroProps {
  openContactModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openContactModal }) => {
  const checkpoints = [
    'AI-Powered Solutions',
    'Advanced Data Analytics',
    'Real-time Insights',
    'Enterprise Security'
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <AnimatedElement animation="fadeInUp" delay={0} className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
                Intelligent solutions for modern businesses
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInUp" delay={200} className="mb-8">
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Transform your business with cutting-edge AI technology. Our platform delivers powerful insights and automation to drive your success.
              </p>
            </AnimatedElement>
            
            {/* Animated Checkboxes */}
            <div className="space-y-4 mb-8">
              {checkpoints.map((text, index) => (
                <AnimatedCheckbox 
                  key={index} 
                  text={text} 
                  delay={1000 + index * 500} 
                />
              ))}
            </div>
            
            <AnimatedElement animation="fadeInUp" delay={500} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={openContactModal}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-base"
              >
                Get Started
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
              >
                Learn More
              </button>
            </AnimatedElement>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fadeInRight" delay={300}>
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-100 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full opacity-70 animate-pulse delay-1000"></div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-4 sm:p-8 shadow-xl relative z-10">
                  <img 
                    src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="AI and Human Interaction" 
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;