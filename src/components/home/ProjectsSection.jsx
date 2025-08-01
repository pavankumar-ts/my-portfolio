// src/components/home/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectsForHome, getTechnologyById, projectCategories } from '@/data/projects';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';
import ProjectCard from '../common/ProjectCard';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const homeProjects = getProjectsForHome();

  return (
    <div ref={ref} className="container">
      <h2 className="heading-xl mb-10">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-20">
        {homeProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            inView={inView}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button href="/projects">
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;