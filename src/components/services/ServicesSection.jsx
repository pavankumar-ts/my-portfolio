// components/ServicesSection.jsx
import { services } from '@/data/services';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Button from '../common/Button';

const ServicesSection = () => {
    // Hover state management
    const [hoveredService, setHoveredService] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Callback ref to handle both inView and container refs
    const setRefs = (element) => {
        containerRef.current = element;
        inViewRef(element);
    };

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    const handleMouseEnter = (serviceId) => {
        setHoveredService(serviceId);
    };

    const handleMouseLeave = () => {
        setHoveredService(null);
    };

    return (
        <div ref={setRefs} className="container flex flex-col md:flex-row">
            {/* Left Section - Added sticky */}
            <div className="md:w-[50%] pb-12 md:pb-0">
                <div className="md:sticky md:top-32">
                    <h1 className="heading-xl mb-8">
                        SERVICES
                    </h1>
                    <p className="text-primary/60 text-lg leading-relaxed mb-8 max-w-lg">
                        As a dedicated UI/UX designer and Webflow developer, I specialize in creating visually stunning and user-friendly websites. My passion lies in crafting seamless digital experiences that blend innovative design with intuitive functionality.
                    </p>
                    <Button href='/contact' >Contact Now</Button>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-[50%] md:pl-8 space-y-8 md:space-y-16 relative">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`border-b border-primary/10 pb-8 md:pb-16 transition-all duration-1000 transform group cursor-default ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => handleMouseEnter(service.id)}
                        onMouseLeave={handleMouseLeave}
                    >
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
                                        <span className="text-primary/60">{tag}</span>
                                        {index !== service.tags.length - 1 && (
                                            <span className="text-logoColor">•</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-primary/60 leading-relaxed mb-0">
                                {service.description}
                            </p>
                            {/* <Link
                                href={`/services/${service.id}`}
                                className="inline-flex items-center gap-2 border border-primary px-4 py-2 hover:bg-primary hover:text-secondary transition-colors"
                            >
                                View More
                                <span>→</span>
                            </Link> */}
                        </div>
                    </div>
                ))}

                {/* Floating image that follows cursor */}
                {hoveredService && (
                    <div
                        className="fixed hidden md:flex pointer-events-none -z-10 transition-opacity duration-200"
                        style={{
                            left: mousePosition.x - 320, // Move image to left side of cursor
                            top: mousePosition.y - 100
                        }}
                    >
                        <Image
                            src={services.find(s => s.id === hoveredService)?.img}
                            alt={services.find(s => s.id === hoveredService)?.title}
                            width={300}
                            height={200}
                            className="w-[300px] h-[200px] object-center object-cover rounded-lg shadow-lg opacity-90"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServicesSection;