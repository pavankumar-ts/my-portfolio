import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, projectCategories } from '@/data/projects';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All projects');
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [categoryChanged, setCategoryChanged] = useState(false);

    useEffect(() => {
        if (entry) {
            setCategoryChanged(true);
            setTimeout(() => setCategoryChanged(false), 1000);
        }
    }, [selectedCategory, entry]);

    const filteredProjects = selectedCategory === 'All projects'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div ref={ref} className="container">
            {/* Section Title */}
            <div className="text-left mb-16 ">
                <h2 className={`text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    FEATURED
                </h2>
                <h2 className={`text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] ml-[20%] font-bold tracking-tight leading-none transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    PROJECTS
                </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {projectCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 border ${selectedCategory === category
                            ? 'bg-primary text-secondary'
                            : 'border-primary/10 hover:border-primary/50'
                            } transition-colors`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`group transition-all duration-1000 transform ${inView && !categoryChanged ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div className="relative aspect-square mb-6 h-[300px] w-full bg-gray-100 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover h-[200px] transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-semibold">{project.title}</h2>
                                <div className="flex gap-2">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <React.Fragment key={tech}>
                                            <span className="text-primary/60 text-sm">{tech}</span>
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
                                href={project.link}
                                className="inline-flex items-center gap-2 border border-primary/20 px-4 py-2 text-primary hover:bg-primary hover:text-secondary  transition-colors duration-300"
                            >
                                View Project
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;