import React from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { MapPin, Briefcase, GraduationCap, Clock } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="py-24 bg-darkBg text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
            01 / INTRODUCTION
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-chrome font-kanit uppercase">
            ABOUT ME
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold font-kanit text-gray-200">
              Building at the intersection of code and vision.
            </h3>
            <p className="text-gray-400 text-base md:text-lg font-normal leading-relaxed font-kanit break-normal overflow-normal">
              {profile.bio}
            </p>
          </div>

          {/* Quick Info Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Role */}
            <div className="p-6 rounded-2xl bg-darkCard border border-cardBorder hover:border-gray-800 transition-all duration-300">
              <Briefcase className="text-purple-500 mb-4" size={24} />
              <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                ROLE
              </h4>
              <p className="text-sm font-medium text-gray-200 font-kanit">
                {profile.role}
              </p>
            </div>

            {/* Card 2: Specialization */}
            <div className="p-6 rounded-2xl bg-darkCard border border-cardBorder hover:border-gray-800 transition-all duration-300">
              <GraduationCap className="text-pink-500 mb-4" size={24} />
              <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                SPECIALIZATION
              </h4>
              <p className="text-sm font-medium text-gray-200 font-kanit leading-snug">
                {profile.specialization}
              </p>
            </div>

            {/* Card 3: Location */}
            <div className="p-6 rounded-2xl bg-darkCard border border-cardBorder hover:border-gray-800 transition-all duration-300">
              <MapPin className="text-orange-500 mb-4" size={24} />
              <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                LOCATION
              </h4>
              <p className="text-sm font-medium text-gray-200 font-kanit">
                {profile.location}
              </p>
            </div>

            {/* Card 4: Experience */}
            <div className="p-6 rounded-2xl bg-darkCard border border-cardBorder hover:border-gray-800 transition-all duration-300">
              <Clock className="text-blue-500 mb-4" size={24} />
              <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                EXPERIENCE
              </h4>
              <p className="text-sm font-medium text-gray-200 font-kanit">
                {profile.yearsOfExperience} Coding & Building
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
