import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getTechnologyById } from '@/data/projects';

const ProjectCard = ({ project, categoryChanged, index }) => {
    const truncateDescription = (description, limit) => {
        if (description.length <= limit) return description;
        return description.substring(0, limit) + '...';
    };

    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`group ${categoryChanged ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            style={{ 
                animation: 'fadeUp 0.5s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
            }}
        >
            <style jsx>{`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

            <div className="relative aspect-square mb-6 h-[300px] w-full bg-gray-100 overflow-hidden">
                <Image
                    src={project.mainImg}
                    alt={project.title}
                    fill
                    className="object-cover h-[200px] transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <div className="flex gap-2 items-center">
                        {project.technologies.slice(0, 3).map((techId, index) => {
                            const tech = getTechnologyById(techId);
                            return (
                                <React.Fragment key={tech.id}>
                                    <span className="text-primary/60 text-sm">{tech.name}</span>
                                    {index !== project.technologies.slice(0, 3).length - 1 && (
                                        <span className="text-primary/60">•</span>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                <p className="text-primary/60 leading-relaxed">
                    {truncateDescription(project.description, 150)}
                </p>

                <div
                    className="inline-flex font-medium items-center gap-2 border border-primary/20 px-4 py-2 text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
                >
                    View Project
                    <span>→</span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;