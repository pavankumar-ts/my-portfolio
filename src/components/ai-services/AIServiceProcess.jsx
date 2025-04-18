// src/components/ai-services/AIServiceProcess.jsx
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { aiProcessSteps } from '@/data/ai';
import { ChevronRight } from 'lucide-react';

const AIServiceProcess = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeStep, setActiveStep] = useState(null);

  return (
    <div ref={ref} className="container py-16">
      <h2 className="heading-xl text-center mb-20">MY APPROACH</h2>

      {/* Process Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/10 -translate-x-1/2 hidden md:block"></div>

        {/* Process Steps */}
        {aiProcessSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          const isActive = activeStep === step.id;
          
          return (
            <div 
              key={step.id}
              className={`${
                inView ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-1000`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Mobile layout (stacked) */}
              <div className="md:hidden mb-12">
                <div 
                  className={`border border-primary/10  overflow-hidden transition-all duration-300 ${
                    isActive ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                >
                  <div className="bg-primary/5 p-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-96 p-4' : 'max-h-0'
                  }`}>
                    <p className="text-primary/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop layout (alternating) */}
              <div 
                className={`hidden md:grid md:grid-cols-11 items-center mb-16 ${
                  inView ? isEven ? 'animate-slide-right' : 'animate-slide-left' : ''
                }`}
              >
                {/* Left side (even steps) */}
                {isEven && (
                  <>
                    <div className="col-span-5 pr-8 text-right">
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-primary/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="col-span-1 flex justify-center">
                      <div className="relative">
                        <div className="absolute w-8 h-1 bg-primary/10 right-full top-1/2"></div>
                        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center relative z-10 border-4 border-bgColor">
                          <Image src={step.icon} alt={step.title} width={32} height={32} />
                        </div>
                        <div className="absolute w-8 h-1 bg-primary/10 left-full top-1/2"></div>
                      </div>
                    </div>
                    
                    <div className="col-span-5 pl-8">
                      <div className="border border-primary/10  p-4 bg-primary/5 text-5xl font-bold text-primary/20 flex justify-center">
                        {step.id}
                      </div>
                    </div>
                  </>
                )}

                {/* Right side (odd steps) */}
                {!isEven && (
                  <>
                    <div className="col-span-5 pr-8">
                      <div className="border border-primary/10  p-4 bg-primary/5 text-5xl font-bold text-primary/20 flex justify-center">
                        {step.id}
                      </div>
                    </div>
                    
                    <div className="col-span-1 flex justify-center">
                      <div className="relative">
                        <div className="absolute w-8 h-1 bg-primary/10 right-full top-1/2"></div>
                        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center relative z-10 border-4 border-bgColor">
                          <Image src={step.icon} alt={step.title} width={32} height={32} />
                        </div>
                        <div className="absolute w-8 h-1 bg-primary/10 left-full top-1/2"></div>
                      </div>
                    </div>
                    
                    <div className="col-span-5 pl-8">
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-primary/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIServiceProcess;