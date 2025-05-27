import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';

const Benefits = () => {
  const stats = [
    {
      value: '2h',
      prefix: '↓',
      label: 'of daily bureaucratic work'
    },
    {
      value: '9.7/10',
      label: 'patient and doctor satisfaction rating'
    },
    {
      value: '9.4/10',
      label: 'quality rating of generated documents'
    },
    {
      value: '< 1min',
      label: 'time spent verifying the generated documents*'
    },
    {
      value: '>100',
      label: 'tester doctors tried our platform during the experimental phase'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Stats Grid */}
          <div className="w-full">
            <AnimatedElement animation="fadeInUp" className="mb-8">
              <SectionHeading 
                title="Proven Results" 
                subtitle="Our platform delivers measurable improvements in efficiency and satisfaction."
                centered={true}
              />
            </AnimatedElement>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="fadeInUp" 
                  delay={index * 100}
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 text-center transition-colors"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.prefix && <span className="text-blue-500">{stat.prefix}</span>}
                    {stat.value}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement animation="fadeInUp" delay={500} className="mt-8 text-center text-sm text-gray-500">
              *80% of satisfaction survey responses indicate that doctors spend less than 1 minute documenting the consultation with our software
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;