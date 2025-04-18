// src/components/ai-services/AIServicesHero.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { ArrowRight } from 'lucide-react';
import { aiServices, aiTools } from '@/data/ai';

const AIServicesHero = () => {
    // Refs for GSAP animations
    const headingRef = useRef(null);
    const highlightRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    
    // State to track which tool image to show in each position
    const [toolImages, setToolImages] = useState([...aiTools]);

    useEffect(() => {
        // Reset GSAP animations
        gsap.set([
            headingRef.current,
            highlightRef.current,
            descriptionRef.current,
            '.service-card',
            imageRef.current,
            '.tool-icon'
        ], { clearProps: 'all' });

        // Main timeline for initial animations
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' }
        });

        // Initial animations sequence
        tl.from(headingRef.current, {
            y: 50,
            opacity: 0,
            duration: 1
        })
            .from(highlightRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 0.8
            }, '-=0.6')
            .from(descriptionRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8
            }, '-=0.5')
            .from('.service-card', {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5
            }, '-=0.4')
            .from(imageRef.current, {
                x: 100,
                opacity: 0,
                duration: 1
            }, '-=1')
            .from('.tool-icon', {
                y: 10,
                opacity: 0,
                stagger: 0.05,
                duration: 0.3
            }, '-=0.5');

        // Set up interval to rotate the tool images
        const rotateInterval = setInterval(() => {
            setToolImages(prevTools => {
                // Create a new array with the first tool moved to the end
                const updatedTools = [...prevTools];
                const firstTool = updatedTools.shift();
                updatedTools.push(firstTool);
                return updatedTools;
            });
        }, 2000); // Change every 2 seconds

        // Cleanup function
        return () => {
            tl.kill();
            clearInterval(rotateInterval);
        };
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

            <div className="container pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div>
                        <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Practical <br />
                            <span ref={highlightRef} className="relative inline-block mt-2">
                                <span className="relative z-10">AI Solutions</span>
                                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/10 -z-10"></span>
                            </span>
                            <br /> for Business
                        </h1>

                        <p ref={descriptionRef} className="text-primary/60 text-lg leading-relaxed mb-8 max-w-2xl">
                            From strategic planning to implementation, I offer focused AI services that solve real business problems, automate workflows, and extract valuable insights from your data — all without requiring a dedicated data science team.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {aiServices.map((service) => (
                                <div
                                    key={service.id}
                                    className="service-card flex items-center gap-3 px-4 py-3 bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg"
                                >
                                    <Image src={service.icon} alt={service.name} width={45} height={45} />
                                    <span className="font-medium">{service.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <Button href="/contact">
                                <span>Get Started</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button href="/projects" variant="outline">
                                View AI Projects
                            </Button>
                        </div>
                    </div>

                    {/* Right image with AI tools overlay */}
                    <div ref={imageRef} className="relative">
                        {/* Main image with decorative elements */}
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/5 z-10"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/5 z-10"></div>

                            {/* Main image */}
                            <Image
                                src="/dummy.webp"
                                alt="AI Services by Pavan Kumar"
                                className="w-full shadow-lg relative z-20 "
                                width={3000}
                                height={3000}
                                priority
                            />

                            {/* Floating stats card */}
                            <div className="absolute -bottom-6 -right-6 bg-bgColor shadow-lg rounded-lg p-4 border border-primary/10 z-30">
                                <p className="text-sm text-primary/60">Time Saved</p>
                                <p className="text-3xl font-bold">80%</p>
                            </div>
                        </div>

                        {/* AI Tools orbit */}
                        <div className="absolute inset-0 z-30">
                            {/* Create fixed positions in the orbit */}
                            {aiTools.map((_, index) => {
                                // Calculate fixed position on an orbit
                                const angle = (index / aiTools.length) * Math.PI * 2;
                                const radius = 180; // Orbit radius
                                const offsetX = Math.cos(angle) * radius;
                                const offsetY = Math.sin(angle) * radius;

                                // Get the current tool to display at this position (rotating)
                                const currentTool = toolImages[index];

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-center items-center tool-icon absolute  bg-bgColor h-16 w-16 p-2 rounded-full shadow-md border border-primary/10"
                                        style={{
                                            left: `calc(50% + ${offsetX}px)`,
                                            top: `calc(50% + ${offsetY}px)`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <Image
                                            src={currentTool.logo}
                                            alt={currentTool.name}
                                            fill
                                            title={currentTool.name}
                                            className="transition-opacity duration-500 p-2"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIServicesHero;