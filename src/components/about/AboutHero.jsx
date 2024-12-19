// components/about/AboutHero.jsx
import React from 'react';
import Link from 'next/link';

const AboutHero = () => {
    return (
        <div className="container flex flex-col md:flex-row">
            <div className="md:w-[40%] pb-12 md:pb-0">
                <div className="sticky top-32">
                    <h1 className="heading-xl whitespace-pre-line">
                        ABOUT{'\n'}ME
                    </h1>
                </div>
            </div>

            <div className="md:w-[60%]">
                <p className="text-primary/60 text-xl leading-relaxed mb-8">
                    I'm a frontend developer specializing in building exceptional digital experiences. Currently focused on creating responsive web applications while working with modern technologies like React, Next.js, and TailwindCSS.
                </p>
                <Link 
                    href="/contact"
                    className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                    Let's Talk
                    <span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default AboutHero;