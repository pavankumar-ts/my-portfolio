// src/components/home/HeroSection.jsx
import { Github } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '@/components/common/Button';
import Head from 'next/head';
import { technologyLogos } from '@/data/projects';

const HeroSection = () => {
    // Refs for GSAP animations
    const mainTitleRef = useRef(null);
    const subTitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Reset GSAP animations
        gsap.set([
            '.greeting',
            mainTitleRef.current,
            subTitleRef.current,
            descriptionRef.current,
            imageRef.current,
            '.clients-heading',
            '.client-item',
        ], { clearProps: 'all' });

        // Main timeline for initial animations
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' }
        });

        // Initial animations sequence
        tl.from('.greeting', {
            y: 30,
            opacity: 0,
            duration: 1
        })
            .from(mainTitleRef.current, {
                x: -100,
                opacity: 0,
                duration: 1
            }, '-=0.5')
            .from(subTitleRef.current, {
                x: 100,
                opacity: 0,
                duration: 1
            }, '-=0.7')
            .from(descriptionRef.current, {
                y: 30,
                opacity: 0,
                duration: 1
            }, '-=0.5')
            .from(imageRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1
            }, '-=0.8');

        // Separate timeline for clients section
        const clientsTl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            delay: 0.5
        });

        // Animate clients section
        clientsTl.from('.clients-heading', {
            y: 20,
            opacity: 0,
            duration: 0.6
        })
            .from('.client-item', {
                y: 15,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1
            }, '-=0.2');

        // Continuous arrow animation
        gsap.to('.arrow', {
            x: 5,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        // Cleanup function
        return () => {
            tl.kill();
            clientsTl.kill();
        };
    }, []);

    return (
        <>
            <Head>
                <title>Home | Pavan Kumar</title>
                <meta name="description" content="Welcome to the portfolio of Pavan Kumar, a passionate Software Developer specializing in creating modern and responsive web applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="container pt-32">
                {/* Greeting */}
                <h1 className="text-center text-2xl mb-8 greeting">
                    Hello, I'm Pavan Kumar
                </h1>

                {/* Main Title */}
                <div className="text-left mb-16 ">
                    <h2
                        ref={mainTitleRef}
                        className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none"
                    >
                        SOFTWARE
                    </h2>
                    <h2
                        ref={subTitleRef}
                        className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] ml-[20%] font-bold tracking-tight leading-none"
                    >
                        DEVELOPER
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left Description */}
                    <div ref={descriptionRef} className="md:col-span-1">
                        <p className="text-primary/60 leading-relaxed mb-8">
                        A versatile Software Developer crafting scalable digital solutions. Specializing in modern web applications, mobile apps, and business automation tools, I deliver high-performance experiences using cutting-edge technologies. My focus is on creating efficient, user-centric solutions that drive real business value.
                        </p>
                        <Button href="/contact">
                            Contact Now
                        </Button>
                    </div>

                    {/* Center Image */}
                    <div ref={imageRef} className="md:col-span-1 flex justify-center">
                        <Image
                            src="/assets/DP.png"
                            alt="Pavan Kumar"
                            className="w-full max-w-[400px] bg-gray-100"
                            width={3000}
                            height={3000}
                            priority
                        />
                    </div>

                    {/* Right Technology List */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-medium mb-4 clients-heading">
                            TECHNOLOGY
                        </h3>
                        <div className="grid grid-cols-2 gap-x-1 gap-y-4">
                            {technologyLogos.slice(0, 8).map((tech) => (
                                <div
                                    key={tech.id}
                                    className="flex items-center gap-4 client-item hover:translate-x-2 transition-transform duration-300"
                                >
                                    <Image src={tech.url} alt={tech.name} width={40} height={40} className={`${tech.isDark ? 'bg-white' : ''} p-1`} />
                                    <span className="text-primary/60">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
