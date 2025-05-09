import { services } from '@/data/services';
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

const ServicesSection = () => {
    return (
        <div className="container flex flex-col md:flex-row">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <h2 className="heading-xl sticky top-32">
                    SERVICES
                </h2>
            </div>

            <div className="md:w-[50%] space-y-8 md:space-y-16">
                {services.map((service, index) => (
                    <AnimatedSection key={service.id} delayMultiplier={index * 0}>
                        <div className="border-b border-primary/10 pb-8 md:pb-16">
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
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;