// src/components/common/Navbar.jsx

import { usePopup } from "@/contexts/PopupContext";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const { openPopup } = usePopup();
    const [isOpen, setIsOpen] = useState(false);

    // Navigation links configuration
    const navigationLinks = [
        {
            id: 'services',
            label: 'Services',
            href: '#services'
        },
        {
            id: 'projects',
            label: 'Projects',
            href: '#projects'
        },
        {
            id: 'process',
            label: 'Process',
            href: '#process'
        },
        {
            id: 'contact',
            label: 'Contact',
            href: '#contact'
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="w-full z-50 bg-white shadow-sm fixed top-0 left-0 right-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex-shrink-0 z-50">
                            <Link href="#" className="flex items-center">
                                <img
                                    src="/assets/logo.svg"
                                    alt="Pavan Kumar - Web Developer"
                                    className="h-[28px] sm:h-[32px] w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="hover:text-logoColor transition-colors duration-200 font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => openPopup('Get A Free Consultation')}
                                className="px-6 py-3 bg-logoColor text-white font-medium hover:bg-opacity-90 transition-all duration-200 rounded-sm shadow-sm hover:shadow-md"
                            >
                                Free Consultation
                            </button>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <div className="md:hidden z-50 relative">
                            <button
                                onClick={toggleMenu}
                                className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <span
                                    className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                ></span>
                                <span
                                    className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                                        }`}
                                ></span>
                                <span
                                    className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`md:hidden fixed inset-0 bg-black transition-all duration-300 z-40 ${isOpen ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible'
                        }`}
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Mobile Menu - Full Width */}
                <div
                    className={`md:hidden fixed top-0 left-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Links */}
                        <div className="flex-1 px-6 py-12 pt-20">
                            <div className="space-y-8  flex flex-col justify-center items-center h-full">
                                {navigationLinks.map((link, index) => (
                                    <div key={link.id} className="transform transition-all duration-300" style={{
                                        transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                                    }}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.id)}
                                            className="block w-full text-left text-2xl font-semibold text-gray-800 hover:text-logoColor transition-colors duration-200 py-3"
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu CTA */}
                        <div className="p-6 border-t border-gray-100">
                            <button
                                onClick={() => {
                                    openPopup('Get A Free Consultation');
                                    setIsOpen(false);
                                }}
                                className="w-full px-6 py-5 bg-logoColor text-white text-lg font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Get Free Consultation
                            </button>

                            {/* Additional Contact Info */}
                            <div className="mt-6 text-center">
                                <p className="text-gray-600 text-sm mb-2">Ready to get started?</p>
                                <a
                                    href="mailto:contact@pavankumar.co"
                                    className="text-logoColor font-medium hover:underline transition-all duration-200"
                                >
                                    contact@pavankumar.co
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content from being hidden behind fixed navbar */}
            <div className="h-16 sm:h-20"></div>
        </>
    );
};

export default Navbar;