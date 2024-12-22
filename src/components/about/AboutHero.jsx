// components/about/AboutHero.jsx
import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';

const AboutHero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="container flex flex-col md:flex-row">
            <div className="md:w-[40%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h1 className={`heading-xl whitespace-pre-line transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        ABOUT{'\n'}ME
                    </h1>
                </div>
            </div>

            <div className={`md:w-[60%] transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-primary/60 text-xl leading-relaxed mb-8">
                    I'm a frontend developer specializing in building exceptional digital experiences. Currently focused on creating responsive web applications while working with modern technologies like React, Next.js, and TailwindCSS.
                </p>
                <Button href='/contact' > Let's Talk</Button>
            </div>
        </div>
    );
};

export default AboutHero;