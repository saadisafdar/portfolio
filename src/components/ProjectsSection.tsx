import React from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  const { projects } = usePortfolio();

  if (!projects || projects.length === 0) return null;

  // Pin highlight:true projects first, preserving order otherwise
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-24 bg-darkBg text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
            03 / HANDS-ON CREATION
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-chrome font-kanit uppercase">
            SELECTED PROJECTS
          </h2>
        </div>

        {/* Sticky Cards Stack Container */}
        <div className="relative flex flex-col items-center">
          {sortedProjects.map((project, index) => {
            const numStr = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                number={numStr}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
