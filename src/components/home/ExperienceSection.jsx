// components/about/ExperienceSection.jsx
import { experience } from '@/data/experience';
import React from 'react';

const ExperienceSection = () => {
    const professionalExperience = experience.find((exp) => exp.type === 'Professional Experience');

    return (
        <div className="container flex flex-col md:flex-row">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h1 className="heading-xl whitespace-pre-line">
                        WORKING{'\n'}EXPERIENCE
                    </h1>
                </div>
            </div>

            <div className="md:w-[50%] space-y-12">
                {professionalExperience.items.map((item, index) => (
                    <div key={index} className="border-b border-primary/10 pb-12">
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
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
