import Image from 'next/image';
import React, { useState } from 'react';

const ProjectsSection = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            id: 5,
            title: 'Bangalore Gastro Centre',
            tech: 'Next.js • React • Drupal CMS',
            description: 'A comprehensive website for the Bangalore Gastro Centre, featuring appointment booking, doctor profiles, and health resources.',
            image: '/assets/projects/bgc_phone.webp',
            link: 'https://bangaloregastrocentre.com/',
            year: '2025'
        },
        {
            id: 1,
            title: 'Bricstal Tech',
            tech: 'Next.js • React',
            description: 'A comprehensive web application for an IT consulting firm, showcasing industry-specific solutions and innovative technology services.',
            image: '/assets/projects/bricstal_tech.webp',
            link: 'https://www.bricstaltech.com/',
            year: '2023'
        },
        {
            id: 3,
            title: 'TUFF PPF',
            tech: 'WordPress • Elementor',
            description: 'Corporate website for TUFF PPF, a leading Paint Protection Film manufacturer, showcasing products and technical expertise.',
            image: '/assets/projects/tuff_ppf.webp',
            link: 'https://tuffppf.com/',
            year: '2024'
        },
        {
            id: 4,
            title: 'Turbo Tints',
            tech: 'WordPress • Elementor',
            description: 'Automotive customization website using WordPress and Elementor, featuring window tinting, interior mods, and bike PPF. Includes before-after sliders and service showcases.',
            image: '/assets/projects/iconhomz.webp',
            link: 'https://iconhomz.com/',
            year: '2025'
        },
        {
            id: 2,
            title: 'Yuvi Builders',
            tech: 'Next.js • React • Drupal CMS',
            description: 'An advanced web platform for Yuvi Builders, a real estate and construction firm, built with Next.js and integrated with Drupal CMS for content management.',
            image: '/assets/projects/yuvibuilders.webp',
            link: 'https://www.yuvibuilders.com/',
            year: '2025'
        },
        {
            id: 6,
            title: 'Neo Leather',
            tech: 'Next.js • React • Drupal CMS',
            description: 'A modern, high-performance Next.js website for Neo Leather, showcasing personalized leather furniture with speed, scalability, and SEO optimization.',
            image: '/assets/projects/neoleather.webp',
            link: 'https://neoleather.in/',
            year: '2024'
        }
    ];

    // Show only first project on mobile initially, all on desktop
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section className="">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-textColor">
                        Featured Projects
                    </h2>
                    <p className="text-base sm:text-lg text-textColor/70 max-w-4xl mx-auto">
                        Explore the portfolio of successful web development projects. Every website showcases dedication to quality, performance, and client success.
                    </p>
                </div>

                {/* Mobile View - Show/Hide Logic */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-1 gap-6">
                        {displayedProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-bgColor border border-primary/10 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg"
                            >
                                {/* Project Image */}
                                <div className="h-[200px] bg-gray-200 relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-5">
                                    <div className="text-xs font-medium text-logoColor mb-2">
                                        {project.tech}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-textColor">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-4 text-textColor/70">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-logoColor font-medium hover:text-logoColor/80 transition-colors text-sm"
                                    >
                                        View Project
                                        <svg
                                            className="ml-2 w-4 h-4 transition-transform hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More/Less Button - Mobile Only */}
                    {console.log("showAll", showAll)}
                    {!showAll && <div className="text-center mt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-block px-6 py-3 bg-logoColor text-white font-medium transition-all duration-300 hover:bg-logoColor/90 hover:transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            View More Projects
                        </button>
                    </div>}
                </div>

                {/* Desktop View - Always Show All */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-bgColor border border-primary/10 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg"
                            >
                                {/* Project Image */}
                                <div className="h-[260px] bg-gray-200 relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="text-sm font-medium text-logoColor mb-3">
                                        {project.tech}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-textColor">
                                        {project.title}
                                    </h3>
                                    <p className="leading-relaxed mb-4 text-textColor/70">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-logoColor font-medium hover:text-logoColor/80 transition-colors"
                                    >
                                        View Project
                                        <svg
                                            className="ml-2 w-4 h-4 transition-transform hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Projects Button */}
                {/* <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4  font-medium transition-all duration-300 hover:transform  hover:shadow-lg bg-textColor text-bgColor"
                    >
                        View All Projects
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default ProjectsSection;