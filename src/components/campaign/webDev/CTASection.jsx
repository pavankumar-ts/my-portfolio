import { usePopup } from '@/contexts/PopupContext';
import React from 'react';

const CTASection = () => {
    const { openPopup } = usePopup();
    return (
        <section className="pt-24 bg-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute top-16 right-12 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-12 left-16 w-12 h-12 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-14 h-14 border-2 border-white rounded-full"></div>
            </div>

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Build Your Business Website?
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Let the best website designer near you help you achieve your business goals
                        with a professional, responsive website that drives results and grows your online presence.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-logoColor">25+</div>
                            <div className="text-xs sm:text-sm opacity-80">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-logoColor">100%</div>
                            <div className="text-xs sm:text-sm opacity-80">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-logoColor">4+</div>
                            <div className="text-xs sm:text-sm opacity-80">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-logoColor">99.9%</div>
                            <div className="text-xs sm:text-sm opacity-80">Website Uptime</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <div
                            onClick={() => openPopup('Get A Free Consultation')}
                            className="inline-block cursor-pointer px-10 py-4  bg-logoColor text-white font-normal text-sm md:text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:bg-logoColor/90"
                        >
                            Schedule Free Consultation
                        </div>
                        <a
                            href="#portfolio"
                            className="inline-block px-10 py-4  border-[1px] border-white text-white font-normal text-sm md:text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl"
                        >
                            View Portfolio
                        </a>
                    </div>


                    {/* Trust Indicators */}
                    <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/20">
                        <p className="text-xs sm:text-sm opacity-80 mb-4 sm:mb-6">
                            Trusted by businesses across Bengaluru for professional web development
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                                    <span className="text-lg sm:text-2xl">⚡</span>
                                </div>
                                <div className="text-[10px] sm:text-xs">Fast Delivery</div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                                    <span className="text-lg sm:text-2xl">💎</span>
                                </div>
                                <div className="text-[10px] sm:text-xs">Premium Quality</div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                                    <span className="text-lg sm:text-2xl">🎯</span>
                                </div>
                                <div className="text-[10px] sm:text-xs">Results Driven</div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                                    <span className="text-lg sm:text-2xl">🛡️</span>
                                </div>
                                <div className="text-[10px] sm:text-xs">Secure & Reliable</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;