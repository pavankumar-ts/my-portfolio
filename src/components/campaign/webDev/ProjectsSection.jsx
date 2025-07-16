import Image from 'next/image';
import React from 'react';

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: 'Bangalore Gastro Centre',
            tech: 'Next.js • React • Drupal CMS',
            description: 'A comprehensive website for the Bangalore Gastro Centre, featuring appointment booking, doctor profiles, and health resources.',
            image: '/assets/projects/bgc_phone.webp',
            link: 'https://bangaloregastrocentre.com/',
            year: '2025',
            category: 'Healthcare'
        },
        {
            id: 2,
            title: 'Bricstal Tech',
            tech: 'Next.js • React',
            description: 'A comprehensive web application for an IT consulting firm, showcasing industry-specific solutions and innovative technology services.',
            image: '/assets/projects/bricstal_tech.webp',
            link: 'https://www.bricstaltech.com/',
            year: '2023',
            category: 'Technology'
        },
        {
            id: 3,
            title: 'TUFF PPF',
            tech: 'WordPress • Elementor',
            description: 'Corporate website for TUFF PPF, a leading Paint Protection Film manufacturer, showcasing products and technical expertise.',
            image: '/assets/projects/tuff_ppf.webp',
            link: 'https://tuffppf.com/',
            year: '2024',
            category: 'Manufacturing'
        },
        {
            id: 4,
            title: 'Turbo Tints',
            tech: 'WordPress • Elementor',
            description: 'Automotive customization website using WordPress and Elementor, featuring window tinting, interior mods, and bike PPF.',
            image: '/assets/projects/iconhomz.webp',
            link: 'https://iconhomz.com/',
            year: '2025',
            category: 'Automotive'
        },
        {
            id: 5,
            title: 'Yuvi Builders',
            tech: 'Next.js • React • Drupal CMS',
            description: 'An advanced web platform for Yuvi Builders, a real estate and construction firm, built with Next.js and integrated with Drupal CMS.',
            image: '/assets/projects/yuvibuilders.webp',
            link: 'https://www.yuvibuilders.com/',
            year: '2025',
            category: 'Real Estate'
        },
        {
            id: 6,
            title: 'Neo Leather',
            tech: 'Next.js • React • Drupal CMS',
            description: 'A modern, high-performance Next.js website for Neo Leather, showcasing personalized leather furniture with speed, scalability, and SEO optimization.',
            image: '/assets/projects/neoleather.webp',
            link: 'https://neoleather.in/',
            year: '2024',
            category: 'E-commerce'
        }
    ];

    return (
        <div className="relative bg-bgColor">
            {/* Header */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-1 mb-0 md:mb-8 text-center">
                <div className="inline-block px-4 py-2 bg-logoColor/10 text-logoColor text-sm font-medium rounded-full mb-2">
                    Featured Work
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-textColor">
                    Selected Projects
                </h2>
                <p className="text-lg sm:text-xl text-textColor/70 max-w-2xl mx-auto leading-relaxed">
                    Crafting digital experiences that drive results and inspire users
                </p>
            </div>

            {/* Stacking Cards */}
            <div className="relative -mt-20">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="sticky h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
                        style={{
                            zIndex: index + 1,
                            top: `${index * 20}px`, // Each card is offset by 30px from the previous
                        }}
                    >
                        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-sm bg-bgColor border-2 border-[#7a7a7a27]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[450px]">
                                {/* Project Image */}
                                <div className="relative h-64 lg:h-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-textColor/20 to-transparent"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-white/50 backdrop-blur-sm text-textColor text-sm font-medium rounded-full border border-borderColor">
                                            {project.category}
                                        </span>
                                    </div>
                                    {/* <div className="absolute bottom-6 right-6">
                                        <span className="px-4 py-2 bg-logoColor text-bgColor text-sm font-medium rounded-full">
                                            {project.year}
                                        </span>
                                    </div> */}
                                </div>

                                {/* Project Content */}
                                <div className="p-6 lg:p-12 flex flex-col justify-center bg-bgColor">
                                    <div className="text-sm font-medium mb-4 tracking-wide text-gray-500 uppercase">
                                        {project.tech}
                                    </div>
                                    <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-textColor leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 text-textColor/70">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-6 lg:px-5 py-3 lg:py-3 bg-logoColor text-bgColor font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:bg-logoColor/90"
                                        >
                                            View Project
                                            <svg
                                                className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transition-transform hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                            </svg>
                                        </a>
                                        {/* <button className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-borderColor text-textColor font-medium rounded-lg hover:border-textColor hover:bg-textColor hover:text-bgColor transition-all duration-300">
                                            Case Study
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;