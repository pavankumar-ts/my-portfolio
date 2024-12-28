// components/about/AboutExperience.jsx
import { experience } from '@/data/experience';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutExperience = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="container flex flex-col md:flex-row pt-32 pb-32">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h2 className="heading-xl whitespace-pre-line">
                        MY <br className='md:block hidden' />EXPERIENCE
                    </h2>
                </div>
            </div>

            <div className="md:w-[50%] space-y-24">
                {experience.map((section) => (
                    <div key={section.id}>
                        {/* <div className="flex items-start mb-12">
                            <span className="text-sm font-medium text-primary/60">[{section.id}]</span>
                            <h3 className="text-2xl font-semibold ml-8">{section.type}</h3>
                        </div> */}

                        <div className="space-y-8 md:space-y-16 ">
                            {section.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border-b border-primary/10 md:pb-16 pb-8 ml-0 md:ml-16 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
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
