import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '', delayMultiplier = 200 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`} style={{ transitionDelay: `${delayMultiplier}ms` }}>
      {children}
    </div>
  );
};

export default AnimatedSection;
