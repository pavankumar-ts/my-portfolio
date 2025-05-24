// src/components/home/ProcessSection.jsx
import React from 'react';

const ProcessSection = () => {
    let height = "70"
    const processSteps = [
        {
            id: 1,
            title: 'Discovery',
            description: 'Understanding your vision, goals, and requirements through detailed consultation',
            icon: <img width={height} height={height} src="https://img.icons8.com/ios/100/compass--v1.png" alt="compass--v1" />
        },
        {
            id: 2,
            title: 'Design',
            description: 'Creating beautiful, user-friendly designs that align with your brand',
            icon: <img width={height} height={height} src="https://img.icons8.com/pastel-glyph/100/web-design--v2.png" alt="web-design--v2" />
        },
        {
            id: 3,
            title: 'Develop',
            description: 'Building responsive, fast websites using modern technologies',
            icon: <img width={height} height={height} src="https://img.icons8.com/ios/100/laptop-coding.png" alt="laptop-coding" />
        },
        {
            id: 4,
            title: 'Deploy',
            description: 'Launching your website with testing, optimization and ongoing support',
            icon: <img width={height} height={height} src="https://img.icons8.com/ios/100/domain--v1.png" alt="domain--v1" />
        }
    ];

    return (
        <section className="">
            <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-block px-4 py-2 text-logoColor text-sm font-medium mb-4">
                        Process
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-textColor">
                        From Concept to
                        <span className="text-logoColor"> Launch</span>
                    </h2>
                    <p className="text-base sm:text-lg text-textColor/70 max-w-2xl mx-auto px-4 sm:px-0">
                        Every website built using a proven methodology that ensures exceptional results.
                    </p>
                </div>

                {/* Desktop Process Flow */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Flowing Connection Path */}
                        <svg className="absolute top-24 left-0 w-full h-16 z-0" viewBox="0 0 1200 64" fill="none">
                            <path
                                d="M150 32 Q400 8 600 32 T1050 32"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                fill="none"
                                className="animate-pulse"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#f16829" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#f16829" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#f16829" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="grid grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <div key={step.id} className="relative group">
                                    {/* Step Card */}
                                    <div className="bg-secondary/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 relative z-10">
                                        {/* Floating Number */}
                                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-logoColor text-secondary rounded-lg flex items-center justify-center text-lg font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                            {step.id}
                                        </div>

                                        {/* Icon Background */}
                                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-logoColor/10 transition-all duration-300">
                                            <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                                {step.icon}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold mb-3 text-textColor group-hover:text-logoColor transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-textColor/70 text-sm leading-relaxed">
                                            {step.description}.
                                        </p>

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-logoColor opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Process Steps */}
                <div className="lg:hidden space-y-4">
                    {processSteps.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Connecting Line */}
                            {index < processSteps.length - 1 && (
                                <div className="absolute left-6 sm:left-8 top-16 sm:top-18 w-0.5 h-8 sm:h-10 bg-gradient-to-b from-logoColor/50 to-primary/20 z-0"></div>
                            )}

                            <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                                {/* Step Number Circle */}
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-logoColor text-secondary rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg flex-shrink-0">
                                    {step.id}
                                </div>

                                {/* Content Card */}
                                <div className="bg-bgColor border border-primary/10 rounded-xl p-4 sm:p-6 shadow-sm flex-1 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-textColor mb-2">{step.title}</h3>
                                            <p className="text-textColor/70 text-sm sm:text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                        <div className="ml-3 flex-shrink-0">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                                <img 
                                                    width="32" 
                                                    height="32" 
                                                    src={step.icon.props.src} 
                                                    alt={step.icon.props.alt}
                                                    className="sm:w-10 sm:h-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA */}
                {/* <div className="text-center mt-12 lg:mt-16">
                    <div className="inline-block bg-secondary/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 sm:p-8 shadow-lg mx-4 sm:mx-0">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-textColor">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-textColor/70 mb-6 max-w-md mx-auto text-sm sm:text-base">
                            Let's discuss your project and create something amazing together
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-logoColor text-secondary font-medium hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 text-sm sm:text-base"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="#portfolio"
                                className="px-6 sm:px-8 py-3 sm:py-4 border border-logoColor text-logoColor font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default ProcessSection;