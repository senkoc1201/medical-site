import React from 'react';
import { BarChart3, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit size={24} className="text-blue-400" />,
      title: 'Advanced AI Analysis',
      description: 'Our AI algorithms process and analyze complex data to provide actionable insights for your business.'
    },
    {
      icon: <BarChart3 size={24} className="text-blue-400" />,
      title: 'Detailed Analytics',
      description: 'Get comprehensive analytics and visualization tools to understand your data and make informed decisions.'
    },
    {
      icon: <ShieldCheck size={24} className="text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Industry-leading security protocols and compliance measures keep your sensitive data protected.'
    },
    {
      icon: <Zap size={24} className="text-blue-400" />,
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time to stay ahead of market trends and make timely decisions.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedElement animation="fadeInUp" className="mb-16">
          <SectionHeading 
            title="Powerful Features" 
            subtitle="Our platform offers cutting-edge capabilities designed to transform your business operations and drive growth."
            centered={true}
          />
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <AnimatedElement 
              key={index} 
              animation="fadeInUp" 
              delay={index * 100}
              className="bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors p-6 sm:p-8"
            >
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-100">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fadeInUp" delay={300} className="mt-16">
          <div className="bg-gradient-to-r from-blue-950/50 to-indigo-950/50 rounded-2xl p-6 border border-gray-800">
            <img 
              src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Platform Dashboard" 
              className="w-full h-auto rounded-xl opacity-80"
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Features