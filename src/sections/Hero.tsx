import React from 'react';
import AnimatedElement from '../components/AnimatedElement';

interface HeroProps {
  openContactModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openContactModal }) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fadeInUp\" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-6">
                Transform your medical practice with AI
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Our AI-powered platform streamlines your workflow, reduces documentation time, and improves patient care quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openContactModal}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Try for free
                </button>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 border border-gray-700 hover:border-gray-600 text-white rounded-lg font-medium transition-colors"
                >
                  Learn More
                </button>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fadeInRight" delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 sm:p-8">
                  <img 
                    src="https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg"
                    alt="Doctor consulting with patient" 
                    className="rounded-2xl w-full"
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