// components/services/ServiceHero.jsx
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

const ServiceHero = () => {
  return (
    <div className="container pt-32">
      {/* Main Title */}
      <div className="text-left mb-16">
        <AnimatedSection className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none">
          WHAT'S
        </AnimatedSection>
        <AnimatedSection className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] ml-[20%] font-bold tracking-tight leading-none" delayMultiplier={400}>
          AVAILABLE?
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServiceHero;