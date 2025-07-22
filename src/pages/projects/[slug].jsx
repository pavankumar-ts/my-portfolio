// pages/projects/[slug].jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { projects, getRelatedProjects, getTechnologyById } from '@/data/projects';
import Link from 'next/link';
import Head from 'next/head';
import ContactCTA from '@/components/common/ContactCTA';
import ProjectCard from '@/components/common/ProjectCard';
import ProjectEmbed from '@/components/projects/ProjectEmbed';

export default function ProjectPage({ project, relatedProjects }) {
    // Multiple refs for different sections
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: screenshotsRef, inView: screenshotsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: relatedRef, inView: relatedInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <>
            <Head>
                <title>{`${project.title} | Web & Mobile App | Pavan Kumar`}</title>
                <meta name="description" content={project.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Primary Meta Tags */}
                <meta name="keywords" content={`${project.title}, ${project.tags?.join(', ')}, web development, mobile app development, React, Next.js, React Native, Android development, portfolio project`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Pavan Kumar" />
                <meta property="og:title" content={`${project.title} | Web & Mobile App | Pavan Kumar`} />
                <meta property="og:description" content={project.description} />
                {project.mainImg && (
                    <>
                        <meta property="og:image" content={`https://www.pavankumar.co${project.mainImg}`} />
                        <meta property="og:image:secure_url" content={`https://www.pavankumar.co${project.mainImg}`} />
                        <meta property="og:image:width" content="1200" />
                        <meta property="og:image:height" content="630" />
                        <meta property="og:image:type" content="image/webp" />
                    </>
                )}

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${project.title} | Web & Mobile App | Pavan Kumar`} />
                <meta name="twitter:description" content={project.description} />
                {project.mainImg && (
                    <meta name="twitter:image" content={`https://www.pavankumar.co${project.mainImg}`} />
                )}

                {/* Additional Meta Tags */}
                <meta property="og:url" content={`https://www.pavankumar.co/projects/${project.slug}`} />
                <meta property="og:locale" content="en_US" />
            </Head>

            <div className="container">
                {/* Hero Section with Title */}
                <div
                    ref={heroRef}
                    className={`text-center mb-8 md:mb-16 transition-all duration-1000 transform ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold tracking-tight leading-none">
                        {project.title}
                    </h1>

                    <div className={`mt-8 transition-all duration-1000 delay-300 transform ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-4 md:px-6 py-2 md:py-3 bg-primary text-secondary font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-all hover:translate-x-1"
                        >
                            {project.btnText ? project.btnText : 'Visit Website'}
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>

                {/* embed website */}
                {/* {!project.btnText && <ProjectEmbed link={project.link} />} */}

                {/* Screenshots Grid */}
                <div
                    ref={screenshotsRef}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-32"
                >
                    {project.screenshots.map((screenshot, index) => (
                        <div
                            key={index}
                            className={`relative w-full rounded-sm overflow-hidden transition-all duration-1000 transform ${screenshotsInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <Image
                                src={screenshot.url}
                                alt={`${project.title} Pavan Kumar`}
                                layout="responsive"
                                width={2000}
                                height={7000}
                                className="screenshot-image object-cover w-full h-auto hover:scale-105 transition-all duration-1000 transform"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>


                {/* Project Content */}
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                    {/* Left Section - Project Info */}
                    <div
                        ref={infoRef}
                        className={`w-full lg:w-[40%] transition-all duration-1000 transform ${infoInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <div className="lg:sticky lg:top-32 space-y-12">
                            <div className="border-l-2 border-primary/10 pl-6 transition-all hover:border-primary">
                                <h3 className="text-2xl font-semibold mb-6">Project Info</h3>
                                <div className="space-y-8">
                                    {['Year', 'Client'].map((item) => (
                                        <div key={item} className="group">
                                            <p className="text-lg mb-2">{item}:</p>
                                            <p className="text-primary/60 group-hover:text-primary/80 transition-colors">
                                                {project[item.toLowerCase()]}
                                            </p>
                                        </div>
                                    ))}
                                    <div>
                                        <p className="text-lg mb-3">Technologies:</p>
                                        <div className="flex flex-wrap gap-x-10 gap-y-6">
                                            {project.technologies.map((techId) => {
                                                const tech = getTechnologyById(techId);
                                                return (
                                                    <div key={tech.id} className="flex items-center gap-2">
                                                        <Image src={tech.url} alt={tech.name} width={36} height={36} className={`${tech.isDark ? 'bg-white' : ''} p-1`} />
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
                    <div
                        ref={contentRef}
                        className="w-full lg:w-[60%] space-y-12"
                    >
                        {['Overview', 'Challenge', 'Solution', 'Features', 'Results'].map((section, index) => (
                            <div
                                key={section}
                                className={`group border-b border-primary/10 pb-12 hover:border-primary transition-all duration-1000 transform ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-sm font-medium text-primary/40 group-hover:text-primary/60 transition-colors">
                                        [{String(index + 1).padStart(2, '0')}]
                                    </span>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-semibold">
                                            The {section}
                                        </h3>

                                        {section === 'Results' || section === 'Features' ? (
                                            <div className="text-primary/60 leading-relaxed space-y-4 group-hover:text-primary/80 transition-colors">
                                                {project[section.toLowerCase()].map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-3 pl-4 border-l border-primary/10"
                                                    >
                                                        <span>{item}</span>
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
                    </div>
                </div>
            </div>

            <ContactCTA />

            {/* Related Projects Section */}
            <div
                ref={relatedRef}
                className={`container mt-16 transition-all duration-1000 transform ${relatedInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <h2 className="text-3xl font-semibold mb-8">Related Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedProjects.map((relatedProject, index) => (
                        <ProjectCard
                            key={relatedProject.id}
                            project={relatedProject}
                            inView={relatedInView}
                            categoryChanged={false}
                            index={index}
                        />
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