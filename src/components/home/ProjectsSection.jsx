// src/components/home/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectsForHome, getTechnologyById, projectCategories } from '@/data/projects';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const homeProjects = getProjectsForHome();
  const [stackOffset, setStackOffset] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStackOffset(30); // More spacing for mobile
      } else {
        setStackOffset(20); // Less spacing for desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const truncateDescription = (description, limit) => {
    if (description.length <= limit) return description;
    return description.substring(0, limit) + '...';
  };



  // Function to calculate top position with special case for 4th card
  const calculateTopPosition = (index) => {
    if (index === 3 && window.innerWidth < 768) { // 4th card (0-indexed)
      return `${index * stackOffset - (stackOffset * 0.5)}px`; // Reduce by half spacing
    }
    return `${index * stackOffset}px`;
  };

  return (
    <div className="container relative bg-bgColor">
      {/* Header */}
      <div ref={ref} className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-xl text-textColor dark:text-white">
          PROJECTS
        </h2>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {homeProjects.map((project, index) => (
          <div
            key={project.id}
            className="sticky h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
              zIndex: index + 1,
              top: calculateTopPosition(index),
            }}
          >
            <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-sm bg-bgColor border-2 border-[#7a7a7a27] dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] sm:min-h-[400px] lg:min-h-[450px]">
                {/* Project Image */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <Image
                    src={project.mainImg}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute inset-0"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-textColor dark:text-white text-sm font-medium rounded-full border border-borderColor dark:border-gray-600">
                      {getCategoryName(project.category[0])}
                    </span>
                  </div> */}
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-12 flex flex-col justify-center bg-bgColor">
                  <div className="text-sm font-medium mb-4 tracking-wide text-gray-500 dark:text-gray-400 uppercase">
                    {project.technologies.slice(0, 3).map((techId, index) => {
                      const tech = getTechnologyById(techId);
                      return (
                        <React.Fragment key={tech.id}>
                          {tech.name}
                          {index !== project.technologies.slice(0, 3).length - 1 && ' • '}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-textColor dark:text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 text-textColor/70 dark:text-gray-300">
                    {truncateDescription(project.description, 150)}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    <a
                      href={`projects/${project.slug}`}
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 lg:px-5 py-3 lg:py-3 bg-logoColor hover:bg-logoColor/90 text-bgColor dark:text-white font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      View Project
                      <svg
                        className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transition-transform hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center">
        <Button href="/projects">
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;