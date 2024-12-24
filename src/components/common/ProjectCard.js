import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project, inView, categoryChanged, index }) => {
    return (
        <div
            className={`group transition-all duration-1000 transform ${inView && !categoryChanged ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <div className="relative aspect-square mb-6 h-[300px] w-full bg-gray-100 overflow-hidden">
                <Image
                    src={project.mainImg}
                    alt={project.title}
                    fill
                    className="object-cover h-[200px] transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <div className="flex gap-2 items-center">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                            <React.Fragment key={tech}>
                                <span className="text-primary/60 text-sm ">{tech}</span>
                                {index !== project.technologies.slice(0, 3).length - 1 && (
                                    <span className="text-primary/60">•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <p className="text-primary/60 leading-relaxed">
                    {project.description}
                </p>

                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex font-medium items-center gap-2 border border-primary/20 px-4 py-2 text-primary hover:bg-primary hover:text-secondary  transition-colors duration-300"
                >
                    View Project
                    <span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
