// src/components/projects/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import { projects, projectCategories } from '@/data/projects';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../common/ProjectCard';
import TitleHeroSection from '../common/TitleHeroSection';

const ProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(1); 
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

    const filteredProjects = selectedCategory === 1
        ? projects
        : projects.filter(project => project.category.includes(selectedCategory));

    return (
        <>
            <div ref={ref} className="container">
                {/* Section Title */}
                <TitleHeroSection
                    title="FEATURED"
                    title2="PROJECTS"
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 border ${selectedCategory === category.id
                                ? 'bg-primary text-secondary'
                                : 'border-primary/10 hover:border-primary/50'
                                } transition-colors`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
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