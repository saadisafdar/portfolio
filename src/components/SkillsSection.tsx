import React from "react";
import { usePortfolio } from "../hooks/usePortfolio";

export const SkillsSection: React.FC = () => {
  const { skills } = usePortfolio();

  return (
    <section id="skills" className="py-24 bg-darkBg text-white px-6 border-t border-cardBorder/30">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
            02 / CAPABILITIES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-chrome font-kanit uppercase">
            SKILLS & STACK
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => (
            <div
              key={category.name}
              className="p-8 rounded-3xl bg-darkCard border border-cardBorder hover:border-gray-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold tracking-wider font-kanit uppercase text-gray-200">
                    {category.name}
                  </h3>
                  <span className="text-xs font-mono text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Badge flex wrap */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-black/40 border border-cardBorder text-xs text-gray-400 hover:text-white hover:border-gray-600 hover:scale-105 transition-all duration-200 font-kanit"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
