import React from "react";
import { usePortfolio } from "../hooks/usePortfolio";

export const ExperienceSection: React.FC = () => {
  const { education, experience } = usePortfolio();

  const hasEducation = education && education.length > 0;
  const hasExperience = experience && experience.length > 0;

  // If both are empty, hide the entire section
  if (!hasEducation && !hasExperience) return null;

  return (
    <section id="experience" className="py-24 bg-darkBg text-white px-6 border-t border-cardBorder/30">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Education Sub-Section */}
        {hasEducation && (
          <div>
            <div className="mb-12 text-center md:text-left">
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
                04 / ACADEMIC FOUNDATION
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-chrome font-kanit uppercase">
                EDUCATION
              </h2>
            </div>

            <div className="divide-y divide-cardBorder/50">
              {education.map((item, index) => {
                const num = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
                return (
                  <div
                    key={item.institution + item.degree}
                    className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/[0.01] transition-all duration-300 px-2 rounded-2xl"
                  >
                    {/* Number */}
                    <div className="md:col-span-1 text-sm font-mono font-bold text-gray-600">
                      {num}
                    </div>

                    {/* Title & Location */}
                    <div className="md:col-span-8 space-y-2">
                      <h3 className="text-xl font-bold text-gray-200 font-kanit">
                        {item.institution} — <span className="text-chrome">{item.degree}</span>
                      </h3>
                      <p className="text-sm text-gray-500 font-kanit">
                        {item.location}
                      </p>
                    </div>

                    {/* Period Monospace Pill */}
                    <div className="md:col-span-3 md:justify-self-end">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-darkCard border border-cardBorder text-xs font-mono font-semibold tracking-wider text-purple-400">
                        {item.period}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Experience Sub-Section (Hides if empty) */}
        {hasExperience && (
          <div className="pt-8">
            <div className="mb-12 text-center md:text-left">
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
                05 / PROFESSIONAL PATH
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-chrome font-kanit uppercase">
                EXPERIENCE
              </h2>
            </div>

            <div className="divide-y divide-cardBorder/50">
              {experience.map((item, index) => {
                const num = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
                return (
                  <div
                    key={item.company + item.role}
                    className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/[0.01] transition-all duration-300 px-2 rounded-2xl"
                  >
                    {/* Number */}
                    <div className="md:col-span-1 text-sm font-mono font-bold text-gray-600">
                      {num}
                    </div>

                    {/* Title & Details */}
                    <div className="md:col-span-8 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-200 font-kanit">
                          {item.company} — <span className="text-chrome">{item.role}</span>
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed font-kanit break-normal overflow-normal">
                          {item.summary}
                        </p>
                      </div>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-500 font-kanit pl-2">
                          {item.highlights.slice(0, 3).map((high, i) => (
                            <li key={i}>{high}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Period Monospace Pill */}
                    <div className="md:col-span-3 md:justify-self-end">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-darkCard border border-cardBorder text-xs font-mono font-semibold tracking-wider text-pink-400">
                        {item.period}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
