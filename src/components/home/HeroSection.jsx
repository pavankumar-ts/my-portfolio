import { Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

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
            <motion.h1 
                className="text-center text-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Hello, I'm Pavan Kumar
            </motion.h1>

            {/* Main Title */}
            <div className="text-left mb-16 overflow-hidden">
                <motion.h2 
                    className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    SOFTWARE
                </motion.h2>
                <motion.h2 
                    className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] ml-[20%] font-bold tracking-tight leading-none"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    DEVELOPER
                </motion.h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Description */}
                <motion.div 
                    className="md:col-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-primary/60 leading-relaxed mb-8">
                        A visionary Art Director from Brooklyn, showcases a portfolio of visually stunning campaigns that blend artistry and innovation. His work spans multiple mediums, from print to digital, and demonstrates a keen eye for bold typography, striking imagery, and compelling storytelling.
                    </p>
                    <motion.button 
                        className="px-6 py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Now
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                </motion.div>

                {/* Center Image */}
                <motion.div 
                    className="md:col-span-1 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Image
                        src="/assets/DP.png"
                        alt="Professional portrait"
                        className="w-full max-w-[400px] bg-gray-100"
                        width={3000}
                        height={3000}
                    />
                </motion.div>

                {/* Right Client List */}
                <motion.div 
                    className="md:col-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h3 className="text-sm font-medium mb-6">
                        FEATURED CLIENTS
                    </h3>
                    <div className="grid grid-cols-2 gap-x-1 gap-y-4">
                        {featuredClients.map((client, index) => (
                            <motion.div 
                                key={client.id} 
                                className="flex gap-4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                whileHover={{ x: 10 }}
                            >
                                <Github className="w-6 h-6 object-contain" />
                                <span className="text-primary/60">{client.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;