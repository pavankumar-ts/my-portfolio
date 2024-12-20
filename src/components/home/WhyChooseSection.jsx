import React from 'react';
import { useInView } from 'react-intersection-observer';

const WhyChooseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      id: '01',
      title: 'Modern Development Practices',
      description: 'I leverage cutting-edge technologies and frameworks like React, Next.js, and TypeScript to build scalable, maintainable applications. My commitment to clean code and best practices ensures your project is built for the future.'
    },
    {
      id: '02',
      title: 'Full Stack Expertise',
      description: 'With proficiency in both frontend development and backend integration using Firebase and Supabase, I deliver complete solutions. My experience with various tech stacks allows me to choose the best tools for your specific needs.'
    },
    {
      id: '03',
      title: 'Performance Optimization',
      description: 'I prioritize creating fast, responsive applications that provide excellent user experiences. From code splitting to image optimization and SEO best practices, every project is optimized for peak performance.'
    },
    {
      id: '04',
      title: 'Collaborative Approach',
      description: 'I believe in transparent communication and collaborative development. Regular updates, clear documentation, and responsive feedback ensure your project evolves exactly as envisioned while meeting all technical requirements.'
    }
  ];

  return (
    <div ref={ref} className="container flex flex-col md:flex-row">
      <div className="md:w-[50%] pb-12 md:pb-0">
        <div className="sticky top-32">
          <h1 className="heading-xl whitespace-pre-line">
            WHY{'\n'}CHOOSE{'\n'}ME?
          </h1>
        </div>
      </div>

      <div className="md:w-[50%] space-y-12">
        {reasons.map((reason, index) => (
          <div
            key={reason.id}
            className={`border-b border-primary/10 pb-12 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-primary/60">[{reason.id}]</span>
                <div className="flex-1 ml-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    {reason.title}
                  </h2>
                  <p className="text-primary/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;