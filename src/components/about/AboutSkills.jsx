// components/about/AboutSkills.jsx
import React from 'react';
import { services } from '../../data/services';
import { useInView } from 'react-intersection-observer';

const AboutSkills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="container flex flex-col md:flex-row pt-32">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h2 className="heading-xl whitespace-pre-line">
                        MY <br className='md:block hidden' />SKILLS
                    </h2>
                </div>
            </div>

            <div className="md:w-[50%] md:space-y-16 space-y-8">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`border-b border-primary/10 pb-8 md:pb-16 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start">
                                <span className="text-sm font-medium text-primary/60">[{service.id}]</span>
                                <div className="ml-8">
                                    <h3 className="text-2xl font-semibold mb-6">{service.title}</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-2 border border-primary/10 rounded-full text-primary/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSkills;
