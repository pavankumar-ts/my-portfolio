import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useInView } from 'react-intersection-observer';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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