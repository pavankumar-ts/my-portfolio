// components/ServicesSection.jsx
import { services } from '@/data/services';
import Link from 'next/link';
import React from 'react';

const ServicesSection = () => {
    return (
        <div className="container flex flex-col md:flex-row">
            {/* Left Section - Added sticky */}
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="md:sticky md:top-32">
                    <h1 className="heading-xl mb-8">
                        SERVICES
                    </h1>
                    <p className="text-primary/60 text-lg leading-relaxed mb-8 max-w-lg">
                        As a dedicated UI/UX designer and Webflow developer, I specialize in creating visually stunning and user-friendly websites. My passion lies in crafting seamless digital experiences that blend innovative design with intuitive functionality.
                    </p>
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                        Contact Now
                        <span>→</span>
                    </Link>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] md:pl-8 space-y-16">
                {services.map((service) => (
                    <div key={service.id} className="border-b border-primary/10 pb-16">
                        <div className="flex flex-col items-start justify-between mb-4">
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-medium text-primary/60">
                                    [{service.id}]
                                </span>
                                <h2 className="text-2xl font-semibold">
                                    {service.title}
                                </h2>
                            </div>
                            <div className="flex gap-2 mt-3">
                                {service.tags.map((tag, index) => (
                                    <React.Fragment key={tag}>
                                        <span className="text-primary">{tag}</span>
                                        {index !== service.tags.length - 1 && (
                                            <span className="text-primary">•</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-primary/60 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link
                                href={`/services/${service.id}`}
                                className="inline-flex items-center gap-2 border border-primary px-4 py-2 hover:bg-primary hover:text-secondary transition-colors"
                            >
                                View More
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;