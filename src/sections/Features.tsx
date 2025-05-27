import React from 'react';
import AnimatedElement from '../components/AnimatedElement';

const Features = () => {
  const features = [
    {
      title: 'Automated consultation notes',
      description: 'Our AI or voice recognition system generates clinical records tailored to your specialty, hospital, or clinic.',
      items: ['General and Family Medicine Notes', 'Radiology Consultation', 'ICD-9 codes automatically generated', 'Hospital consultation'],
      cta: 'Contact us for information',
      theme: 'dark'
    },
    {
      title: 'Easy to use',
      description: 'Use easily with any clinical or hospital management software',
      actions: ['Copy', 'Download'],
      theme: 'dark'
    },
    {
      title: 'Standardized reports',
      description: 'Transform unstructured notes or bullet points into structured and readable reports. Reduce communication errors between colleagues and medical errors.',
      example: {
        title: 'Conscious and orient at physical exam',
        subtitle: 'Cardiac auscultation: no murmur or extra spin'
      },
      theme: 'dark'
    },
    {
      title: 'Wide library of templates',
      description: 'More than 15 templates available and growing weekly. High quality notes, referral letters, clinical reports, etc.',
      templates: ['High quality notes', 'Referral letters', 'Clinical reports'],
      cta: 'Contact us for information',
      theme: 'dark'
    },
    {
      title: 'Security and compliance',
      description: 'Data encryption ensures data privacy, GDPR and HIPAA compliance',
      icon: 'lock',
      theme: 'dark'
    },
    {
      title: 'Privacy and anonymization',
      description: 'Patient information is automatically anonymized through our AI before processing by AI',
      example: {
        chat: [
          { text: 'Dear Mr. [alias], Could you please give me your mobile number to send the digital prescription?' },
          { time: '10:15, Feb 23' }
        ]
      },
      theme: 'dark'
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedElement
              key={index}
              animation="fadeInUp"
              delay={index * 100}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl p-6 h-full hover:bg-gray-800/80 transition-colors">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>

                {feature.items && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {feature.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {feature.actions && (
                  <div className="flex gap-4 mb-6">
                    {feature.actions.map((action, i) => (
                      <button
                        key={i}
                        className="bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 text-sm transition-colors"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}

                {feature.example?.title && (
                  <div className="bg-blue-500/10 rounded-lg p-4 mb-6">
                    <div className="text-blue-400 font-medium">{feature.example.title}</div>
                    {feature.example.subtitle && (
                      <div className="text-gray-400 text-sm mt-2">{feature.example.subtitle}</div>
                    )}
                  </div>
                )}

                {feature.templates && (
                  <div className="flex gap-4 flex-wrap mb-6">
                    {feature.templates.map((template, i) => (
                      <div
                        key={i}
                        className="bg-gray-800 rounded-lg px-4 py-2 text-sm"
                      >
                        {template}
                      </div>
                    ))}
                  </div>
                )}

                {feature.cta && (
                  <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                    {feature.cta}
                  </button>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;