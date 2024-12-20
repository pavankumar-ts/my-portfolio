import { services } from '@/data/services';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="container flex flex-col md:flex-row">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <h1 className="heading-xl sticky top-32">
                    SERVICES
                </h1>
            </div>

            <div className="md:w-[50%] space-y-14">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`border-b border-primary/10 pb-14 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-medium w-12">[{service.id}]</span>
                                <h2 className="text-2xl font-semibold">{service.title}</h2>
                            </div>

                            <div className="flex gap-2 items-center ml-[72px]">
                                {service.tags.map((tag, index) => (
                                    <React.Fragment key={tag}>
                                        <span className="text-primary/60">{tag}</span>
                                        {index !== service.tags.length - 1 && (
                                            <span className="text-primary/60">•</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <p className="text-primary/60 leading-relaxed ml-[72px]">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;