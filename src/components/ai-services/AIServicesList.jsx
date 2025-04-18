// src/components/ai-services/AIServicesList.jsx
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Image from 'next/image';
import { aiServicesDetailed, aiTools } from '@/data/ai';

const AIServicesList = () => {
    // Function to get tools by their IDs
    const getToolsById = (toolIds) => {
        return toolIds.map(id => aiTools.find(tool => tool.id === id) || {
            id,
            name: `Unknown Tool (${id})`,
            logo: '/assets/projects/technology-logos/default.svg'
        });
    };

    return (
        <div className="container flex flex-col md:flex-row">
            <div className="md:w-[50%] pb-12 md:pb-0">
                <h2 className="heading-xl sticky top-32">
                    AI SERVICES
                </h2>
            </div>

            <div className="md:w-[50%] space-y-8 md:space-y-16">
                {aiServicesDetailed.map((service, index) => (
                    <AnimatedSection key={service.id} delayMultiplier={index * 0}>
                        <div className="border-b border-primary/10 pb-8 md:pb-16">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-6">
                                    <span className="text-sm font-medium w-12">[{service.id}]</span>
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-2xl font-semibold">{service.title}</h2>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 items-center ml-[72px]">
                                    {service.tags.map((tag, index) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-primary/5 rounded-full text-primary/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-primary/60 leading-relaxed ml-[72px] mt-2">
                                    {service.description}
                                </p>

                                <div className="ml-[72px] mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left column: What/Use Cases */}
                                    <div className="bg-primary/5 rounded-lg p-4">
                                        <h3 className="font-medium mb-3">
                                            {service.whatYouDo ? "What you'll do" : "Use cases"}
                                        </h3>
                                        <ul className="space-y-2">
                                            {(service.whatYouDo || service.useCases).map((item) => (
                                                <li key={item} className="flex items-start gap-2">
                                                    <span className="text-primary/80 text-lg mt-0.5">•</span>
                                                    <span className="text-primary/60">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right column: Tools */}
                                    <div className="bg-primary/5 rounded-lg p-4">
                                        <h3 className="font-medium mb-3">Tools</h3>
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {getToolsById(service.toolIds).map((tool) => (
                                                <span
                                                    key={tool.id}
                                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary/10 rounded-full text-primary/80"
                                                    title={tool.name}
                                                >
                                                    <Image
                                                        src={tool.logo}
                                                        alt={tool.name}
                                                        width={12}
                                                        height={12}
                                                        className="rounded-full"
                                                    />
                                                    <span>{tool.name}</span>
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-xs text-primary/60 italic">
                                            {service.toolsDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default AIServicesList;