// components/about/ExperienceSection.jsx
import { experience } from '@/data/experience';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '@/components/common/AnimatedSection';

const ExperienceSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const professionalExperience = experience.find((exp) => exp.type === 'Professional Experience');

    return (
        <div ref={ref} className="container flex flex-col md:flex-row">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h2 className="heading-xl whitespace-pre-line">
                        WORKING <br className='md:block hidden' />EXPERIENCE
                    </h2>
                </div>
            </div>

            <div className="md:w-[50%] space-y-8 md:space-y-16">
                {professionalExperience.items.map((item, index) => (
                    <AnimatedSection key={index} delayMultiplier={index * 200}>
                        <div className="border-b border-primary/10 pb-8 md:pb-16">
                            <div className="flex justify-between items-start mb-8">
                                <h2 className="text-2xl font-semibold">
                                    {item.title}
                                </h2>
                                <span className="text-primary/60 text-right">
                                    {item.period}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{item.institution}</span>
                                    <span className="text-primary/60">•</span>
                                    <span className="text-primary/60">{item.location}</span>
                                </div>
                            </div>

                            <div className="text-primary/60 space-y-2">
                                {item.achievements.map((achievement, i) => (
                                    <p key={i} className="leading-relaxed">
                                        {achievement}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
