import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

const NumbersSection = () => {
  const statistics = [
    {
      number: '35+',
      label: 'Projects Completed',
      description: 'Successfully delivered web applications across various industries'
    },
    {
      number: '2+',
      label: 'Years of Experience',
      description: 'Professional experience in frontend development and team leadership'
    },
    {
      number: '10+',
      label: 'Technologies Mastered',
      description: 'Expertise in React, Next.js, No-code platforms, and modern development tools'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Perfect track record of meeting client expectations and deadlines'
    },
    {
      number: '5+',
      label: 'Industries Served',
      description: 'Experience across e-commerce, healthcare, education, and more'
    },
    {
      number: '25+',
      label: 'Team Projects Led',
      description: 'Successfully managed and delivered complex team projects'
    }
  ];

  return (
    <div className="container flex flex-col md:flex-row">
      <div className="md:w-[50%] pb-12 md:pb-0">
        <div className="sticky top-32">
          <h2 className="heading-xl whitespace-pre-line">
            SOME <br className='md:block hidden' />NUMBERS
          </h2>
        </div>
      </div>

      <div className="md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-16">
        {statistics.map((stat, index) => (
          <AnimatedSection key={index} delayMultiplier={index * 0}>
            <div className="border-b border-primary/10 pb-8 md:pb-16">
              <div className="flex flex-col gap-2">
                <span className="text-6xl font-bold">
                  {stat.number}
                </span>
                <h2 className="text-xl font-semibold">
                  {stat.label}
                </h2>
                <p className="text-primary/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default NumbersSection;