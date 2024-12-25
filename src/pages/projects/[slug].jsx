// pages/projects/[slug].jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { projects, getRelatedProjects, getTechnologyById } from '@/data/projects';
import Link from 'next/link';
import Head from 'next/head';
import ContactCTA from '@/components/common/ContactCTA';

export default function ProjectPage({ project, relatedProjects }) {
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
                            className={`relative w-full rounded-sm overflow-hidden h-auto`}
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
                                className={`screenshot-image object-cover w-fullh-auto`}
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Project Content */}
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20 ">
                    {/* Left Section - Project Info */}
                    <div className="w-full lg:w-[40%]">
                        <div className="lg:sticky lg:top-32 space-y-12">

                            {/* Project Details Section */}
                            <div className="border-l-2 border-primary/10 pl-6 transition-all hover:border-primary">
                                <h3 className="text-2xl font-semibold mb-6">Project Info</h3>
                                <div className="space-y-8">
                                    {['Year', 'Client'].map((item) => (
                                        <div key={item} className="group">
                                            <p className="text-lg mb-2">{item}</p>
                                            <p className="text-primary/60 group-hover:text-primary/80 transition-colors">
                                                {project[item.toLowerCase()]}
                                            </p>
                                        </div>
                                    ))}
                                    <div>
                                        <p className="text-lg mb-3">Technologies</p>
                                        <div className="flex flex-wrap gap-x-10 gap-y-6">
                                            {project.technologies.map((techId) => {
                                                const tech = getTechnologyById(techId);
                                                return (
                                                    <div key={tech.id} className="flex items-center gap-2">
                                                        <Image src={tech.url} alt={tech.name} width={24} height={24} />
                                                        <span className="text-primary/60">{tech.name}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Project Content */}
                    <div className="w-full lg:w-[60%] space-y-12">
                        {['Overview', 'Challenge', 'Solution', 'Results'].map((section, index) => (
                            < div
                                key={section}
                                className="group border-b border-primary/10 pb-12 hover:border-primary transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-sm font-medium text-primary/40 group-hover:text-primary/60 transition-colors">
                                        [{String(index + 1).padStart(2, '0')}]
                                    </span>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-semibold">
                                            The {section}
                                        </h3>

                                        {section === 'Results' ? (
                                            // Updated Results Section with consistent styling
                                            <div className="text-primary/60 leading-relaxed space-y-4 group-hover:text-primary/80 transition-colors">
                                                {project.results.map((result, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-3 pl-4 border-l border-primary/10"
                                                    >
                                                        <span>{result}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-primary/60 leading-relaxed space-y-4 group-hover:text-primary/80 transition-colors">
                                                {project[section.toLowerCase()].split('•').map((point, idx) => (
                                                    <p key={idx} className="pl-4 border-l border-primary/10">
                                                        {point.trim()}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Testimonial Section - Updated */}
                        {/* {project.testimonial && (
                            <div className="bg-primary/5 p-8 rounded-lg">
                                <div className="flex items-start gap-6">
                                    <span className="text-sm font-medium text-primary/40">
                                        [04]
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-6">Client Feedback</h3>
                                        <blockquote className="text-primary/60 italic">
                                            "{project.testimonial.text}"
                                            <footer className="mt-6 not-italic">
                                                <p className="font-semibold text-primary">{project.testimonial.author}</p>
                                                <p className="text-sm text-primary/60">{project.testimonial.role}</p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>
            </div >
            <ContactCTA />
            {/* Related Projects Section */}
            <div className="container mt-16">
                <h2 className="text-3xl font-semibold mb-8">Related Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedProjects.map((relatedProject) => (
                        <div key={relatedProject.id} className="border p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">{relatedProject.title}</h3>
                            <p className="text-primary/60 mb-4">{relatedProject.description}</p>
                            <Link href={`/projects/${relatedProject.slug}`}>
                                <a className="text-primary hover:underline">View Project</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
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

    const relatedProjects = getRelatedProjects(project);

    return {
        props: {
            project,
            relatedProjects
        }
    };
}