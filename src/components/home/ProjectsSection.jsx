import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../common/ProjectCard';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="container">
      <h1 className="heading-xl mb-20">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            inView={inView}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;