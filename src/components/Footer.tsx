import React, { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialIconsRow } from "./SocialLinks";
import { Mail, Copy, Check, MapPin, Compass } from "lucide-react";

export const Footer: React.FC = () => {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EDUCATION & EXPERIENCE", href: "#experience" },
  ];

  return (
    <footer id="contact" className="bg-darkBg text-white border-t border-cardBorder pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-chrome font-kanit uppercase tracking-tight">
              {profile.name}
            </h3>
            <p className="text-sm font-semibold tracking-wider text-purple-400 font-kanit">
              {profile.specialization}
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 pt-2">
              <MapPin size={12} className="text-gray-600" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase flex items-center space-x-2">
              <Compass size={14} className="text-gray-600" />
              <span>NAVIGATE</span>
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-kanit uppercase tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Reach Out */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase flex items-center space-x-2 mb-4">
                <Mail size={14} className="text-gray-600" />
                <span>REACH OUT</span>
              </h4>

              {/* Email Copier Pill */}
              {profile.social.email && (
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-darkCard border border-cardBorder max-w-sm">
                  <span className="text-xs font-mono text-gray-300 select-all truncate mr-4">
                    {profile.social.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-black/40 hover:bg-black/80 border border-cardBorder text-gray-400 hover:text-white transition-all duration-200 shrink-0"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check size={14} className="text-green-500 animate-pulse" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Social Icons row */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                SOCIALS
              </p>
              <SocialIconsRow socials={profile.social} size={18} />
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-cardBorder/50 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-4 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-gray-600">
            Built using React, TypeScript &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
