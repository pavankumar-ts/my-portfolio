import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className="w-full py-4 bg-secondary sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto md:px-[3rem] px-[1rem] ">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary">
                        <Image src='/assets/logo.svg'
                            alt='Pavan'
                            width={1000} height={1000}
                            className='h-[30px] w-auto object-contain'
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-primary hover:text-primary transition-colors font-medium ${router.pathname === item.path ? 'border-b-[1px] border-black' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                    <Link
                        href="/contact"
                        className=" px-4 py-2 border border-primary hover:bg-primary hover:text-secondary transition-colors hidden md:flex items-center font-medium"
                    >
                        Contact
                        <span className="ml-2">→</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-primary/60 hover:text-primary"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-primary/10">
                        <div className="flex flex-col space-y-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`text-primary/60 hover:text-primary transition-colors font-medium ${router.pathname === item.path ? 'font-bold' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="px-4 py-2 border border-primary rounded hover:bg-primary hover:text-secondary transition-colors inline-flex items-center w-fit font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;