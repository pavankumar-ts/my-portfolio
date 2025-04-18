// src/components/ai-services/AIUseCasesSection.jsx
import React, { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { industryUseCases } from '@/data/ai';
import { ArrowRight } from 'lucide-react';

const AIUseCasesSection = () => {
  const [activeTab, setActiveTab] = useState('01');

  return (
    <div className="container">
      <div className="flex flex-col items-center mb-16">
        <h2 className="heading-xl text-center mb-8">INDUSTRY USE CASES</h2>
        <p className="text-primary/60 text-lg text-center max-w-2xl">
          AI solutions tailored to specific industries for maximum impact and ROI
        </p>
      </div>

      {/* Industry Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {industryUseCases.map((industry) => (
          <button
            key={industry.id}
            onClick={() => setActiveTab(industry.id)}
            className={`px-6 py-3 text-lg font-medium  transition-all duration-300 ${
              activeTab === industry.id
                ? 'bg-primary text-bgColor shadow-lg scale-105'
                : 'bg-primary/5 text-primary/70 hover:bg-primary/10'
            }`}
          >
            {industry.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto relative">
        {/* Industry Content */}
        {industryUseCases.map((industry) => (
          <div
            key={industry.id}
            className={`transition-all duration-500 ${
              activeTab === industry.id ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="relative overflow-hidden  bg-primary/5 shadow-lg">
              {/* Industry Label */}
              <div className="absolute -right-10 top-10 rotate-45 bg-primary text-bgColor px-12 py-1 text-sm font-medium">
                {industry.id}
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6">{industry.title}</h3>
                <p className="text-primary/80 text-lg leading-relaxed mb-8 md:w-4/5">
                  {industry.description}
                </p>

                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <span className=" w-8 h-8 bg-primary text-bgColor rounded-full flex items-center justify-center mr-3">
                    <ArrowRight size={16} />
                  </span>
                  Example Applications
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.examples.map((example, index) => (
                    <div 
                      key={example} 
                      className="bg-bgColor  p-5 shadow-sm border border-primary/10 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full w-7 h-7 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-primary/80">{example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIUseCasesSection;