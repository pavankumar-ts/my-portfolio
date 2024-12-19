// components/about/AboutExperience.jsx
import { experience } from '@/data/experience';
import React from 'react';

const AboutExperience = () => {
    return (
        <div className="container flex flex-col md:flex-row pt-32 pb-32">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h2 className="heading-xl whitespace-pre-line">
                        MY{'\n'}EXPERIENCE
                    </h2>
                </div>
            </div>

            <div className="md:w-[50%] space-y-24">
                {experience.map((section) => (
                    <div key={section.id}>
                        <div className="flex items-start mb-12">
                            <span className="text-sm font-medium text-primary/60">[{section.id}]</span>
                            <h3 className="text-2xl font-semibold ml-8">{section.type}</h3>
                        </div>

                        <div className="space-y-16">
                            {section.items.map((item, index) => (
                                <div key={index} className="border-b border-primary/10 pb-16 ml-16">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                            <p className="text-primary/60">{item.institution}</p>
                                        </div>
                                        <span className="text-primary/60">{item.period}</span>
                                    </div>
                                    <p className="text-primary/60 leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i} className="text-primary/60 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutExperience;
