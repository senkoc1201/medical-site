import React from 'react';
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
    <section id="benefits" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedElement animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Proven Results</h2>
          <p className="text-xl text-gray-400">
            Our platform delivers measurable improvements in efficiency and satisfaction.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedElement 
              key={index} 
              animation="fadeInUp" 
              delay={index * 100}
              className="bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 text-center transition-colors"
            >
              <div className="text-3xl font-light mb-2">
                {stat.prefix && <span className="text-blue-400">{stat.prefix}</span>}
                <span className="text-white">{stat.value}</span>
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="fadeInUp" delay={500} className="mt-8 text-center text-sm text-gray-500">
          *80% of satisfaction survey responses indicate that doctors spend less than 1 minute documenting the consultation with our software
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Benefits;