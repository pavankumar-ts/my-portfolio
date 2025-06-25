import { services } from '@/data/services';
import React, { useState, useRef } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Image from 'next/image';

const ServicesSection = () => {
    const [hoveredService, setHoveredService] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

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
        <div className="container flex flex-col md:flex-row" ref={containerRef}>
            <div className="md:w-[50%] pb-12 md:pb-0">
                <h2 className="heading-xl sticky top-32 z-20">
                    SERVICES
                </h2>
            </div>

            <div className="md:w-[50%] space-y-8 md:space-y-16 relative">
                {services.map((service, index) => (
                    <AnimatedSection key={service.id} delayMultiplier={index * 0}>
                        <div
                            className="relative border-b border-primary/10 pb-8 md:pb-16 group cursor-default"
                            onMouseMove={(e) => handleMouseMove(e, service.id)}
                            onMouseEnter={() => handleMouseEnter(service.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex flex-col items-start gap-4 z-20">
                                <div className="flex items-center gap-6">
                                    <span className="text-sm font-medium w-12">[{service.id}]</span>
                                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                                </div>

                                <div className="flex gap-2 items-center ml-[72px] ">
                                    {service.tags.map((tag, index) => (
                                        <React.Fragment key={tag}>
                                            <span className="text-primary/60">{tag}</span>
                                            {index !== service.tags.length - 1 && (
                                                <span className="text-logoColor">•</span>
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

                {/* Floating image that follows cursor */}
                {hoveredService && (
                    <div
                        className="fixed hidden md:flex pointer-events-none z-30 transition-opacity duration-200"
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
                            className="w-[300px] h-[200px] object-center object-cover rounded-lg shadow-lg opacity-80"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServicesSection;