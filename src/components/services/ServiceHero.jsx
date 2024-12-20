// components/services/ServiceHero.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ServiceHero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="container pt-32">
            {/* Main Title */}
            <div className="text-left mb-16">
                <h1 className={`text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    WHAT'S
                </h1>
                <h1 className={`text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] ml-[20%] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    AVAILABLE?
                </h1>
            </div>
        </div>
    );
};

export default ServiceHero;