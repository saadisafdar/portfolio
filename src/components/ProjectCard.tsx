import React from "react";
import type { ProjectItem } from "../types/portfolio";
import { ExternalLink, Layers, Calendar, User } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  number: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, number }) => {
  return (
    <div className="sticky top-28 w-full rounded-3xl bg-darkCard border border-cardBorder p-6 sm:p-8 md:p-10 hover:border-gray-800 transition-all duration-300 shadow-2xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Info */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          <div>
            {/* Index & Highlight Pill */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-mono text-gray-500 font-bold">
                {number}
              </span>
              {project.highlight && (
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white tracking-widest uppercase">
                  PINNED FEATURE
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-chrome font-kanit uppercase tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-purple-400 text-xs sm:text-sm font-semibold tracking-wider font-kanit uppercase mb-4">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-kanit break-normal overflow-normal">
              {project.description}
            </p>
          </div>

          {/* Details & Metadata */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-gray-500 border-t border-cardBorder/50 pt-4">
              <div className="flex items-center space-x-2">
                <User size={14} className="text-gray-600" />
                <span>ROLE: {project.role.toUpperCase()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-gray-600" />
                <span>YEAR: {project.year}</span>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-black/50 border border-cardBorder text-[10px] font-mono text-gray-400 uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Link Button */}
            {project.link && project.link.trim() !== "" && (
              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full btn-gradient text-xs font-bold tracking-widest text-white uppercase"
                >
                  <span>LIVE PROJECT</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Media Container */}
        <div className="lg:col-span-5 w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden relative border border-cardBorder/40">
          {project.image && project.image.trim() !== "" ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Fallback dark placeholder with overlaid title */
            <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-black to-neutral-950 flex flex-col justify-between p-6 sm:p-8 select-none">
              <Layers className="text-gray-700 self-end" size={28} />
              <div>
                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">
                  PROJECT PREVIEW
                </p>
                <h4 className="text-lg sm:text-xl font-bold font-kanit text-gray-500 uppercase tracking-wide">
                  {project.title}
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
