// src/components/projects/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import { projects, projectCategories } from '@/data/projects';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../common/ProjectCard';

const ProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Projects');
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [categoryChanged, setCategoryChanged] = useState(false);

    useEffect(() => {
        if (entry) {
            setCategoryChanged(true);
            setTimeout(() => setCategoryChanged(false), 500);
        }
    }, [selectedCategory, entry]);

    const filteredProjects = selectedCategory === 'All Projects'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            inView={inView}
                            categoryChanged={categoryChanged}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectsSection;