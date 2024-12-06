import { Github } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
    const mainTitleRef = useRef(null);
    const subTitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const clientsRef = useRef(null);

    const featuredClients = [
        {
            id: 1,
            name: 'Logoluxe',
            icon: '/assets/clients/logoluxe.svg'
        },
        {
            id: 2,
            name: 'Graphicraft',
            icon: '/assets/clients/graphicraft.svg'
        },
        {
            id: 3,
            name: 'Auraicons',
            icon: '/assets/clients/auraicons.svg'
        },
        {
            id: 4,
            name: 'Logolaze',
            icon: '/assets/clients/logolaze.svg'
        },
        {
            id: 5,
            name: 'Designnest',
            icon: '/assets/clients/designnest.svg'
        },
        {
            id: 6,
            name: 'Logozen',
            icon: '/assets/clients/logozen.svg'
        }
    ];

    useEffect(() => {
        // Initial animations
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

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
        }, '-=0.8')
        .from(clientsRef.current.children, {
            x: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        }, '-=0.8');

        // Button arrow animation
        gsap.to('.arrow', {
            x: 5,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }, []);

    return (
        <div className="container pt-32">
            <h1 className="text-center text-2xl mb-8 greeting">
                Hello, I'm Pavan Kumar
            </h1>

            <div className="text-left mb-16 overflow-hidden">
                <h2 ref={mainTitleRef} className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none">
                    SOFTWARE
                </h2>
                <h2 ref={subTitleRef} className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] ml-[20%] font-bold tracking-tight leading-none">
                    DEVELOPER
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div ref={descriptionRef} className="md:col-span-1">
                    <p className="text-primary/60 leading-relaxed mb-8">
                        A visionary Art Director from Brooklyn, showcases a portfolio of visually stunning campaigns that blend artistry and innovation. His work spans multiple mediums, from print to digital, and demonstrates a keen eye for bold typography, striking imagery, and compelling storytelling.
                    </p>
                    <button className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/80 transition-colors">
                        Contact Now
                        <span className="arrow">→</span>
                    </button>
                </div>

                <div ref={imageRef} className="md:col-span-1 flex justify-center">
                    <Image
                        src="/assets/DP.png"
                        alt="Professional portrait"
                        className="w-full max-w-[400px] bg-gray-100"
                        width={3000}
                        height={3000}
                    />
                </div>

                <div className="md:col-span-1">
                    <h3 className="text-sm font-medium mb-6">
                        FEATURED CLIENTS
                    </h3>
                    <div ref={clientsRef} className="grid grid-cols-2 gap-x-1 gap-y-4">
                        {featuredClients.map((client) => (
                            <div key={client.id} className="flex gap-4 client-item">
                                <Github className="w-6 h-6 object-contain" />
                                <span className="text-primary/60">{client.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;