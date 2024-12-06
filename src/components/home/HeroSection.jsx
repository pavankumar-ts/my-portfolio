import { Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
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

    return (
        <div className="container pt-32">
            {/* Greeting */}
            <h1 className="text-center text-2xl mb-8">
                Hello, I'm Pavan Kumar
            </h1>

            {/* Main Title */}
            <div className="text-left mb-16 overflow-hidden">
                <h2 className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none">
                    SOFTWARE
                </h2>
                <h2 className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] ml-[20%] font-bold tracking-tight leading-none">
                    DEVELOPER
                </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center ">
                {/* Left Description */}
                <div className="md:col-span-1">
                    <p className="text-primary/60 leading-relaxed mb-8">
                        A visionary Art Director from Brooklyn, showcases a portfolio of visually stunning campaigns that blend artistry and innovation. His work spans multiple mediums, from print to digital, and demonstrates a keen eye for bold typography, striking imagery, and compelling storytelling.
                    </p>
                    <button className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors">
                        Contact Now
                        <span>→</span>
                    </button>
                </div>

                {/* Center Image */}
                <div className="md:col-span-1 flex justify-center">
                    <Image
                        src="/assets/DP.png"
                        alt="Professional portrait"
                        className="w-full max-w-[400px] bg-gray-100"
                        width={3000}
                        height={3000}
                    />
                </div>

                {/* Right Client List */}
                <div className="md:col-span-1">
                    <h3 className="text-sm font-medium mb-6">
                        FEATURED CLIENTS
                    </h3>
                    <div className="grid grid-cols-2 gap-x-1 gap-y-4 ">
                        {featuredClients.map((client) => (
                            <div key={client.id} className="flex  gap-4">
                                {/* <Image
                                    src={client.icon}
                                    alt={`${client.name} logo`}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 object-contain"
                                /> */}
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