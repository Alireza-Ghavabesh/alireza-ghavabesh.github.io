import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={`https://${project.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-cyan-400 font-mono flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {project.domain}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
