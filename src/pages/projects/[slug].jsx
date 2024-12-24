// pages/projects/[slug].jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Head from 'next/head';
import ContactCTA from '@/components/common/ContactCTA';

export default function ProjectPage({ project }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <Head>
                <title>{project.title} | Project | Pavan Kumar</title>
                <meta name="description" content={project.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="container ">
                {/* Hero Section with Title */}
                <div ref={ref} className="text-center mb-8 md:mb-16">
                    <h1 className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {project.title}
                    </h1>
                </div>

                {/* Visit Website Button */}
                <div className="flex justify-center mb-8 md:mb-16">
                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-4 md:px-6 py-2 md:py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-all hover:translate-x-1"
                    >
                        Visit Website
                        <span className="arrow">→</span>
                    </Link>
                </div>

                {/* Screenshots Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-32">
                    {project.screenshots.map((screenshot, index) => (
                        <div
                            key={index}
                            className={`relative w-full rounded-sm overflow-hidden h-auto ${index === 0 ? 'col-span-1 sm:col-span-2' : ''
                                }`}
                        >
                            <style jsx global>{`
            .screenshot-image {
              object-position: top;
                        }
            .screenshot-image:hover {
              object-position: bottom;
              transition: object-position 15000ms ease-out !important;
            }
          `}</style>
                            <Image
                                src={screenshot.url}
                                alt={screenshot.caption}
                                layout="responsive"
                                width={2000}
                                height={7000}
                                className={`screenshot-image object-cover w-full ${index === 0 ? 'max-h-[540px]' : 'h-auto'
                                    }`}
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Project Content */}
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20 ">
                    {/* Left Section - Project Info */}
                    <div className="w-full lg:w-[40%]">
                        <div className="lg:sticky lg:top-32 space-y-8 md:space-y-16">
                            <div className="border-l-2 border-primary/10 pl-4 md:pl-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Overview</h3>
                                <p className="text-primary/60 text-sm md:text-base">{project.overview}</p>
                            </div>

                            <div className="border-l-2 border-primary/10 pl-4 md:pl-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Project Info</h3>
                                <div className="space-y-4">
                                    {['Year', 'Client', 'Role'].map((item) => (
                                        <div key={item}>
                                            <p className="text-base md:text-lg text-primary">{item}</p>
                                            <p className="text-primary/60 text-sm md:text-base">
                                                {project[item.toLowerCase()]}
                                            </p>
                                        </div>
                                    ))}
                                    <div>
                                        <p className="text-base md:text-lg text-primary">Technologies</p>
                                        <ul className="pl-2 space-y-1">
                                            {project.technologies.map((tech) => (
                                                <li key={tech} className="text-primary/60 text-sm md:text-base">
                                                    • {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Project Content */}
                    <div className="w-full lg:w-[60%] space-y-12 md:space-y-12">
                        {/* Challenge, Solution, Results sections */}
                        {['Challenge', 'Solution', 'Results'].map((section, index) => (
                            <div key={section} className="border-b border-primary/10 pb-12 md:pb-12">
                                <div className="flex items-start">
                                    <span className="text-sm font-medium text-primary/60">
                                        [{String(index + 1).padStart(2, '0')}]
                                    </span>
                                    <div className="ml-4 md:ml-8">
                                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                            The {section}
                                        </h3>
                                        {section === 'Results' ? (
                                            <ul className="space-y-2">
                                                {project.results.map((result, idx) => (
                                                    <li key={idx} className="text-primary/60 flex items-start gap-2 text-sm md:text-base">
                                                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2"></span>
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-primary/60 whitespace-pre-line text-sm md:text-base">
                                                {project[section.toLowerCase()]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Testimonial Section */}
                        {project.testimonial && (
                            <div className="border-b border-primary/10 pb-12 md:pb-24">
                                <div className="flex items-start">
                                    <span className="text-sm font-medium text-primary/60">[04]</span>
                                    <div className="ml-4 md:ml-8">
                                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Client Feedback</h3>
                                        <blockquote className="text-primary/60 text-sm md:text-base">
                                            "{project.testimonial.text}"
                                            <footer className="mt-4">
                                                <p className="font-medium text-primary">{project.testimonial.author}</p>
                                                <p className="text-sm text-primary/60">{project.testimonial.role}</p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ContactCTA />
        </>
    );
}


export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: { slug: project.slug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            project
        }
    };
}