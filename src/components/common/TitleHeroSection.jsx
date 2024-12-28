import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const TitleHeroSection = ({ title, title2 }) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="text-left mb-16 ">
            <h2 className={`text-[50px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                {title}
            </h2>
            <h2 className={`text-[50px] sm:text-[80px] md:text-[100px] lg:text-[160px] ml-[20%] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {title2}
            </h2>
        </div>
    )
}

export default TitleHeroSection