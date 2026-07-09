import React from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { getSocialIcon, getActiveSocials } from "./SocialLinks";
import { ArrowUpRight } from "lucide-react";

export const FindMeSection: React.FC = () => {
  const { profile } = usePortfolio();
  const activeSocials = getActiveSocials(profile.social);

  if (activeSocials.length === 0) return null;

  // Duplicate items to ensure a seamless loop
  const marqueeItems = [...activeSocials, ...activeSocials, ...activeSocials];

  return (
    <section id="find-me" className="py-24 bg-darkBg text-white overflow-hidden border-t border-cardBorder/30">
      <style>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
        }
        .animate-marquee {
          animation: marquee-scroll 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* We scroll by 1/3 since we have 3 copies */
            transform: translateX(-33.3333%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            width: 100% !important;
            mask-image: none !important;
            -webkit-mask-image: none !important;
            padding: 0 16px !important;
          }
          .marquee-item {
            scroll-snap-align: start !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Header */}
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
            05 / DIGITAL FOOTPRINT
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-chrome font-kanit uppercase">
            FIND ME ONLINE
          </h2>
        </div>
      </div>

      {/* CSS Marquee Track */}
      <div className="marquee-container py-4">
        <div className="marquee-track animate-marquee">
          {marqueeItems.map(([platform, url], index) => (
            <a
              key={`${platform}-${index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-item block w-56 sm:w-64 p-6 sm:p-8 rounded-3xl bg-darkCard border border-cardBorder hover:border-purple-500/50 hover:bg-black/50 transition-all duration-300 mx-3 shrink-0 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                  {getSocialIcon(platform, 32)}
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">
                  PLATFORM
                </p>
                <h4 className="text-base sm:text-lg font-bold font-kanit text-gray-300 uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                  {platform}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
